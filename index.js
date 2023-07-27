$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true
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
});