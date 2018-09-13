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
    var trainFirstTime = $('#firstTrainTime').val().trim()
    var trainFreq = $('#frequencyMin').val().trim()

    console.log(trainName)
    console.log(trainDest)
    console.log(trainFirstTime)
    console.log(trainFreq)

  })