// swiper slide side
  var swiper = new Swiper(".slid-swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests:true,
      clickable:true
    },
    autoplay:{
      delay:2500,

    },
    loop:true,
  });

//   swiper slide sale_side

var swiper = new Swiper(".sale_sec", {
    slidesPerView:5,
    spaceBetween:20,
    autoplay:{
      delay:3000,

    },
    navigation:{
nextEl:".swiper-button-next",
prevEl:".swiper-button-prev"
    },
    loop:true,
  });

  //new  

  var swiper = new Swiper(".product_swip", {
    slidesPerView:4,
    spaceBetween:20,
    autoplay:{
      delay:3000,

    },
    navigation:{
nextEl:".swiper-button-next",
prevEl:".swiper-button-prev"
    },
    loop:true,
  });
