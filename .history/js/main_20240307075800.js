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

const swiperWatches = new Swiper('.home__swiper', {
    loop: true,
    spaceBes

    pagination: {
        el: '.swiper-pagination',
    },
    

});