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
    spaceBetween: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: [-100, 0, -500],
            rotate: [0, 0, 15],
            opacity: 0
        },
        next: {
            translate: [100, 0, -500],
            rotate: [0, 0, -15],
            opacity: 0
        },
    },


    pagination: {
        el: '.swiper-pagination',
        clickable: true, //hiện thị active thằng đầu tiên 
    },
});

// GSAP ANIMATION