$(document).ready(function () {
    $('#filtros-destinos .btn').on('click', function () {
        
        let categoria = $(this).data('filter');

        $('#filtros-destinos .btn').removeClass('active');
        $(this).addClass('active');

        if (categoria === 'todos') {
            $('.destino-item').show(400);
        } else {
            $('.destino-item').hide();
            
            $('.destino-item').filter('[data-categoria="' + categoria + '"]').show(400);
        }
    });

    $('.destino-card').hover(
        function () {
            $(this).find('img').addClass('zoom-in-effect');
        },
        function () {
            $(this).find('img').removeClass('zoom-in-effect');
        }
    );

});