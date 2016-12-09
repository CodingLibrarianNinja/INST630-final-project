// Global Variable to show empty shopping cart for the customer to put items in
// Items will be added to this array as customers add them to the cart
var shoppingCart = []; 

var i;

// object constructor for premade jewelry items
function preMade(name, price) {
	this.name = name;
    this.price = price;	
}

// if length is null the cart is empty
if(sessionStorage.getItem("length") != null){
    var name;
    var price;
    var item;
    this.length = Number(sessionStorage.getItem("length"));
    
    /* uses the length taken from session storage to iterate through the loop and get the object values
    to add previous items back to the cart after refreshing or changing the page */
    for(i = 1; i<=this.length; i++) {
        name = sessionStorage.getItem("name" + i.toString());
        price = Number(sessionStorage.getItem("price" + i.toString()));
        item = new preMade(name, price);
        shoppingCart.push(item); 
    }  
}

/* function that takes in the parameters of the premade item, creates an object, pushes it to the cart, and saves the objects values to session storage */
function preMadeCart(name, price) {
    var item = new preMade(name, price);
    shoppingCart.push(item);
    
    // String type variable using the length of the cart as an iterator for identifying the objects values
    var length = shoppingCart.length.toString();
    
    // saves the length of the cart and object's values to session storage for later retrieval
    sessionStorage.setItem("length", length);
    sessionStorage.setItem("name" + length, name);
    sessionStorage.setItem("price" + length, price.toString());
    }

// tests whether the function is pushing items to the cart
for (i=0; i<shoppingCart.length; i++){console.log(shoppingCart[i].name);}

// draft of an object constructor for custom items
function customItem(size, wire, color, price) {
    this.size = size;
    this.wire = wire;
    this.color = color;
    this.price = price;
}

// draft of a function for adding custom items to the cart
function addToshoppingCart() {
    var size = GetURLParameter("RingSize");
    var wire = GetURLParameter("RingWire");
    var color = GetURLParameter("CrystalColor");
    var price;
    if (wire === "Copper"){
        price = 15;
    } else {
        price = 25;
    }
    
    var custom = new customItem(size, wire, color, price);     
    shoppingCart.push(custom);
    
    // string type variable using the length of the cart as an iterator for identifying the objects values
    var length = shoppingCart.length.toString();
    var name = ("Custom Ring Size: " + size + " Wire: " + wire + " Swarovski Crystal Color: " + color);
    
    // saves the length of the cart and object's values to session storage for later retrieval
    sessionStorage.setItem("length", length);
    sessionStorage.setItem("name" + length, name);
    sessionStorage.setItem("price" + length, price.toString());
}

// loop that writes the shopping cart array values to the cart page
var table = document.getElementById("table");
if(table != undefined) {
    for (i=0; i<shoppingCart.length; i++) {
        table.innerHTML += "<tr><td>" + shoppingCart[i].name + "</td><td>" + "$" + shoppingCart[i].price + "</td></tr>";
    }
}

// function that adds item prices in the cart
var total = 0;    
for (i=0; i<shoppingCart.length; i++){
    total += shoppingCart[0].price;
}
    
document.getElementById("GrandTotal").innerHTML = "" + (total + 5);

// adding array to email

var arrayField = document.querySelector("[name=jsArray]")