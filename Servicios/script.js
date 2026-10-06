// ========================================
// CONFIGURACIÓN
// ========================================

// Números de WhatsApp
const NUMERO_1 = "527858306688";
const NUMERO_2 = "522201501330";


// Mensajes para cada servicio
const mensajes = {

    mantenimiento:
        "Hola, quiero información sobre el servicio de mantenimiento de computadora.",

    camaras:
        "Hola, quiero información sobre la instalación de cámaras de seguridad.",

    etiquetas:
        "Hola, quiero información sobre la creación de etiquetas y stickers.",

    impresiones:
        "Hola, quiero información sobre el servicio de impresiones.",

    recuperacion:
        "Hola, quiero información sobre la recuperación de información de un disco o dispositivo.",

    programas:
        "Hola, quiero información sobre instalación de programas y sistemas operativos."

};


// ========================================
// ELEMENTOS
// ========================================

const botones = document.querySelectorAll(".servicio");

const modal = document.getElementById("modal");

const cerrar = document.getElementById("cerrar");

const mensajeSeleccionado =
    document.getElementById("mensajeSeleccionado");

const numero1 =
    document.getElementById("numero1");

const numero2 =
    document.getElementById("numero2");

const whatsappGeneral =
    document.getElementById("whatsappGeneral");


// Variable para guardar el mensaje elegido
let mensajeActual = "";


// ========================================
// SELECCIONAR SERVICIO
// ========================================

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const servicio = boton.dataset.servicio;

        mensajeActual = mensajes[servicio];

        mensajeSeleccionado.textContent =
            mensajeActual;

        modal.classList.add("activo");

    });

});


// ========================================
// ABRIR WHATSAPP
// ========================================

function abrirWhatsApp(numero) {

    const mensajeCodificado =
        encodeURIComponent(mensajeActual);

    const url =
        `https://wa.me/${numero}?text=${mensajeCodificado}`;

    window.location.href = url;

}


// ========================================
// BOTONES DE WHATSAPP
// ========================================

numero1.addEventListener("click", () => {

    abrirWhatsApp(NUMERO_1);

});


numero2.addEventListener("click", () => {

    abrirWhatsApp(NUMERO_2);

});


// ========================================
// WHATSAPP GENERAL
// ========================================

whatsappGeneral.addEventListener("click", () => {

    mensajeActual =
        "Hola, quiero información sobre sus servicios.";

    mensajeSeleccionado.textContent =
        mensajeActual;

    modal.classList.add("activo");

});


// ========================================
// CERRAR MODAL
// ========================================

cerrar.addEventListener("click", () => {

    modal.classList.remove("activo");

});


// ========================================
// CERRAR AL TOCAR FUERA
// ========================================

modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {

        modal.classList.remove("activo");

    }

});


// ========================================
// CERRAR CON ESC
// ========================================

document.addEventListener("keydown", (evento) => {

    if (evento.key === "Escape") {

        modal.classList.remove("activo");

    }

});