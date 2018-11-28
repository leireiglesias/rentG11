/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var email_log, contraseña_log;

function iniciar() {
    email_log = document.getElementById("correoLogin");
    contraseña_log = document.getElementById("passLogin");
    var boton = document.getElementById("login");
    email_log.addEventListener("input", validacionEmail);
    contraseña_log.addEventListener("input", validacionContraseña);
    crearbd();
    validacionEmail();
    validacionContraseña();
    boton.addEventListener("click", validar);
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
function crearbd() {
    DB = indexedDB.open("RentG11", 1);
    DB.onsuccess = function (e) {
        

    };

    DB.onerror = function (e) {
        alert('Error cargando la base de datos');
    };


    DB.onupgradeneeded = function (e) {
        bd = DB.result;
        cliente = bd.createObjectStore("cliente", {keyPath: "Email"});
        cliente.createIndex('Contraseña', 'dni', {unique: false});
        cliente.createIndex('Nombre', 'name', {unique: false});
        cliente.createIndex('DNI', 'dni', {unique: true});
        cliente.createIndex('Telefono', 'name', {unique: true});

        var coche = bd.createObjectStore("coche", {keyPath: "matricula"});
        coche.createIndex('Marca', 'marca', {unique: false});
        coche.createIndex('Caracteristica', 'caracteristica', {unique: false});


        var reserva = bd.createObjectStore("reserva", {keyPath: "id_reserva", autoIncrement: true});
        reserva.createIndex('Email', 'email', {unique: false});
        reserva.createIndex('Matricula', 'matricula', {unique: false});
        reserva.createIndex('FechaI', 'fechaI', {unique: false});
        reserva.createIndex('HoraI', 'horaI', {unique: false});
        reserva.createIndex('FechaF', 'fechaF', {unique: false});
        reserva.createIndex('HoraF', 'horaF', {unique: false});
        reserva.createIndex('Ciudad', 'ciudad', {unique: false});

        cliente.add({Email: "admin1@rentG.com", Contraseña: "1234", Nombre: "admin1", DNI: "123456789", Telefono: "655555555"});
        cliente.add({Email: "admin2@rentG.com", Contraseña: "4321", Nombre: "admin2", DNI: "987654321", Telefono: "666666666"});
        coche.add({matricula: "1234ABC", marca: "Opel", caracteristica: "Pequeño"});
        coche.add({matricula: "9876CBA", marca: "Mercedes", caracteristica: "Mediano"});
        coche.add({matricula: "2468BDF", marca: "BMW", caracteristica: "Grande"});

    };
}
function validar() {
    var email = email_log.value;
    var password = contraseña_log.value;

    var transaction = db.transaction(["cliente"]);
    var objectStore = transaction.objectStore("cliente");
    var request = objectStore.get(email);
    request.onerror = function (e) {
        alert("El email introducido no esta en la BD");
        return;
    };
    request.onsuccess = function (e) {
        if (password !== request.result.password) {
            alert("Contraseña incorrecta");
            return;
        }
    };

}

window.addEventListener("load", iniciar);

