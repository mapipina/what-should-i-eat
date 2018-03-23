 // everything will initialize when the page is ready
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

  var database = firebase.database();


// set up initial login for user on landing page
var provider = new firebase.auth.FacebookAuthProvider();

var handleSuccessfulLogin = function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user);
  // save user name
  var name = result.user.displayName;
  var email = result.user.email;
  // UPDATE database
  database.ref('users').push({
    name: name,
    email: email
  });
}

var handleLoginError = function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
}


var login = function(){
  firebase.auth().signInWithPopup(provider).then(handleSuccessfulLogin).catch(handleLoginError);
}

// Functions for ingredients, ajax calls, recipes
$(document).ready(function(){
  setTimeout(login, 2000);

  // Accordion for Ingredient list  
 var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// move logged in user into profile page--where they can then begin selecting ingredients



// create functions that read the value of each ingredient a user chooses
  var getIngredients = $('.submit').click(function(){
    event.preventDefault();
    // toggle the aside
    $("aside").toggle();
    var newGreeting = $("<h2 style=text-align:center>" + "Recipes Available" + "</h2>");
    $(".greeting").html(newGreeting);
// custom alert
    swal({
      title: "Awesome!",
      text: "We're loading your recipes right now",
      icon: "success",
      button: "Check out recipes",
    });
    // create an empty array to hold the ingredients
  var userIng = [];
    // update array
    $("input:checked").each(function(i, el){
      console.log(el);
      var value = $("input:checked").val();
      userIng.push(value);
    });
    // create variable that takes what's inside the ingredient array
  var idOfIngredient = userIng;

  // create AJAX call to create GET request for Recipe Information
  var getInstruction = function(recipeID, recipeDiv) {
    $.ajax({
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + recipeID + '/information?includeNutrition=false',
    type: 'GET',
    dataType: 'json',
    headers: {
      "X-Mashape-Key": "X8yAVqBU1lmshLf36wrduOrjiFvRp1fHMHGjsnJNJmXznSEdqH",
      "X-Mashape-Host": "spoonacular-recipe-food-nutrition-v1.p.mashape.com"
    },
    data: {}

  }).done(function(response){
    console.log(response);
    // within AJAX call, reference global variable for instructions
    var instructions = response.instructions;
    instrP = $("<p>" + instructions + "</p>");
    instrP.addClass("instructionsP");
    recipeDiv.append(instrP);
    });
  };

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
            // $(".jumbotron").append("<h2>" + "Recipes Available" + "</h2>");
            for (var i = 0; i < response.length; i++) {
  // define what we want: title, image, cooking instructions
  // variables for each
            var title = response[i].title;
            var image = response[i].image;
            var ingHave = response[i].usedIngredientCount;
            var ingNeed = response[i].missedIngredientCount;
            var recipeID = response[i].id;
       // append title, image, cooking instructions to divs
            var recipeDiv = $("<div class=recipeCard>");
            recipeDiv.addClass("col-sm-5 col-sm-offset-1");
            var imageDiv = $("<img class=recipeImg>");
            imageDiv.append(image).attr("src", image);
            recipeDiv.prepend(imageDiv);
            var titleP = $("<h3>" + title + "</h3>");
            recipeDiv.append(titleP);
            var ingredients = $("<p>" + "Matched Ingredients: " + ingHave + "<br>" + " Missing Ingredients: " + ingNeed + "</p>");
            ingredients.addClass("ingredients");
            recipeDiv.append(ingredients);
            $("#recipeArea").append(recipeDiv);
            console.log(recipeID);
            getInstruction(recipeID, recipeDiv);
          };
          

        });

    }); // end of submit





}); // end of document ready

