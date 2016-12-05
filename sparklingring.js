//INST630 Final Project-Stephani Moore/Rosie Yanosko
//Sparkling Creations JavaScript Page

//global variables
//I want to declare variables using selections from the custom ring form
var ringWire; 

var crystalColor;

//Need function for having the person's custom ring photo to show up based
//on form's input Use if/else if statements

function ringChoice(ringWire,crystalColor){
	
	ringWire = GetURLParameter("RingWire"); //Get the value of the ring wire-silver or copper
	
	crystalColor = GetURLParameter("CrystalColor");//Get the value of crystal color depending on user choice
	

	if(ringWire === "Copper" && crystalColor === "Purple"){ //conditions of ringWire and crystalColor
		document.getElementById("ringPhoto").src = "images/purplecopperwirering.jpg"; //Depending on what the person put on form, will show picture
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

ringChoice();

//Function for pulling Parameters from form GET request

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split("=");
        if (sParameterName[0] == sParam)
        {
           var whatever = sParameterName[1].replace(/\+/g, " "); 
			return whatever.replace("%40", "@");
			
        } 
    }
}
 
 GetURLParameter();
 
function ringInfo(){
	  
	var ringSize = GetURLParameter("RingSize");
	 
	  document.getElementById("RingSize").textContent = ringSize; 
  
	var ringWire = GetURLParameter("RingWire");
		
		document.getElementById("RingWire").textContent = ringWire;
	
	var crystalColor = GetURLParameter("CrystalColor");
	
		document.getElementById("CrystalColor").textContent = crystalColor;
  
}

ringInfo();