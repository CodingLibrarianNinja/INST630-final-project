//INST630 Final Project-Stephani Moore/Rosie Yanosko
//Sparkling Creations JavaScript Page
//JS file for form page



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

//Function for displaying form information from user

function userInfo(){
    var complete = false;
    
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
    var zip = zipCode.toString();
    
    if (zip.length > 5 || zip.length < 5) {
        alert("Invalid Zip Code");
    } else {
        document.getElementById("ZipCode").textContent = zipCode;
        complete = true;
    }
	 
	var country = GetURLParameter("Country");
	 
	  document.getElementById("Country").textContent = country;
  
	var email = GetURLParameter("Email");
	 
	  document.getElementById("Email").textContent = email;
	  
  
	var deliveryMethod = GetURLParameter("DeliveryMethod");
	
		document.getElementById("DeliveryMethod").textContent = deliveryMethod;
  
	var paymentMethod = GetURLParameter("PaymentMethod");
	
		document.getElementById("PaymentMethod").textContent = paymentMethod;
  
	var additionalInfo = GetURLParameter("AdditionalInfo");
	 
	  document.getElementById("AdditionalInfo").textContent = additionalInfo; 
	
}

userInfo();


	