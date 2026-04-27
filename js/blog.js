$(document).ready(function() {
    $('#filtro-categorias').on('change', function() {
        let categoriaSeleccionada = $(this).val();

        if (categoriaSeleccionada === 'todas') {
            $('.articulo-blog').fadeIn(); 
        } else {
            $('.articulo-blog').hide(); 
            $('.articulo-blog[data-categoria="' + categoriaSeleccionada + '"]').fadeIn(); 
        }
    });

    $('.tarjeta-noticia').hover(
        function () {
            $(this).find('img').addClass('zoom-in-effect');
        },
        function () {
            $(this).find('img').removeClass('zoom-in-effect');
        }
    );

    $('.articulo-blog').hover(
        function () {
            $(this).find('img').addClass('zoom-in-effect');
        },
        function () {
            $(this).find('img').removeClass('zoom-in-effect');
        }
    );
});