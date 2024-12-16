const formulario = document.getElementById("miFormulario");
//const formularios = document.getElementsByClassName("formulariocontacto");
//console.log(formulario);
//console.log(formularios);

// el formulario es un objet del tipo htmlElement
// addEventListener es un method de el objeto formulario, que recibe dos parametros 
// el primero es el evento que se quiere escuchar, en este caso el evento submit
// el segundo es una funcion que se ejecutara cuando se dispare el evento, es una callback
formulario.addEventListener("submit", event => {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Obtener los valores de los campos
    // esta primer parte es la etiqueta de html ---> document.getElementById("nombre")
    // el .value es para obtener el valor del campo (el que escribio el usuario)
    // el .trim() es para quitar los espacios en blanco al principio y al final
    const nombre = document.getElementById("Nombre").value.trim();
    const apellido = document.getElementById("Apellido").value.trim();
    const email = document.getElementById("Email").value.trim();
    const telefono = document.getElementById("Telefono").value.trim();
    const mensaje = document.getElementById("comentario").value.trim();

    // console.log(nombre);
    // console.log(email);
    // console.log(mensaje);

    let mensajeError = "";

    // Inicializar validación
    let formularioValido = true;

    // Validar apellido
    if (apellido === "") {
        mensajeError += "el apellido debe estar completo\n";
        formularioValido = false;
    }

    // Validar nombre
    if (nombre === "") {
        mensajeError += "el nombre debe estar completo\n";
        formularioValido = false;
    }

    // Validar email
    // expresiones regulares
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mensajeError += "Ingrese un email válido\n";
        formularioValido = false;
    } 
    // Validar telefono
    if ( isNaN(telefono) || telefono.length < 10 ) {
        mensajeError += "El telefono debe tener al menos 10 Numeros\n";
        formularioValido = false;
    }
    // Validar mensaje
    if (mensaje.length < 10) {
        mensajeError += "El mensaje debe tener al menos 10 caracteres\n";
        formularioValido = false;
    }

    // Si el formulario es válido, se puede enviar
    if (formularioValido) {
        alert("Formulario enviado correctamente.");
        // creariamos un objeto literal del tipo formularioContacto

        const formularioContacto = {
            apellido: apellido,
            nombre: nombre,
            email: email,
            telefono: telefono,
            mensaje: mensaje
        };
        // llamariamos a un api del backend y le mandariamos la informacion en formato json{
         // y ese api guardaria la informacion en una base de datos y luego mandaria el mail
        // aca se puede hacer la accion del envio al api del backend
    }else {
        alert(mensajeError);
    }
});