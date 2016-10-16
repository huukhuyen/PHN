$(document).ready(function() {
    // Slide footer
    $('.owl-carousel').owlCarousel({
        loop: true,
        // margin: 10,
        // nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // Slide main
    $("#owl-demo").owlCarousel({
        autoPlay: 1000,
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

    // Menu mobile
    var menu_mb = $('.content-nav').clone();
    var menu_mb2 = $('.content-nav-2').clone();
    menu_mb.removeAttr('id');
    $('.nav-mb').append(menu_mb, menu_mb2);
    $('.nav-mb').find('.content-nav, .content-nav-2').removeAttr('class');
    $('.control-nav').click(function() {
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

    setTimeout(function() {
        $('.splash').fadeOut('slow');
    }, 1500);

});
$('.content-body').niceScroll();
