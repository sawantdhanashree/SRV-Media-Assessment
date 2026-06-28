const partnerSlider = new Swiper(".partnerSchoolSlider",{

    slidesPerView:6,

    spaceBetween:25,

    loop:true,

    speed:700,

    autoplay:false,

    navigation:{
        nextEl:".partner-next-btn",
        prevEl:".partner-prev-btn"
    },

    breakpoints:{

        0:{
            slidesPerView:2
        },

        576:{
            slidesPerView:3
        },

        768:{
            slidesPerView:4
        },

        992:{
            slidesPerView:5
        },

        1200:{
            slidesPerView:6
        }

    }

});