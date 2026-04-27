$(document).ready(function() {
    
    const $body = $('body');
    const $themeToggle = $('#theme-toggle'); 
    const $iconSun = $('.icon-sun');
    const $iconMoon = $('.icon-moon');

    const temaGuardado = localStorage.getItem('tema');
    
    if (temaGuardado === 'oscuro') {
        $body.addClass('dark-mode');
        $themeToggle.prop('checked', true); 
        $iconSun.addClass('d-none');        
        $iconMoon.removeClass('d-none');  
    }

    $themeToggle.on('change', function() {
        
        if ($(this).is(':checked')) {

            $body.addClass('dark-mode');
            localStorage.setItem('tema', 'oscuro'); 
            $iconSun.addClass('d-none');
            $iconMoon.removeClass('d-none');
        } else {
            $body.removeClass('dark-mode');
            localStorage.setItem('tema', 'claro'); 
            $iconMoon.addClass('d-none');
            $iconSun.removeClass('d-none');
        }
    });

});