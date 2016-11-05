/*!
 * dog.js
 *
 * Weight loss for dogs.
 *
 * Author: Coral Sheldon-Hess, coral@umd.edu
 */ 

var fido = {     // a dog, type: Object
    name: "Fido",
    weight: 40,
    breed: "Mixed",
    loves: ["walks", "fetching balls"]
};

var spot = {  // a dog, type: Object
    name: "Spot",
    weight: 20
}

var toggle = 0;  // for toggling between dogs (advanced), type: Number
var displayText = '';  // text to be written to the HTML page, type: String
var dog = fido; // one of the dogs, type: Object

// A function called loseWeight that has two parameters: a dog-style object
// and the number of pounds to lose. It reduces the dog's weight by that many points. 
// This function does not use global variables and has no side effects.
// It also ensures that Fido's weight does not go negative.

// advanced solution
function loseWeight(dogObject, pounds) {
    if (dogObject && typeof(pounds) === 'number' && pounds >= 0) { // if inputs valid
           if (dogObject.weight - pounds >= 0) { // preventing negative weights
            dogObject.weight = dogObject.weight - pounds;
        } else {
            dogObject.weight = 0;
        } 
    } else { // if either input is invalid
        // this isn't a proper exception; it's just an error message
        console.log('Error: invalid input into function loseWeight()');
    }
}

// normal solution
/* function loseWeight(dogObject, pounds) {
    if (dogObject.weight - pounds >= 0) { // preventing negative weights
        dogObject.weight = dogObject.weight - pounds;
    } else {
        dogObject.weight = 0;
    } 
} */

// [advanced] How can you modify your program to switch between Fido and Spot, updating and
// displaying both?

// [advanced] As a more advanced version, validate input and throw an error (exception) if the input
// isn't valid;e.g., throw "some meaningful error message"; 

// This function is called whenever the user clicks the lose weight button
onLoseWeightButtonClick = function () {

    // part of advanced solution
    if (toggle % 2 === 0) {  // Fido is odd; Spot is even
        dog = spot;
    } else {
        dog = fido;
    }

    // non-advanced solution: we already set dog = fido at the top of the file

    // decrease current dog's weight
    loseWeight(dog, 2);

    // change text to match current dog in the HTML
    displayText = dog.name + '\'s current weight is ' + String(dog.weight);
    document.getElementsByTagName("p")[0].innerHTML = displayText;

    // force it to switch between Fido and Spot, part of advanced solution
    toggle++; 
}

// Called once when the page is done loading
window.onload = function () {
    // Set up the connection
    document.getElementById("loseWeightButton").onclick = onLoseWeightButtonClick;

    // Initialize the current weight span in the HTML page
    document.getElementById("currentWeight").innerHTML = fido.weight;
}