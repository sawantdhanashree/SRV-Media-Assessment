$(document).ready(function () {

    var owl = $(".exhibition-slider");

    owl.owlCarousel({

        loop: true,

        margin: 18,

        nav: false,

        dots: false,

        autoplay: false,

        smartSpeed: 700,

        slideTransition: "ease",

        responsive: {

            0: {
                items: 1.1
            },

            576: {
                items: 1.4
            },

            768: {
                items: 2.2
            },

            992: {
                items: 3.1
            },

            1200: {
                items: 4.2
            }

        }

    });


    /* Custom Navigation */

    $(".customNext").click(function () {

        owl.trigger("next.owl.carousel");

    });

    $(".customPrev").click(function () {

        owl.trigger("prev.owl.carousel");

    });

});