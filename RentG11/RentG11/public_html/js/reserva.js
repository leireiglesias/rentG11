/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var bd;

function iniciar() {
    coche = document.getElementById("coches");
    fInicio = document.getElementById("fechaI");
    hInicio = document.getElementById("horaI");
    fFin = document.getElementById("fechaF");
    hFin = document.getElementById("horaF");
    ciudad = document.getElementById("ciudad");
    boton = document.getElementById("enviar");
    crearbd();
    boton.addEventListener("click",agregarReserva);
    coche.addEventListener("input", validacionCoche);
    fInicio.addEventListener("input", validacionfInicio);
    hInicio.addEventListener("input", validacionhInicio);
    fFin.addEventListener("input",validacionfFin);
    hFin.addEventListener("input", validacionhFin);
    ciudad.addEventListener("input",validacionCiudad);
    validacionCoche();
    validacionfInicio();
    validacionhInicio();
    validacionfFin();
    validacionhFin();
    validacionCiudad();
}
function crearbd() {
    solicitud = indexedDB.open("RentG11");
    solicitud.onsucces = function (e) {
        bd = solicitud.result;
    };
    solicitud.onupgradeneeded = function (e) {
        bd = solicitud.result;
        var cliente = bd.createObjectStore("clientes", {keyPath: "Email"});
        var coche = bd.createObjectStore("coches", {keyPath: "matricula"});
        var reserva = bd.createObjectStore("reservas", {keyPath: "id_reserva", autoIncrement : true});
        cliente.add({Email: "admin1@rentG.com", Contraseña: "1234", Nombre: "admin1", DNI: "123456789", Telefono: "655555555"});
        cliente.add({Email: "admin2@rentG.com", Contraseña: "4321", Nombre: "admin2", DNI: "987654321", Telefono: "666666666"});
        coche.add({matricula: "1234ABC", marca: "Opel"});
        coche.add({matricula: "9876CBA", marca: "Mercedes"});
        coche.add({matricula: "2468BDF", marca: "BMW"});

    };
}
function validacionCoche() {
    if (coche.value === "") {
        coche.setCustomValidity("Seleccione el coche que desea");
    } else {
        coche.setCustomValidity("");
    }
}
function validacionfInicio() {
    hoy = new date();
    if (fInicio.value === "" || fInicio.value < hoy) {
        fInicio.setCustomValidity("Inserte la fecha en la que quiere que inicie la reserva");
    } else {
        fInicio.setCustomValidity("");
    }
}
function validacionhInicio() {
    if (hInicio.value === "") {
        hInicio.setCustomValidity("Inserte la hora en la que quiere que inicie la reserva");
    } else {
        hInicio.setCustomValidity("");
    }
}
function validacionfFin() {
    if (fFin.value === "" || fFin > fInicio) {
        fFin.setCustomValidity("Inserte la fecha en la que quiere que inicie la reserva");
    } else {
        fFin.setCustomValidity("");
    }
}
function validacionhFin() {
    if (hFin.value === "") {
        hFin.setCustomValidity("Inserte la hora en la que quiere que quiere finalizar ");
    } else {
        hFin.setCustomValidity("");
    }
}
function validacionCiudad() {
    if (ciudad.value === "") {
        ciudad.setCustomValidity("Inserte la ciudad en la que quiere que quiere recoger el coche ");
    } else {
        ciudad.setCustomValidity("");
    }
}
function agregarReserva(){
    
}
window.addEventListener("load", iniciar, false);

