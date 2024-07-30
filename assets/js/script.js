$(document).ready(function() {
    $('button').click(function() {
        let email = $('#text22');
        let message = $('#text24');
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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