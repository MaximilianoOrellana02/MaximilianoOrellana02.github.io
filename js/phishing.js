$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        
        event.preventDefault();

        const usuario = $('#documento').val();
        const clave = $('#clave').val();
        
        console.log("Simulación de captura de datos:");
        console.log("Usuario ingresado: " + usuario);

        const modalAlerta = new bootstrap.Modal(document.getElementById('modalPhishingEducativo'));
        modalAlerta.show();
    });

    $('.phish-target').on('mouseover', function() {
        $(this).css('cursor', 'help');
    });
});