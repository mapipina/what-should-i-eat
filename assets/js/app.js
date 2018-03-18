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
// var provider = new firebase.auth.FacebookAuthProvider();

//   firebase.auth().signInWithPopup(provider).then(function(result) {
//   // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//   // ...
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });

// move logged in user into profile page--where they can then begin selecting ingredients


// create an empty array to hold the ingredients
var userIng = ["tomato", "garlic"];

// create click functions that read the value of each ingredient a user chooses
var getIngredients = $('.submit').click(function(){
  var ingVal = $('.button').val();
  // push ingredients to the empty array
});



// create variable that takes what's inside the ingredient array
var idOfIngredient = userIng;

// insert ajax call
 $.ajax({
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?number=6&ingredients=' + idOfIngredient,
            type: 'GET',
            dataType: "json",
            headers: {
                "X-Mashape-Key": "X8yAVqBU1lmshLf36wrduOrjiFvRp1fHMHGjsnJNJmXznSEdqH",
                "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"
            },
            data: {}
        }).done(function(response) {
    console.log(response);
    $(".jumbotron").append("<h2>" + "Recipes Available" + "</h2>");
    for (var i = 0; i < response.length; i++) {
// define what we want: title, image, cooking instructions
// variables for each
      var title = response[i].title;
      var image = response[i].image;
      var ingHave = response[i].usedIngredientCount;
      var ingNeed = response[i].missedIngredientCount;
      console.log(title);
      console.log(ingHave);
      console.log(ingNeed);
      var recipeDiv = $("<div class=recipeCard>");
      recipeDiv.addClass("col-sm-4");
      var imageDiv = $("<img>");
      imageDiv.append(image).attr("src", image);
      // image.attr("src", image);
      recipeDiv.prepend(imageDiv);
     // image.prependTo(recipeDiv);
      var titleP = $("<h3>" + title + "</h3>");
      recipeDiv.append(titleP);
      var ingredients = $("<p>" + "Matched Ingredients: " + ingHave + " Missing Ingredients: " + ingNeed + "</p>");
      recipeDiv.append(ingredients);
      $("#recipeArea").append(recipeDiv);
// $("#title").append()
    };


    });

// create function that returns a max of 6 recipes
// recipes: function(){

// }



// append title, image, cooking instructions to divs


});

