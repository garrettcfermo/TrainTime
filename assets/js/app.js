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
    var trainFirstTime = moment($('#firstTrainTime').val().trim(),"hh:mm").format("X")
    var trainFreq = $('#frequencyMin').val().trim()

    // Combining into a Object
    var trainInfo ={
      name: trainName,
      destination: trainDest,
      first_time: trainFirstTime,
      frequency: trainFreq
    }


  })

var x = moment().startOf('hour').format()
console.log(x)