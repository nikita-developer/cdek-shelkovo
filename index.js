$(document).ready(function() {
    $('.face-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    })

    $('.js-nav__burger').click(function() {
        $('.nav__body').addClass('open')
        $('body').addClass('hidden')
    })

    $('.js-nav__burger-close').click(function() {
        $('.nav__body').removeClass('open')
        $('body').removeClass('hidden')
    })
    
    $('.dogovor__tab').click(function() {
        $('.dogovor__tab').not($(this).addClass('active')).removeClass('active')
        $('.dogovor__form').not($('.dogovor__form').eq($(this).index()).addClass('active')).removeClass('active')
    })

    $('.contacts-slider').owlCarousel({
        loop: true,
        dots: false,
        margin: 15,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1280: {
                items: 3,
            }
        }
    })
});