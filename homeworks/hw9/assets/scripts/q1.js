
//
// Part 1: Code setBackgroundColor() so the background color of #q1-container changes to the color specified
//

function redButtonClicked() {
    var container = document.getElementById('q1-container');
    container.style.backgroundColor = 'EF476F';
  }

  // Attaching click event listener to the button
  var redButton = document.getElementById('q1-btn-red');
  redButton.addEventListener('click', redButtonClicked);

//     // TODO: Get the element with the id "q1-container" and set its background color to the input color
//  
// //
// // Part 2: Code the function redButtonClicked() andx make the browser run the function for you when #q1-btn-red is clicked
// 

//   // Attach the redButtonClicked function to the click event of the button
//   
// // Define the redButtonClicked function

// For the red button
// Use the color #EF476F, or change it up to your liking
// If you do decide to change the color, probably also consider updating the corresponding button color in CSS :)

/**
 * Handler function that the browser should run when the red button is clicked
 */
// function redButtonClicked() {
    // TODO: Use the setBackgroundColor() to set the background color to #EF476F (or another color of your choice)





// }

// This gets the element with id "q1-btn-red" and sets the browser to run the function redButtonClicked() when someone clicks the element
// document.getElementById("q1-btn-red").onclick = redButtonClicked;

// After you finish part 1 & 2, the clicking the red button should turn the background color red!

//
// Part 3: Program the yellow button similar to what you did with the red button
//

// For the yellow button
// Use the color #FFD166, or change it up to your liking

// TODO: Define a function like yellowButtonClicked() that sets the background color

function yellowButtonClicked() {
    var container = document.getElementById('q1-container');
    container.style.backgroundColor = 'FFD166';
  }

  // Attaching click event listener to the button
  var redButton = document.getElementById('q1-btn-yellow');
  redButton.addEventListener('click', yellowButtonClicked);



// TODO: Set the browser to run the function yellowButtonClicked() when someone clicks #q1-btn-yellow





//
// Part 4: A little more practice, let's do the same for the rest of the buttons
//

// For the green button
// Use the color #06D6A0, or change it up to your liking

// TODO: Make the green button work similarly

function greenButtonClicked() {
    var container = document.getElementById('q1-container');
    container.style.backgroundColor = '06D6A0';
  }

  // Attaching click event listener to the button
  var redButton = document.getElementById('q1-btn-green');
  redButton.addEventListener('click', greenButtonClicked);



// For the light blue button
// Use the color #118AB2, or change it up to your liking

// TODO: Make the light blue button work similarly


function lightblueButtonClicked() {
    var container = document.getElementById('q1-container');
    container.style.backgroundColor = '118AB2';
  }

  // Attaching click event listener to the button
  var lightblueButton = document.getElementById('q1-btn-lightblue');
  lightblueButton.addEventListener('click', lightblueButtonClicked);



// For the blue button
// Use the color #073B4C, or change it up to your liking

// TODO: Make the blue button work similarly
function blueButtonClicked() {
    var container = document.getElementById('q1-container');
    container.style.backgroundColor = '073B4C';
  }

  // Attaching click event listener to the button
  var blueButton = document.getElementById('q1-btn-blue');
  blueButton.addEventListener('click', blueButtonClicked);



  // Function to change background color to red
  
