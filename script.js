document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const threshold = 600; // change this value if you want the switch earlier/later

    function onScroll() {
        if (window.scrollY > threshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
});
