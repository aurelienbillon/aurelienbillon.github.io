const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");


/* =========================================
   IMAGES CLIQUABLES
========================================= */

const zoomableImages = document.querySelectorAll(
    ".illustration-item img, .animation-zoom img"
);


/* =========================================
   OUVERTURE
========================================= */

zoomableImages.forEach((image) => {

    image.addEventListener("click", () => {

        if (!lightbox || !lightboxImage) {
            return;
        }

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");

        document.body.classList.add("lightbox-open");

    });

});


/* =========================================
   FERMETURE
========================================= */

function closeLightbox() {

    if (!lightbox) {
        return;
    }

    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.classList.remove("lightbox-open");

}


/* CROIX */

if (lightboxClose) {

    lightboxClose.addEventListener("click", closeLightbox);

}


/* CLIC SUR LE FOND */

if (lightbox) {

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });

}


/* ÉCHAP */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeLightbox();
    }

});