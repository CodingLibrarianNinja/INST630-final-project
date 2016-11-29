//INST630 Final Project-Stephani Moore/Rosie Yanosko
//Sparkling Creations JavaScript Page

//global variables
//I want to declare variables using selections from the custom ring form


var ringWire = document.getElementById("RingWire").innerHTML; 

var crystalColor = document.getElementById("CrystalColor").innerHTML;

//Need function for having the person's custom ring photo to show up based
//on form's input Use if/else if statements
function ringChoice(ringWire,crystalColor){
	
	//var ringWire = document.getElementById("RingWire").innerHTML; 

//var crystalColor = document.getElementById("CrystalColor").innerHTML;

	if(ringWire === "Copper" && crystalColor === "Purple"){
		document.getElementById("ringPhoto").src = "images/purplecopperwirering.jpg";
	} else if(ringWire === "Copper" && crystalColor === "Red"){
		document.getElementById("ringPhoto").src = "images/redcopperwirering.jpg";
	} else if(ringWire === "Copper" && crystalColor === "Blue"){
	    document.getElementById("ringPhoto").src = "images/bluecopperwirering.jpg";  
    } else if(ringWire === "Copper" && crystalColor === "Black"){
	    document.getElementById("ringPhoto").src = "images/blackcopperwirering.jpg";  
	} else if(ringWire == "Copper" && crystalColor === "Pink"){
	    document.getElementById("ringPhoto").src = "images/pinkcopperwirering.jpg";
    } else if(ringWire === "Copper" && crystalColor === "Green"){
	    document.getElementById("ringPhoto").src = "images/greencopperwirering.jpg";  
    } else if(ringWire === "Copper" && crystalColor === "WhitePearl"){
	    document.getElementById("ringPhoto").src = "images/pearlcopperwirering.jpg";
	} else if(ringWire === "Silver" && crystalColor === "Purple"){    
        document.getElementById("ringPhoto").src = "images/purplesilverwirering.jpg";  
    } else if(ringWire === "Silver" && crystalColor === "Red"){ 
	    document.getElementById("ringPhoto").src = "images/redsilverwirering.jpg"; 
    } else if(ringWire === "Silver" && crystalColor === "Blue"){
	    document.getElementById("ringPhoto").src = "images/bluesilverwirering.jpg";  
    } else if(ringWire === "Silver" && crystalColor === "Black"){
	    document.getElementById("ringPhoto").src = "images/blacksilverwirering.jpg";   
    } else if(ringWire === "Silver" && crystalColor === "Pink"){  
	    document.getElementById("ringPhoto").src = "images/pinksilverwirering.jpg"; 
    } else if(ringWire === "Silver" && crystalColor === "Green"){  
        document.getElementById("ringPhoto").src = "images/greensilverwirering.jpg";
    } else if(ringWire === "Silver" && crystalColor === "WhitePearl"){
		document.getElementById("ringPhoto").src = "images/pearlsilverwirering.jpg";
	} else{
		document.getElementById("ringPhoto").src = "images/customringphotolink.jpg";
	}  
		
}

ringChoice(ringWire,crystalColor);
	
   
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
 
 GetURLParameter();

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
  
	var ringWire = GetURLParameter("RingWire");
		
		document.getElementById("RingWire").textContent = ringWire;
	
	var crystalColor = GetURLParameter("CrystalColor");
	
		document.getElementById("CrystalColor").textContent = crystalColor;
  
	var deliveryMethod = GetURLParameter("DeliveryMethod");
	
		document.getElementById("DeliveryMethod").textContent = deliveryMethod;
  
	var paymentMethod = GetURLParameter("PaymentMethod");
	
		document.getElementById("PaymentMethod").textContent = paymentMethod;
  
	var additionalInfo = GetURLParameter("AdditionalInfo");
	 
	  document.getElementById("AdditionalInfo").textContent = additionalInfo;
  
	
}

userInfo();

// draft of function for validating form
function validateForm() {
    var zip = document.forms["customForm"] ["ZipCode"].value.toString();
        if (zip.length > 5 || zip.length < 5) {
        alert("Invalid Zip Code");
        return false;
    }
}

	