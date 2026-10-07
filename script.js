/* =========================
   CONFIGURACIÓN
========================= */

const WHATSAPP_NUMBER = "527858306688";


/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 700);

});


/* =========================
   AÑO AUTOMÁTICO
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* =========================
   MENÚ MÓVIL
========================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon =
        menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Cerrar menú al seleccionar opción */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon =
            menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});



/* =========================
   WHATSAPP MODAL
========================= */

const whatsappModal =
    document.getElementById("whatsappModal");


function openWhatsappModal() {

    whatsappModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeWhatsappModal() {

    whatsappModal.classList.remove("active");

    document.body.style.overflow = "";

}


function openWhatsApp(service) {

    const message =
        `Hola, Gato Barato 🐱\n\n` +
        `Me interesa: ${service}.\n\n` +
        `¿Podrían darme información?`;

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    closeWhatsappModal();

}


/* Cerrar haciendo clic fuera */

whatsappModal.addEventListener("click", (event) => {

    if (event.target === whatsappModal) {

        closeWhatsappModal();

    }

});


/* ESC para cerrar */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeWhatsappModal();

    }

});



/* =========================
   ANIMACIONES AL HACER SCROLL
========================= */

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(
        ".service-card, .stat, .promo-card, .about-content, .problem-content"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform = "translateY(30px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

        observer.observe(element);

    });


/* Clase show */

const animationStyle =
    document.createElement("style");

animationStyle.innerHTML = `

    .service-card.show,
    .stat.show,
    .promo-card.show,
    .about-content.show,
    .problem-content.show {

        opacity: 1 !important;

        transform: translateY(0) !important;

    }

`;

document.head.appendChild(animationStyle);



/* =========================
   PARALLAX DEL LOGO
========================= */

const heroLogo =
    document.querySelector(".hero-logo");


document.addEventListener("mousemove", (event) => {

    if (!heroLogo) return;

    const x =
        (window.innerWidth / 2 - event.clientX) / 50;

    const y =
        (window.innerHeight / 2 - event.clientY) / 50;

    heroLogo.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* =========================
   EFECTO RIPPLE EN BOTONES
========================= */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(event) {

        const ripple =
            document.createElement("span");

        ripple.classList.add("ripple");

        const rect =
            this.getBoundingClientRect();

        ripple.style.left =
            `${event.clientX - rect.left}px`;

        ripple.style.top =
            `${event.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* =========================
   EFECTO HOVER SERVICIOS
========================= */

document
    .querySelectorAll(".service-card")
    .forEach(card => {

        card.addEventListener("mousemove", event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            card.style.setProperty(
                "--mouse-x",
                `${x}px`
            );

            card.style.setProperty(
                "--mouse-y",
                `${y}px`
            );

        });

    });