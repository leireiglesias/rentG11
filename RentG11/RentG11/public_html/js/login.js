/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var email, contraseña;

function iniciar() {
    email = document.getElementById("correoLogin");
    contraseña = document.getElementById("passLogin");
    email.addEventListener("input", validacionEmail);
    contraseña.addEventListener("input", validacionContraseña);
    validacionEmail();
    validacionContraseña();
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
window.addEventListener("load", iniciar);

