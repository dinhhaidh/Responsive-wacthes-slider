$(document).ready(function(){
    $("#nav-toggle").click(function(){
        $("#nav-menu").addClass('show-menu');
    })
    $("#nav-close").click(function(){
        $("#nav-menu").removeClass('show-menu');
    })

    $(".nav__link").click(function(){
        $("#nav-menu").removeClass('show-menu');
    })
})

const swiperHome = new Swiper('.home__swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });