$(document).ready(function(){ // everything will initialize when the page is ready
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


// set up initial login for user on landing page
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

// move login user into profile page--where they can then begin selecting ingredients


// create an empty array to hold the ingredients
var userIng = [];

// create click functions that read the value of each ingredient a user chooses

// push ingredients to the empty array
  
// 

// create variable that takes what's inside the ingredient array
var idOfIngredient = userIng;
// create variable that holds the query URL

// insert ajax call
 $.ajax({
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=' + idOfIngredient,
            type: 'GET',
            dataType: "json",
            headers: {
                "X-Mashape-Key": "X8yAVqBU1lmshLf36wrduOrjiFvRp1fHMHGjsnJNJmXznSEdqH",
                "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"
            },
            data: {}
        }).done(function(data) {
    console.log(data)
    });

// create function that returns a max of 5 recipes

})

