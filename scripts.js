document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    alert('Formulario enviado. ¡Gracias por contactarme!');
});
