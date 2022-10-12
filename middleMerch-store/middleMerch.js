
// OPEN & CLOSE CART
let cartIcon = document.querySelector("#cart-icon"); 
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close");

// OPEN
cartIcon.addEventListener("click", clickOpen)
function clickOpen(){
    cart.classList.add('active')
}

// CLOSE
closeCart.addEventListener("click", clickClosed)
function clickClosed(){
    cart.classList.remove('active')
}

function remove (){

}
