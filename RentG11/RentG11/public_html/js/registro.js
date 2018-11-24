/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nombre, telefono, DNI, email, expresion, contraseña, fuente, deposito;

function iniciar() {
    nombre = document.getElementById("nombre");
    telefono = document.getElementById("telefono");
    DNI = document.getElementById("DNI");
    email = document.getElementById("correo");
    contraseña = document.getElementById("password");
    fuente = document.getElementById("imagen");
    deposito = document.getElementById("deposito");
    nombre.addEventListener("input", validacionNombre);
    telefono.addEventListener("input", validacionTelefono);
    DNI.addEventListener("input", validacionDNI);
    email.addEventListener("input", validacionEmail);
    contraseña.addEventListener("input", validacionContraseña);
    fuente.addEventListener("dragstart", arrastrar);
    fuente.addEventListener("dragend", finalizar);
    deposito.addEventListener("dragenter", entrar);
    deposito.addEventListener("dragleave", salir);
    deposito.addEventListener("dragover", function (evento) {
        evento.preventDefault();
    });
    deposito.addEventListener("drop", soltar);
    validacionNombre();
    validacionTelefono();
    validacionDNI();
    validacionEmail();
    validacionContraseña();
}
function validacionNombre() {
    if (nombre.value === "") {
        nombre.setCustomValidity("Inserte su nombre");
    } else {
        nombre.setCustomValidity("");
    }
}
function validacionTelefono() {
    if (telefono.value === "") {
        telefono.setCustomValidity("Inserte su telefono");
    } else {
        telefono.setCustomValidity("");
    }
}
function validacionDNI() {
    if (DNI.value === "") {
        DNI.setCustomValidity("Inserte su DNI");
    } else {
        DNI.setCustomValidity("");
    }
}
function validacionEmail() {
    if (email.value === "") {
        email.setCustomValidity("Inserte su email");
    } else {
        email.setCustomValidity("");
    }
}
function validacionContraseña() {
    if (contraseña.value === "") {
        contraseña.setCustomValidity("Inserte su contraseña");
    } else {
        contraseña.setCustomValidity("");
    }
}


function entrar(evento) {
    evento.preventDefault();
    deposito.style.background = "rgba(0, 150, 0, .2)";
}
function salir(evento) {
    evento.preventDefault();
    deposito.style.background = "#FFFFFF";
}
function finalizar(evento) {
    elemento = evento.target;
    elemento.style.visibility = "hidden";
}
function arrastrar(evento) {
    var codigo = '<img src="' + fuente.src + '">';
    evento.dataTransfer.setData("Text", codigo);
}
function soltar(evento) {
    evento.preventDefault();
    deposito.style.background = "#FFFFFF";
    deposito.innerHTML = evento.dataTransfer.getData("Text");
}

window.addEventListener("load", iniciar);
