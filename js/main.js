/** open and close the cart */
var cart=document.querySelector('.cart');

function open_cart(){
    cart.classList.add("active");
}

function close_cart(){
    cart.classList.remove("active");
}

/** add product in cart*/
var all_products_json;
var items_in_cart= document.querySelector(".items_in_cart");

let product_cart=[];

/**function that add product element in cart */

function addToCart(id , btn){
    product_cart.push(all_products_json[id]);
    btn.classList.add("active");
    getCartItems();
}

let count_item = document.querySelector(".count_item");

let count_item_cart = document.querySelector(".count_item_cart");

let price_cart_totle = document.querySelector(".price_cart_totle");


let price_cart_head=document.querySelector(".price_cart_head");

function getCartItems(){
  let total_price=0;
    let item_c="";
    for (let index = 0; index < product_cart.length; index++) {
        item_c+=`
                <div class="item_cart">
          <img src="${product_cart[index].img}" alt="products">
          <div class="content">
            <h4>
            ${product_cart[index].name}
            </h4>
            <p class="price_cart">$${product_cart[index].price}</p>
          </div>
          <button class="delete_item" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        `

        total_price+=product_cart[index].price;
    }
    items_in_cart.innerHTML=item_c;
    price_cart_head.innerHTML="$"+total_price;
    count_item.innerHTML = product_cart.length;

    count_item_cart.innerHTML = `(${product_cart.length}Item in car)`;

    price_cart_totle.innerHTML = "$"+total_price;
}



function removeFromCart(index){
    product_cart.splice(index,1);
    getCartItems();
    let addToCartButtons = document.querySelectorAll(".fa-cart-plus");
    for (let i = 0; i < addToCartButtons.length; i++) {
       addToCartButtons[i].classList.remove("active");
      product_cart.forEach(product=>{
        if(product.id==i){
          addToCartButtons[i].classList.add("active");
        }
      })
    }
}

 let back_to_top = document.querySelector(".back_to_top");
 back_to_top.addEventListener('click', function(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
