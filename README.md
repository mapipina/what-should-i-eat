# Pantry-to-Plate
Introducing Pantry to Plate, we have developed a clean, user-friendly simplistic site.    Our site will allow the User to enter the available ingredients via checkboxes based on specific food categories in turn the site will provide the User with 6 recipes based on the ingredients they already have along with missing ingredients (if needed) and of course recipe instructions.

Objective: Help people search what to cook with the little ingredients they have in pantry/fridge.

# User Flow
	1. Lands on homepage
	2. Firebase pop-up initializes Facebook authentication and login
	4. User taken to profile portal
	5. User chooses ingredients and hits submit
	6. 6 recipes will appear along with missing ingredients (“if needed”) 
	7. Recipe instructions included in a scrolling 

# Architecture
	  1. Create the Firebase database and implement code for db & FB authentication
	  2. Create facebook user login app in their dev site, sync it with Firebase via app ID & secret
	  3. Placed in function to call it when document is ready and create pop up delay of 2sec
	  4. From there, we had to create an on.click function dependent on the Submit button
	  5. After running into scope issues with the global ingredient array and the AJAX calls, 
	  we decided to nest everything in the on.click function

# Libraries Used
	- jQuery for javascript simplification(Write less do more) 
	- Bootstrap for responsive site with grid layout
	- FontAwesome CDN for icon use
	- SweetAlert for the stylish alert pop-up after hitting Submit button
	- Google Fonts website font

# Technologies Used
	- Insomnia for AJAX testing
	- Firebase and Facebook for user authentication
	- Firebase for user storage
	- Sourcetree in lieu of MAC terminal or Git Bash
	- GitHub for repositories 
	- GitHub Projects for collaboration

# APIs
	- Spoonacular for recipe titles, images, ingredient search
	- Spoonacular (separate) for the actual recipe instructions

# Roles
	- Mapi, *JavaScript Developer and Project Manager*
	- Jackie, *Backend Developer*
	- Yamil, *Frontend Developer*
	- Pedro, *Frontend Developer*


# Future of This App
Make it more of a night-in type of app by complementing recipes with suggested wine pairings or cocktail along with movie. In addition, to connect to an Amazon Pantry or InstaCart API to easily order missing ingredients. If you're not too hungry to wait!
