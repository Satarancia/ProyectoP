$(document).ready(function() {
    $('#boton-contacto').click(function() {
        var email = $('#text22');
        var message = $('#text24');
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email !== "" && message !== "") {
            if (emailPattern.test(email)) {
                alert("Mensaje enviado con éxito!");
            } else {
                alert("Por favor, ingrese un correo electrónico válido.");
            }
        } else {
            alert("Por favor, complete ambos campos.");
        }
    });
});