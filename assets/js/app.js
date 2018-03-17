// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD18OuMblJc0S9_oWszlKGk7ntxTvzApxs",
    authDomain: "what-should-i-cook.firebaseapp.com",
    databaseURL: "https://what-should-i-cook.firebaseio.com",
    projectId: "what-should-i-cook",
    storageBucket: "what-should-i-cook.appspot.com",
    messagingSenderId: "121043923354"
  };
  firebase.initializeApp(config);

  var provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});