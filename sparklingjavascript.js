//INST630 Final Project-Stephani Moore/Rosie Yanosko
//Sparkling Creations JavaScript Page

var shoppingCart = []; //Global Variable to show empty shopping cart for the customer to put items in
//Items will be added to this array as customers add them to the cart

//Need function for adding premadejewelry to cart

function preMade(name, price) {
	this.name = name;
    this.price = price	
}

var aquaPreMade = new preMade('Aqua Cane Glass Earrings', 15);

var bluestripedPreMade = new preMade('Blue Striped Beaded Necklace', 40);

var bluezirconPreMade = new preMade('Blue Zircon Wire Wrapped Bracelet', 25);

var fireopalPreMade = new preMade('Fire Opal Silver Heart Pendant', 30);

var nighttreePreMade = new preMade('Night Tree of Life Pendant', 35);

var crystalheartPreMade = new preMade('Purple Swarovski Crystal Heart Earrings', 15);

var redcoralPreMade = new preMade('Red and Pink Coral Beaded Necklace', 45);

var summertreePreMade = new preMade('Summer Tree of Life Pendant', 35);

var treeagatePreMade = new preMade('Tree Agate Gemstone Earrings with Green Swarovski Crystals', 18);

var wintertreePremade = new preMade('Winter Tree of Life Pendant', 35);

var copperRing = new preMade("Custom Copper Wire Ring",15);

var silverRing = new preMade("Custom Silver Wire Ring",25);


//Need function for having the person's custom ring photo to show up based
//on form's input Switch statement for different photos
function ringChoice(){
	
	//Need to append it to the HTML nodeName
	//Coral gave me the following code
	/*
	var elem = document.createElement("img");
 elem.setAttribute("src", "images/img1.jpg");
 elem.setAttribute("height", "300");
 elem.setAttribute("width", "400");
 elem.setAttribute("alt", "Purple stone");
 document.getElementById("placehere").appendChild(elem);

*/

//I want to declare variables using values from the custom ring form
/*
	var ringWire = document.getElementById("Ring Wire"); //declaring Ring Wire variable
	var crystalColor = "Crystal Color"; //declaring Crystal Color variable

switch(ringWire,crystalColor){  

	case ringWire === "Copper" && crystalColor === "Purple"
        display  <img src="purplecopperwirering.jpg">;  
        break;  
		
    case ringWire === "Copper" && crystalColor === "Red"  
        display <img src="redcopperwirering.jpg">;
        break;  
		
    case ringWire === "Copper" && crystalColor === "Blue"  
        display <img src="bluecopperwirering.jpg">; 
        break;  
		
    case ringWire === "Copper" && crystalColor === "Black"  
        display <img src="blackcopperwirering.jpg">;
        break;  
		
    case ringWire == "Copper" && crystalColor === "Pink" 
        display <img src="pinkcopperwirering.jpg">; 
        break;
		  
    case ringWire === "Copper" && crystalColor === "Green"  
        display <img src="greencopperwirering.jpg">;  
        break;
		
	case ringWire === "Copper" && crystalColor === "WhitePearl"
		display <img src="pearlcopperwirering.jpg">;
		break;
		
    case ringWire === "Silver" && crystalColor === "Purple"    
        display <img src="purplesilverwirering.jpg">;  
        break;  
		
    case ringWire === "Silver" && crystalColor === "Red"  
        display <img src="redsilverwirering.jpg">;
        break;  
		
    case ringWire === "Silver" && crystalColor === "Blue"  
        display <img src="bluesilverwirering.jpg">; 
        break;  
		
    case ringWire === "Silver" && crystalColor === "Black"  
        display <img src="blacksilverwirering.jpg">;  
        break;  
		
    case ringWire === "Silver" && crystalColor === "Pink"  
        display <img src="pinksilverwirering.jpg">;  
        break;  
		
    case ringWire === "Silver" && crystalColor === "Green"  
        display <img src="greensilverwirering.jpg">; 
        break;
		
	case ringWire === "Silver" && crystalColor === "WhitePearl"
		display <img src="pearlsilverwirering.jpg">;  
		
    default  
        break;        
                 }
				 
				 */
   }
   //ringChoice();

//Function for pulling Parameters from form GET request

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split("=");
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1].replace("+", " ");
        }
    }
}


//Function for displaying form information from user

function userInfo(){
	var firstName = GetURLParameter("FirstName");
	 
	 document.getElementById("FirstName").textContent = firstName;
	
	var lastName = GetURLParameter("LastName");
	 
	  document.getElementById("LastName").textContent = lastName;
	
	var streetAddress = GetURLParameter("StreetAddress");
	 
	  document.getElementById("StreetAddress").textContent = streetAddress;
	
	var city = GetURLParameter("City");
	 
	  document.getElementById("City").textContent = city;
	
	var state = GetURLParameter("State");
	 
	  document.getElementById("State").textContent = state;
	
	var zipCode = GetURLParameter("ZipCode");
	 
	  document.getElementById("ZipCode").textContent = zipCode;
  
	var country = GetURLParameter("Country");
	 
	  document.getElementById("Country").textContent = country;
  
	var email = GetURLParameter("Email");
	 
	  document.getElementById("Email").textContent = email;
  
	var ringSize = GetURLParameter("RingSize");
	 
	  document.getElementById("RingSize").textContent = ringSize;
 
  //Ring Wire: <!--Not sure how to add it-->
  
	var ringWire = GetURLParameter("RingWire");
		
		document.getElementById("RingWire").textContent = ringWire;
  
  //Swarovski Crystal Color:<!--Not Sure how to add it-->
	
	var crystalColor = GetURLParameter("CrystalColor");
	
		document.getElementById("CrystalColor").textContent = crystalColor;
  
  //Preferred Delivery Method:<!--Not Sure how to add it-->
  
	var deliveryMethod = GetURLParameter("DeliveryMethod");
	
		document.getElementById("DeliveryMethod").textContent = deliveryMethod;
  
  //Payment Method:<!--Not Sure how to add it-->
  
	var paymentMethod = GetURLParameter("PaymentMethod");
	
		document.getElementById("PaymentMethod").textContent = paymentMethod;
  
	var additionalInfo = GetURLParameter("AdditionalInfo");
	 
	  document.getElementById("AdditionalInfo").textContent = additionalInfo;
  
	
}

userInfo();

//Function for validating form

function validateForm(){
	
}

// draft of an object constructor for custom items
function customItem(size, wire, color) {
    this.size = size;
    this.wire = wire;
    this.color = color;
}

// function for adding custom items to the cart
//storing variables for items that customer has added to cart-keeping them as they continue to shop
//As the customer adds items to the cart, then we will push that item to the array
function addToShoppingCart(customItem, quantity) {
    for (var i = 0; i < quantity; i++) {
         shoppingCart.push(customItem);
    }
}

//Button as JavaScript will confirm the order and e-mail it to sparklingcreationsjewelry@gmail.com



