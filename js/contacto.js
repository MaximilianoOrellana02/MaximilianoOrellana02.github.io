$(document).ready(function () {
    
    const $form = $('#contacto-form');
    const $fname = $('#fname');
    const $lname = $('#lname');
    const $email = $('#email');
    const $mensaje = $('#mensaje');
    const $btnEnviar = $('#btn-enviar');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validarCampo($campo, condicion) {
        if (condicion) {
            $campo.removeClass('is-invalid').addClass('is-valid');
            return true;
        } else {
            $campo.removeClass('is-valid').addClass('is-invalid');
            return false;
        }
    }

    $('#contacto-form input, #contacto-form textarea').on('input', function () {
        
        const nombreValido = validarCampo($fname, $fname.val().trim().length >= 2);
        const apellidoValido = validarCampo($lname, $lname.val().trim().length >= 2);
        
        const emailValido = validarCampo($email, emailRegex.test($email.val().trim()));
        
        const mensajeValido = validarCampo($mensaje, $mensaje.val().trim().length >= 10);

        if (nombreValido && apellidoValido && emailValido && mensajeValido) {
            $btnEnviar.prop('disabled', false);
        } else {
            $btnEnviar.prop('disabled', true);
        }
    });

    $btnEnviar.prop('disabled', true);

    $form.on('submit', function (e) {
        e.preventDefault(); 

        $('#spinner-carga').removeClass('d-none');
        $('#btn-texto').text('Enviando...');
        $btnEnviar.prop('disabled', true);


        setTimeout(function () {

            $('#spinner-carga').addClass('d-none');
            $('#btn-texto').text('Enviar Mensaje');
            
            const modalConfirmacion = new bootstrap.Modal(document.getElementById('modalConfirmacion'));
            modalConfirmacion.show();

            $form[0].reset();
            $('#contacto-form input, #contacto-form textarea').removeClass('is-valid is-invalid');
            
        }, 2000);
    });
});