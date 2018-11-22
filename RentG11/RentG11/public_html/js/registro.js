/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nombre, telefono, DNI, email, expresion,contraseña;

    function iniciar(){
        nombre = document.getElementById("nombre");
        telefono = document.getElementById("telefono");
        DNI = document.getElementById("DNI");
        email = document.getElementById("correo");
        contraseña = document.getElementById("password");
        expresion = /\w+@\w+\.+[a-z]/;
        nombre.addEventListener("input",validacionNombre);
        telefono.addEventListener("input",validacionTelefono);
        DNI.addEventListener("input",validacionDNI);
        email.addEventListener("input",validacionEmail);
        contraseña.addEventListener("input",validacionContraseña);
        validacionNombre();
        validacionTelefono();
        validacionDNI();
        validacionEmail();
        validacionContraseña();
    }
    function validacionNombre(){
        if (nombre.value === ""){
            nombre.setCustomValidity("Inserte su nombre");
        }
        else{
             nombre.setCustomValidity("");
         }
    }
         function validacionTelefono(){
        if (telefono.value === ""){
            telefono.setCustomValidity("Inserte su telefono");
        }
        else{
             telefono.setCustomValidity("");
         }
    } 
    function validacionDNI(){
        if (DNI.value === ""){
            DNI.setCustomValidity("Inserte su DNI");
        }
        else{
            DNI.setCustomValidity("");
         }
    }
     function validacionEmail(){
        if (email.value === ""){
            email.setCustomValidity("Inserte su email");
        }
        else{
             email.setCustomValidity("");
         }
    }
     function validacionContraseña(){
        if (contraseña.value === ""){
            contraseña.setCustomValidity("Inserte su contraseña");
        }
        else{
             contraseña.setCustomValidity("");
         }
    }
        
    
    window.addEventListener("load", iniciar);




//    if(nombre === ""){
//        alert("El campo nombre está vacio");
//
//    }
//    else if (nombre.length < 3){
//        alert("El nombre es demasiado corto");
//        
//    }
//
//    if(telefono === ""){
//        alert("El campo telefono está vacio");
//        
//    }
//    else if (isNaN(telefono) && tlefono.length =! 9){
//        alert("El telefono es incorrecto");
//       
//    }
//
//    if(DNI === ""){
//        alert("El campo DNI está vacio");
//        
//    }
//    else if (DNI.length =! 9){
//        alert("DNI incorrecto");
//        
//    }
//
//    if(email == ""){
//        alert("El campo correo está vacio");
//        
//    }
//    else if(!expresion.test(correo)){
//        alert("El campo correo no es valido");
//        
//    }
//    
//var pass = document.getElementById(pass);
//    if(pass === ""){
//        alert("El campo contraseña está vacio");
//       
//    }
//    else if (pass.length < 6){
//        alert("El campo contraseña debe tener al menos 6 caracteres");
//          
//    }
//}

