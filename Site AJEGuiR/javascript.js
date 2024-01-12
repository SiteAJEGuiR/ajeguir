// Récupérez l'élément de la barre de navigation
var navbar = document.getElementById("navbar");

// Récupérez la position de la barre de navigation
var navbarPosition = navbar.offsetTop;

// Fonction pour fixer ou libérer la barre de navigation en fonction du défilement
function fixerNavbar() {
    if (window.pageYOffset >= navbarPosition) {
        navbar.classList.add("fixe");
    } else {
        navbar.classList.remove("fixe");
    }
}

// Ajoutez un écouteur d'événements pour détecter le défilement
window.onscroll = function() {
    fixerNavbar();
};
