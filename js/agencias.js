$(document).ready(function() {
    
    $('.flip-card').on('click', function() {
        $(this).find('.flip-card-inner').toggleClass('is-flipped');
    });

    $('.rating').on('click', function(e) {
        e.stopPropagation(); 
    });

    $('.star-icon').on('mouseover', function() {
        var valor = $(this).data('value');
        var $padre = $(this).parent();

        $padre.find('.star-icon').removeClass('hover');

        $padre.find('.star-icon').each(function() {
            if ($(this).data('value') <= valor) {
                $(this).addClass('hover');
            }
        });
    }).on('mouseout', function() {
        $(this).parent().find('.star-icon').removeClass('hover');
    });

    $('.star-icon').on('click', function() {
        var valor = $(this).data('value');
        var $padre = $(this).parent();

        $padre.find('.star-icon').removeClass('active bi-star-fill bi-star-half').addClass('bi-star');

        $padre.find('.star-icon').each(function() {
            if ($(this).data('value') <= valor) {
                $(this).removeClass('bi-star').addClass('bi-star-fill active');
            }
        });
    });

});