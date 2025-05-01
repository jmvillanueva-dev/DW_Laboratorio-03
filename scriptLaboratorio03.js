// Labotario 03 - Introducción a JavaScript
// Creacion de una contraseña [Page Netflix]

const email = "jhonny.villanueva@epn.edu.ec" 
let password = "jv200"

const validarEmail = (email) => {

};

const validarPassword = (password) => {
    password.trim().length < 6 || password.trim().length > 60 
    ? console.log("La contraseña debe tener entre 6 y 60 caracteres.")
    : console.log("Contraseña válida");
};

// Lammar a la función validarPassword()
validarPassword(password);

// Presentacion de un objeto [Page Mercado Libre]

let nombreProducto = "Honor X7c Alt-lx3";
let ram = "8 GB";
let almacenamiento = "256 GB";
let color = "Verde Foresta";
let precioProducto = 289.99; 
let estadoProducto = "Nuevo";


console.log(`El teléfono ${nombreProducto} tiene ${ram} de RAM, ${almacenamiento} de almacenamiento, 
    es de color ${color}, cuesta $${precioProducto} y está en estado ${estadoProducto}.`);    