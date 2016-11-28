// Global Variable to show empty shopping cart for the customer to put items in
// Items will be added to this array as customers add them to the cart
var shoppingCart = []; 

// object constructor for premade jewelry items
function preMade(name, price) {
	this.name = name;
    this.price = price;	
}

// function that takes in the paremeters of the premade item, creates an object, and pushes it to the cart
function preMadeCart(name, price) {
    var item = new preMade(name, price);
    shoppingCart.push(item);
    alert(shoppingCart);
    }

// temporarily tests whether the function is pushing items to the cart
for (var i=0; i<shoppingCart.length; i++){console.log(shoppingCart[i].name);}

// draft of an event listener for premade "add to cart" button
document.getElementById("test").addEventListener("submit", function() {
    preMadeCart("Aqua Cane Glass Earrings", 15);
});

// draft of an object constructor for custom items
function customItem(size, wire, color) {
    this.size = size;
    this.wire = wire;
    this.color = color;
}

// draft of a function for adding custom items to the cart
function addToshoppingCart(customItem, quantity) {
    for (var i = 0; i < quantity; i++) {
         shoppingCart.push(customItem);
    }
}

// Need to create submit button with an event listener that confirms the order and e-mails it to 
// sparklingcreationsjewelry@gmail.com


/*var aquaPreMade = new preMade('Aqua Cane Glass Earrings', 15);

var bluestripedPreMade = new preMade('Blue Striped Beaded Necklace', 40);

var bluezirconPreMade = new preMade('Blue Zircon Wire Wrapped Bracelet', 25);

var fireopalPreMade = new preMade('Fire Opal Silver Heart Pendant', 30);

var nighttreePreMade = new preMade('Night Tree of Life Pendant', 35);

var crystalheartPreMade = new preMade('Purple Swarovski Crystal Heart Earrings', 15);

var redcoralPreMade = new preMade('Red and Pink Coral Beaded Necklace', 45);

var summertreePreMade = new preMade('Summer Tree of Life Pendant', 35);

var treeagatePreMade = new preMade('Tree Agate Gemstone Earrings with Green Swarovski Crystals', 18);

var wintertreePremade = new preMade('Winter Tree of Life Pendant', 35);

var copperRing = new preMade("Custom Copper Wire Ring", 15);

var silverRing = new preMade("Custom Silver Wire Ring", 25);*/

