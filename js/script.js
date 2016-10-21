$(document).ready(function() {
    // Fancybox
    // Slide footer
    $("#owl-demo").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });

    // Show / hide footer
    var ct = $('.content-footer');
    ct.hide();
    $('.copyright').click(function() {
        if (ct.is(':hidden')) {
            ct.fadeIn('400');
        } else {
            ct.fadeOut('400');
        }
    });

    // Button up/down footer
    $('.copyright h2').click(function(event) {
        $('i', this).toggleClass('fa-angle-double-up fa-angle-double-down');
    });

    // Menu mobile
    var menu_mb = $('.content-nav').clone();
    var menu_mb2 = $('.content-nav-2').clone();
    menu_mb.removeAttr('id');
    $('.nav-mb').append(menu_mb, menu_mb2);
    $('.nav-mb').find('.content-nav, .content-nav-2').removeAttr('class');
    $('.control-nav .fa-bars').click(function() {
        $('.nav-mb').slideToggle('400');
    });

    // List left accordion
    $('.content-list-left:first').show();
    $('.accordion-left h2').click(function(event) {
        // $(this).next().slideToggle('400');
        $('.accordion-left h2').next().hide('400');
        $(this).next().show('400');
        $('.accordion-left h2').removeClass('active');
        $(this).addClass('active');
    });
    //
    setTimeout(function() {
        $('.splash').fadeOut('slow');
    }, 1900);

    $('.fancybox').fancybox();

});
$('.content-body').niceScroll();
