"use strict";

//Setting the mobile nav bar

let menuIcon = document.querySelector("#menu-icon");
let menuList = document.querySelector(".menu");
let closeIcon = document.querySelector("#close-icon");


menuIcon.addEventListener("click", showNav);

function showNav(){
    menuList.classList.replace("hidden","show");
}

closeIcon.addEventListener("click", hideNav)

function hideNav(){
    menuList.classList.replace("show","hidden");
}
//setting the cart

let cart = document.querySelector("#cart");
let cartList = document.querySelector(".cart-list");
let cartNumber = document.querySelector(".cart-number");
let cartH3 = document.querySelector(".cart-h3");
cartNumber.addEventListener("click", addToCart);


cart.addEventListener("click", addToCart);
function addToCart(){
  if (cartList.classList.contains("cart-hide")){
    cartList.classList.add("cart-show");
    cartList.classList.remove("cart-hide");
    if(Number(cartH3.innerText) !== 0){
      document.querySelector(".checkout").style.display = "block";
      document.querySelector(".price-div").style.display = "flex";
      document.querySelector(".cart-empty").style.display = "none";
    } else{
      document.querySelector(".checkout").style.display = "none";
      document.querySelector(".price-div").style.display = "none";
      document.querySelector(".cart-empty").style.display = "block";
    }
} else {  
    cartList.classList.add("cart-hide");
    cartList.classList.remove("cart-show");
}
 
}

//setting the product section

let left = document.querySelectorAll(".left-arr");
let right = document.querySelectorAll(".right-arr");
let product = document.querySelector("#product");
let viewbox = document.querySelector(".viewbox");
product.style.backgroundImage = `url("image-product-1.jpg")`;


right.forEach(rig=>{
  rig.addEventListener("click", imgSlideRight);
});
left.forEach(lef=>{
  lef.addEventListener("click", imgSlideLeft);
})
let productImage = 1;

function imgSlideRight(){
  if(productImage === 1){
    productImage = 2;
  } else if(productImage === 2){
    productImage = 3;
  } else if(productImage === 3) {
    productImage = 4;
  } else{
    productImage = 1
  }
  product.style.backgroundImage = `url("image-product-${productImage}.jpg")`;
  viewbox.style.backgroundImage = product.style.backgroundImage;
};

function imgSlideLeft(){
  if(productImage === 4){
    productImage = 3;
  } else if(productImage === 3){
    productImage = 2;
  } else if(productImage === 2) {
    productImage = 1;
  } else{
    productImage = 4
  }
  product.style.backgroundImage = `url("image-product-${productImage}.jpg")`;
  viewbox.style.backgroundImage = product.style.backgroundImage;
};

//product increment

let incr = document.querySelector(".incr");
let decr = document.querySelector(".decr");
let num = document.querySelector(".num");

incr.addEventListener("click", function(){
  num.innerText++;
  cartList.classList.add("cart-hide");
  cartList.classList.remove("cart-show");
})


decr.addEventListener("click", function(){
  cartList.classList.add("cart-hide");
  cartList.classList.remove("cart-show");

  if(num.innerText == 0){
    num.innerText = 0;
  } else{
    num.innerText--;
  }
})

//setting the cart

let addBtn = document.querySelector(".add");
let priceSpan = document.querySelector(".price-span");
let numSpan = document.querySelector(".num-span");
let totalPrice = document.querySelector(".total-price");

addBtn.addEventListener("click", function(){
  if(Number(num.innerText) !== 0){
      cartH3.innerText = num.innerText;
      let productPrice = document.querySelector(".details-price").querySelector("h1").innerText.slice(1)
      cartNumber.style.display = "block";
      priceSpan.innerText =`$${ productPrice} x`;
      numSpan.innerText = num.innerText;
      totalPrice.innerText = `$${Number(productPrice) * Number(numSpan.innerText)}.00`;
  } else{
    cartH3.innerText = num.innerText;
    cartNumber.style.display = "none";
  }
});

//setting the delete button

let del = document.querySelector(".delete");
del.addEventListener("click", function(){
  num.innerHTML = 0;
  cartNumber.style.display = "none";
  document.querySelector(".checkout").style.display = "none";
  document.querySelector(".price-div").style.display = "none";
  document.querySelector(".cart-empty").style.display = "block";
  document.querySelector(".viewbox").style.display = "none";

});

let desktopImages = document.querySelector(".prod-images").querySelectorAll("img");
let imgSpan = document.querySelector(".prod-images").querySelectorAll(".img-span");

function imgEl(xy){
  product.style.backgroundImage = `url("image-product-${xy}.jpg")`;
}

/*desktopImages[0].addEventListener("click", function(){
  imgEl(1);
});

desktopImages[1].addEventListener("click", function(){
  imgEl(2);
});

desktopImages[2].addEventListener("click", function(){
  imgEl(3);
});

 

desktopImages[3].addEventListener("click", function(){
  imgEl(4);
});*/


function imgMv(xy){
  imgSpan[xy].style.display = "block";
}

desktopImages[0].addEventListener("mouseover", function(){
  imgMv(0);
  imgEl(1)
});

desktopImages[1].addEventListener("mouseover", function(){
  imgMv(1);
  imgEl(2)
});


desktopImages[2].addEventListener("mouseover", function(){
  imgMv(2);
  imgEl(3)
});


desktopImages[3].addEventListener("mouseover", function(){
  imgMv(3);
  imgEl(4)
});

function imgMo(x){
  imgSpan[x].style.display = "none";
}

desktopImages[0].addEventListener("mouseout", function(){
  imgMo(0);
});


desktopImages[1].addEventListener("mouseout", function(){
  imgMo(1);
});


desktopImages[2].addEventListener("mouseout", function(){
  imgMo(2);
});

desktopImages[3].addEventListener("mouseout", function(){
  imgMo(3);
});

//Viewbox functions and events
let contrast = document.querySelector(".contrast");

function viewBox(){
  viewbox.style.display = "block";
  contrast.style.display = "block";
  viewbox.style.backgroundImage = product.style.backgroundImage;
};

product.addEventListener("click", viewBox);

function closeBox(){
  viewbox.style.display = "none";
  contrast.style.display = "none";
  product.style.backgroundImage = viewbox.style.backgroundImage;
}

let desktopImages2 = viewbox.querySelector(".prod-images").querySelectorAll("img");
let imgSpan2 = viewbox.querySelector(".prod-images").querySelectorAll(".img-span");

desktopImages2.forEach(im=>{
  im.addEventListener("click", closeBox);
});

function imgM2(xy){
  imgSpan2[xy].style.display = "block";
};

function imgE2(xy){
  viewbox.style.backgroundImage = `url("image-product-${xy}.jpg")`;
};

desktopImages2[0].addEventListener("mouseover", function(){
  imgM2(0);
  imgE2(1);
});

desktopImages2[1].addEventListener("mouseover", function(){
  imgM2(1);
  imgE2(2)
});


desktopImages2[2].addEventListener("mouseover", function(){
  imgM2(2);
  imgE2(3)
});


desktopImages2[3].addEventListener("mouseover", function(){
  imgM2(3);
  imgE2(4)
});

function imgMo2(x){
  imgSpan2[x].style.display = "none";
}

desktopImages2[0].addEventListener("mouseout", function(){
 imgMo2(0);
});


desktopImages2[1].addEventListener("mouseout", function(){
 imgMo2(1);
});


desktopImages2[2].addEventListener("mouseout", function(){
 imgMo2(2);
});


desktopImages2[3].addEventListener("mouseout", function(){
  imgMo2(3);
});



let closeProd = document.querySelector(".close-prod");
closeProd.addEventListener("click", closeBox);

