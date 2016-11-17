//INST630 Final Project-Stephani Moore/Rosie Yanosko
//Sparkling Creations JavaScript Page

var shoppingCart = []; //Global Variable to show empty shopping cart for the customer to put items in
//Items will be added to this array as customers add them to the cart

//Need function for adding premadejewelry to cart

function preMade(name, price, quantity){
	this.name = name;
    this.price = price
    this.quantity = quantity;
    
    //add method
	
}

var aquaPreMade = new preMade('Aqua Cane Glass Earrings', 15, 1);

var bluestripedPreMade = new preMade('Blue Striped Beaded Necklace', 40, 1);

var bluezirconPreMade = new preMade('Blue Zircon Wire Wrapped Bracelet', 25, 1);

var fireopalPreMade = new preMade('Fire Opal Silver Heart Pendant', 30, 1);

var nighttreePreMade = new preMade('Night Tree of Life Pendant', 35, 1);

var crystalheartPreMade = new preMade('Purple Swarovski Crystal Heart Earrings', 15, 1);

var redcoralPreMade = new preMade('Red and Pink Coral Beaded Necklace', 45, 1);

var summertreePreMade = new preMade('Summer Tree of Life Pendant', 35, 1);

var treeagatePreMade = new preMade('Tree Agate Gemstone Earrings with Green Swarovski Crystals', 18, 1);

var wintertreePremade = new preMade('Winter Tree of Life Pendant', 35, 1);


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

//I am certain that my syntax is wrong, but I need 14 results for each of the ring color combinations
//I am basically writing everything out in pseudocode at the moment
switch(customRing){  case "copperwire/purplestone"  //it will display on the sparklingringphoto.html page  
        //What command would I use to do that?  
        display  <img src="purplecopperwirering.jpg">;  
        break;  
    case "copperwire/redstone"  
        display <img src="redcopperwirering.jpg">;
        break;  
    case "copperring/bluestone"  
        display <img src="bluecopperwirering.jpg">; 
        break;  
    case "copperring/blackstone"  
        display <img src="blackcopperwirering.jpg">;
        break;  
    case "copperring/pinkstone"  
        display <img src="pinkcopperwirering.jpg">; 
        break;  
    case "copperring/greenstone"  
        display <img src="greencopperwirering.jpg">;  
        break;
	case "copperring/whitepearl"
		display <img src="pearlcopperwirering.jpg">;
    case "silverwire/purplestone"    
        display <img src="purplesilverwirering.jpg">;  
        break;  
    case "silverwire/redstone"  
        display <img src="redsilverwirering.jpg">;
        break;  
    case "silverring/bluestone"  
        display <img src="bluesilverwirering.jpg">; 
        break;  
    case "silverring/blackstone"  
        display <img src="blacksilverwirering.jpg">;  
        break;  
    case "silverring/pinkstone"  
        display <img src="pinksilverwirering.jpg">;  
        break;  
    case "silverring/greenstone"  
        display <img src="greensilverwirering.jpg">; 
        break;
	case "silverring/whitepearl"
		display <img src="pearlsilverwirering.jpg">;  
    default  
        break;        
                 }
   }

//Function for pulling Parameters from form GET request
//copied this function from Madlibs-similar concept I think...

/*function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split("=");
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}*/

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
  
  //Swarovski Crystal Color:<!--Not Sure how to add it-->
  
  //Shipping/Payment Information <!--Not Sure how to add it-->
  
  //Preferred Delivery Method:<!--Not Sure how to add it-->
  
  //Payment Method:<!--Not Sure how to add it-->
  
  var additionalInfo = GetURLParameter("AdditionalInfo");
	 
	  document.getElementById("AdditionalInfo").textContent = additionalInfo;
  
	
}

//Function for validating form

function validateForm(){
	
}

// draft of an object constructor for custom items, need to add method
function customItem(size, wire, color) {
    this.size = size;
    this.wire = wire;
    this.color = color;
}

//Method for custom items

// function for adding custom items to the cart
//storing variables for items that customer has added to cart-keeping them as they continue to shop
//As the customer adds items to the cart, then we will push that item to the array
function addToShoppingCart(customItem, quantity) {
    for (var i = 0; i < quantity; i++) {
         shoppingCart.push(customItem);
    }
}

//Button as JavaScript will confirm the order and e-mail it to sparklingcreationsjewelry@gmail.com



