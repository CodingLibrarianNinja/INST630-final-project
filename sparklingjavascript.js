//INST630 Final Project-Stephani Moore/Rosie Yanosko
//Sparkling Creations JavaScript Page

var shoppingCart = []; //Global Variable to show empty shopping cart for the customer to put items in
//Items will be added to this array as customers add them to the cart

//cart icon at the top of each page so that the customer can click on it to see what they have in it so far.

//Need code for having already made jewelry pieces pop out in smaller window-Photoviewer
//Then they can add them to the cart if they want just on the window only?
//How would we do that?

//Need code for having the person's custom ring photo to show up based
//on form's input Switch statement for different photos

//I am certain that my syntax is wrong, but I need 14 results for each of the ring color combinations
//I am basically writing everything out in pseudocode at the moment
switch(customRing){  case "copperwire/purplestone"  //it will display on the sparklingringphoto.html page  
        //What command would I use to do that?  
        display  picture Copper Wire Ring/Purple Stone;  
        break;  
    case "copperwire/redstone"  
        display picture Copper Wire Ring/Red Stone  
        break;  
    case "copperring/bluestone"  
        display picture Copper Wire Ring/Blue Stone  
        break;  
    case "copperring/blackstone"  
        display picture Copper Wire Ring/Black Stone  
        break;  
    case "copperring/pinkstone"  
        display picture Copper Wire Ring/Pink Stone  
        break;  
    case "copperring/greenstone"  
        display picture Copper Wire Ring/Green Stone  
        break;  
    case "silverwire/purplestone"    
        display  picture Silver Wire Ring/Purple Stone  
        break;  
    case "silverwire/redstone"  
        display picture Silver Wire Ring/Red Stone
        break;  
    case "silverring/bluestone"  
        display picture Silver Wire Ring/Blue Stone  
        break;  
    case "silverring/blackstone"  
        display picture Silver Wire Ring/Black Stone  
        break;  
    case "silverring/pinkstone"  
        display picture Silver Wire Ring/Pink Stone  
        break;  
    case "silverring/greenstone"  
        display picture Silver Wire Ring/Green Stone  
        break;  
    default  
        break;        
                 }
   }

//Also, if/else statement for custom ring page
//if the user likes their ring, then they will go to the order confirmation page.
//else they will be returned to the form

//The below code is pseudocode
    if(customer clicks on confirm){
        the next step will be that they go to the order confirmation page-link to the order confirmation HTML page
    }else{
        the customer will be returned to the custom form to redo it-link to the custom form HTML page
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



