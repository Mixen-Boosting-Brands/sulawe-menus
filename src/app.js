// Libraries
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

// Local Scripts
import '../src/smooth-scrolling';
import '../src/form-ajax';
import '../src/aos';

// Header
$(function () {
    // Cachea el objeto jQuery que contiene el elemento #navbar
    var header = $("#navbar");

    function updateScroll() {
        var scroll = $(window).scrollTop();

        if (scroll >= 1) {
            header.addClass('navbar-scroll');
        } else {
            header.removeClass("navbar-scroll");
        }
    }

    $(function () {
        $(window).scroll(updateScroll);
        updateScroll();
    });
});

// Menú de navegación
$('#mburger').click(function (e) {
    e.stopPropagation();
    $('.menu').toggleClass('menu-abierto');
    $('#navbar').toggleClass('opacity-0');
    $('#backdrop').toggleClass('backdrop-opacity-1');
});

$('.menu').click(function (e) {
    e.stopPropagation();
});

$('body,html').click(function (e) {
    $('.menu').removeClass('menu-abierto');
    $('#navbar').removeClass('opacity-0');
    $('#backdrop').removeClass('backdrop-opacity-1');
});

document.getElementById("cerrar-menu").addEventListener("click", cerrarMenu, false);
document.getElementById("btn-logo").addEventListener("click", cerrarMenu, false);

for( let i = 1; i < 4; i++ ) { // Cambiar por número de botones de navegación que se vayan a necesitar (sumar +1 al número de elementos que se necesitan)
    document.getElementById(`btn-nav-${i}`).addEventListener("click", cerrarMenu, false);
}

document.getElementById("btn-contacto").addEventListener("click", cerrarMenu, false);

function cerrarMenu() {
    $('.menu').removeClass('menu-abierto');
    $('#navbar').removeClass('opacity-0');
    $('#backdrop').removeClass('backdrop-opacity-1');
}

// Cerrar menú con Esc
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        cerrarMenu();
    }
});
