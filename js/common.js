// common.js - Shared logic for all pages
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav a');

    if (burgerMenu && nav) {
        burgerMenu.addEventListener('click', function () {
            burgerMenu.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerMenu.classList.remove('active');
                nav.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            const isClickInsideNav = nav.contains(event.target);
            const isClickOnBurger = burgerMenu.contains(event.target);

            if (!isClickInsideNav && !isClickOnBurger && nav.classList.contains('active')) {
                burgerMenu.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    }
});
