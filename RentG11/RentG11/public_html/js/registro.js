/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nombre, telefono, DNI, email, contraseña, fuente, deposito, boton, solicitud = null, bd;
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

function iniciar() {
    nombre = document.getElementById("nombre");
    telefono = document.getElementById("telefono");
    DNI = document.getElementById("DNI");
    email = document.getElementById("email");
    contraseña = document.getElementById("password");
    fuente = document.getElementById("imagen");
    deposito = document.getElementById("deposito");
    boton = document.getElementById("registro");
    crearbd();
    boton.addEventListener("click",agregarobjeto);
    nombre.addEventListener("input", validacionNombre);
    telefono.addEventListener("input", validacionTelefono);
    DNI.addEventListener("input", validacionDNI);
    email.addEventListener("input", validacionEmail);
    contraseña.addEventListener("input", validacionContraseña);
//    fuente.addEventListener("dragstart", arrastrar);
//    fuente.addEventListener("dragend", finalizar);
//    deposito.addEventListener("dragenter", entrar);
//    deposito.addEventListener("dragleave", salir);
//    deposito.addEventListener("dragover", function (evento) {
//        evento.preventDefault();
//    });
//    deposito.addEventListener("drop", soltar);
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
function crearbd(){
    solicitud = indexedDB.open("RentG11");
    solicitud.onsucces = function(e){
        bd = solicitud.result;
    };
    solicitud.onupgradeneeded = function (e){
        bd = solicitud.result;
        var cliente = bd.createObjectStore("clientes", {keyPath: "Email"});
        var coche = bd.createObjectStore("coches", {keyPath : "matricula"});
        var reserva = bd.createObjectStore("reservas", {keyPath:"id_reserva"});
        cliente.add({Email: "admin1@rentG.com",Contraseña: "1234",Nombre: "admin1",DNI : "123456789",Telefono :"655555555"});
        cliente.add({Email: "admin2@rentG.com",Contraseña: "4321",Nombre: "admin2",DNI : "987654321",Telefono :"666666666"});
        coche.add({matricula: "1234ABC",marca :"Opel"});
        coche.add({matricula: "9876CBA",marca :"Mercedes"});
        coche.add({matricula: "2468BDF",marca :"BMW"});
        
    };
}
function agregarobjeto(){
    var n = nombre.value;
    var tel = telefono.value;
    var Dni = DNI.value;
    var correo = email.value;
    var psw = contraseña.value;
    var transaccion = bd.transaction("[cliente]","readwrite");
    var almacen = transaccion.objectStore("cliente"); 
    var agregar = almacen.add({Email: correo, Contraseña: psw, Nombre: n, DNI: Dni, Telefono: tel});
   
    n = "";
    tel = "";
    Dni = "";
    correo = "";
    psw = "";
}
window.addEventListener("load", iniciar, false);
