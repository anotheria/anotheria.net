$(function () {
    new WOW().init();

    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
    });

    $('.q-carousel').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        autoplay:true
    });

    $('.stories-carousel').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        autoplay:true
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $(window).scroll(function(){
            scroll = $(window).scrollTop();

        if (scroll >= 200) $('body').addClass('scroll');
        else $('body').removeClass('scroll');
    });
    if ($(window).scrollTop() >= 200) $('body').addClass('scroll');
    
    
    $('.more-link-1').click(function () {
        $(this).closest('.section').addClass('more-show-1');
        return false;
    });

    $('.more-link-2').click(function () {
        $(this).closest('.section').addClass('more-show-2');
        return false;
    });

    $('.more-link-3').click(function () {
        $(this).closest('.section').addClass('more-show-3');
        return false;
    });

    $('.more-link-4').click(function () {
        $(this).closest('.section').addClass('more-show-4');
        return false;
    });

    $('.about-box-show-more').click(function () {
        $(this).closest('.section').addClass('more-show');
        return false;
    });

    $('.about-show-area').click(function () {
        $(this).closest('.section').removeClass('more-show').removeClass('more-show-1').removeClass('more-show-2').removeClass('more-show-3').removeClass('more-show-4');
    });

    $('.collapse-item').on('show.bs.collapse', function () {
        $('.collapse-item.in')
            .collapse('hide');
    });

    $('#Offices').on('shown.bs.collapse', function () {
        initMap();
    });
});
