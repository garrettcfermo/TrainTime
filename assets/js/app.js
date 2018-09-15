// Firebase Database

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDRadN4SMfaz0PkdY9ObmMFoBj2r5J1gGw",
  authDomain: "traintime-6d71c.firebaseapp.com",
  databaseURL: "https://traintime-6d71c.firebaseio.com",
  projectId: "traintime-6d71c",
  storageBucket: "traintime-6d71c.appspot.com",
  messagingSenderId: "1066380749984"
};

firebase.initializeApp(config);

var db = firebase.database()


$('.add-train-btn').on('click', function () {
  event.preventDefault()

  // Grabs Train Info
  var trainName = $('#trainName').val().trim()
  var trainDest = $('#destination').val().trim()
  var trainFirstTime = moment($('#firstTrainTime').val().trim(), "HH:mm").format("X")
  var trainFreq = $('#frequencyMin').val().trim()


  // Combining into a Object
  var trainInfo = {
    name: trainName,
    destination: trainDest,
    firstTime: trainFirstTime,
    frequency: trainFreq
  }

  // Uploads Train Information to Database

  if (trainName != "") {
    db.ref().push(trainInfo)
  }

  //Clear Input values
  $('#trainName').val('')
  $('#destination').val('')
  $('#firstTrainTime').val('')
  $('#frequencyMin').val('')
})

// Refresh Button 

$(".refreshbtn").on('click',function(){
  location.reload()
})

// Firebase Event

db.ref().on("child_added", function (data) {

  var trainName = data.val().name
  var trainDest = data.val().destination
  var trainFirstTime = data.val().firstTime
  var trainFreq = data.val().frequency

  // Current Time
  var currentTime = moment().format("X")


  // Minutes from the Strat Time to Current Time
  var minArrival = moment().diff(moment(trainFirstTime, "X"), 'minutes')
  var minLast = minArrival % trainFreq
  var awayTrain = 0

  // Determines Minutes away from Next Train
  if (minArrival < 0) {
    awayTrain = (-minArrival) + 1
  } else {
    awayTrain = (trainFreq - minLast)
  }

  // Determines Next Arrival
  var nextArrival = moment().add(awayTrain, 'minutes').format("hh:mm A")

  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDest),
    $("<td>").text(trainFreq),
    $("<td>").text(nextArrival),
    $("<td>").text(awayTrain)
  );

  // Append the new row to the table
  $(".train-info-table").append(newRow)

})




