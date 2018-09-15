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


  $('.add-train-btn').on('click',function(){
    event.preventDefault()
    
    // Grabs Train Info
    var trainName = $('#trainName').val().trim()
    var trainDest = $('#destination').val().trim()
    var trainFirstTime = moment($('#firstTrainTime').val().trim(),"HH:mm").format("X")
    var trainFreq = $('#frequencyMin').val().trim()

    
    // Combining into a Object
    var trainInfo ={
      name: trainName,
      destination: trainDest,
      firstTime: trainFirstTime,
      frequency: trainFreq
    } 

    // Uploads Train Information to Database
    db.ref().push(trainInfo)

  })

  // Firebase Event

  db.ref().on("child_added",function(data){
    console.log(data.val())

    var trainName = data.val().name
    var trainDest = data.val().destination
    var trainFirstTime = data.val().firstTime
    var trainFreq = data.val().frequency

    // Current Time
    var currentTime = moment().format("X")

    console.log(moment.unix(trainFirstTime).format("MM/DD/YYYY hh:mm A"))
    console.log(moment.unix(currentTime).format("MM/DD/YYYY hh:mm A"))


    // Minutes from the Strat Time to Current Time
    var minArrival = moment().diff(moment(trainFirstTime,"X"), 'minutes')
    var minLast = minArrival % trainFreq
    var awayTrain = 0

    console.log(minArrival)


    // Determines Minutes away from Next Train
    if (minArrival < 0) {
      awayTrain = (-minArrival) + 1
    } else {
      awayTrain = (trainFreq - minLast)
    }

    // Determines Next Arrival
    var nextArrival = moment().add(awayTrain, 'minutes').format("hh:mm A")

      console.log(awayTrain)
      console.log(nextArrival)

    
    // Create the new row
    

    // Append the new row to the table


  })




