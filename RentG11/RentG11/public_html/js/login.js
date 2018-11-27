/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var email, contraseña;

function iniciar() {
    email_log = document.getElementById("correoLogin");
    contraseña:log = document.getElementById("passLogin");
    email_log.addEventListener("input", validacionEmail);
    contraseña_log.addEventListener("input", validacionContraseña);
    validacionEmail();
    validacionContraseña();
    crearbd();
}
function validacionEmail() {
    if (email_log.value === "") {
        email_log.setCustomValidity("Inserte su email");
    } else {
        email_log.setCustomValidity("");
    }
}
function validacionContraseña() {
    if (contraseña_log.value === "") {
        contraseña_log.setCustomValidity("Inserte su contraseña");
    } else {
        contraseña_log.setCustomValidity("");
    }
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
window.addEventListener("load", iniciar);

