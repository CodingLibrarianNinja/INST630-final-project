function validate() {
    var complete = false;	
    var zipCode = document.getElementsByName("ZipCode").textContent;
    var zip = zipCode[0].toString();

        if (zip.length > 5 || zip.length < 5) {
            alert("Invalid Zip Code");
        } else {
            document.getElementById("ZipCode").textContent = zipCode;
            complete = true;
        }
	 
}