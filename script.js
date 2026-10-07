/* =========================================================
   GATO BARATO
   SCRIPT.JS
========================================================= */


/* =========================================================
   LOADER
========================================================= */

const loader =
    document.getElementById("loader");

const loaderPercent =
    document.getElementById("loaderPercent");


document.body.classList.add("loading");


let progress = 0;


const progressInterval =
    setInterval(() => {

        progress += Math.floor(
            Math.random() * 8
        ) + 3;


        if (progress >= 100) {

            progress = 100;

            clearInterval(progressInterval);

        }


        loaderPercent.textContent =
            progress;

    }, 100);


/* Cuando termina de cargar */

window.addEventListener("load", () => {

    setTimeout(() => {

        loaderPercent.textContent = "100";

        loader.classList.add("hidden");

        document.body.classList.remove("loading");

    }, 700);

});


/* =========================================================
   MENÚ
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");


menuToggle.addEventListener(
    "click",
    () => {

        nav.classList.toggle("active");

        const icon =
            menuToggle.querySelector("i");


        if (
            nav.classList.contains("active")
        ) {

            icon.classList.remove(
                "fa-bars"
            );

            icon.classList.add(
                "fa-xmark"
            );

        } else {

            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }

    }
);


/* Cerrar menú al seleccionar */

document
    .querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove(
                    "active"
                );


                const icon =
                    menuToggle.querySelector(
                        "i"
                    );


                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }
        );

    });


/* =========================================================
   HEADER AL HACER SCROLL
========================================================= */

const header =
    document.getElementById("header");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);


/* =========================================================
   FILTROS DE PORTAFOLIO
========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


const portfolioItems =
    document.querySelectorAll(
        ".portfolio-item"
    );


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(
                btn => {

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );


            const filter =
                button.getAttribute(
                    "data-filter"
                );


            portfolioItems.forEach(
                item => {

                    const category =
                        item.getAttribute(
                            "data-category"
                        );


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        item.style.display =
                            "block";


                        setTimeout(
                            () => {

                                item.style.opacity =
                                    "1";

                                item.style.transform =
                                    "translateY(0)";

                            },
                            50
                        );

                    } else {

                        item.style.opacity =
                            "0";

                        item.style.transform =
                            "translateY(15px)";


                        setTimeout(
                            () => {

                                item.style.display =
                                    "none";

                            },
                            250
                        );

                    }

                }
            );

        }
    );

});


/* =========================================================
   MODAL DE IMÁGENES
========================================================= */

const modal =
    document.getElementById(
        "imageModal"
    );


const modalImage =
    document.getElementById(
        "modalImage"
    );


const modalCaption =
    document.getElementById(
        "modalCaption"
    );


const modalClose =
    document.getElementById(
        "modalClose"
    );


const viewButtons =
    document.querySelectorAll(
        ".view-image"
    );


viewButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const image =
                button.getAttribute(
                    "data-image"
                );


            const title =
                button.getAttribute(
                    "data-title"
                );


            modalImage.src = image;

            modalImage.alt = title;

            modalCaption.textContent =
                title;


            modal.classList.add(
                "active"
            );


            document.body.style.overflow =
                "hidden";

        }
    );

});


/* Cerrar modal */

function closeModal() {

    modal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


/* Cerrar haciendo click fuera */

modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            closeModal();

        }

    }
);


/* Cerrar con ESC */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =========================================================
   AÑO AUTOMÁTICO
========================================================= */

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();


/* =========================================================
   ANIMACIONES AL HACER SCROLL
========================================================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(
        ".service-card, " +
        ".portfolio-item, " +
        ".contact-card"
    )
    .forEach(element => {

        element.classList.add(
            "animate-on-scroll"
        );

        observer.observe(element);

    });


/* =========================================================
   COMPROBAR IMÁGENES
========================================================= */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "error",
            () => {

                console.warn(
                    "No se encontró la imagen:",
                    image.src
                );

            }
        );

    });