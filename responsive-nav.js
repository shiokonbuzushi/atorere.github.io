document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('global-nav');
    if (!nav) return;

    const button = nav.querySelector('.hamburger');
    const menu = nav.querySelector('.global-list');
    const backdrop = nav.querySelector('.nav-backdrop');
    if (!button || !menu) return;

    function closeMenu() {
        nav.classList.remove('is-open');
        document.body.classList.remove('nav-open');
        button.setAttribute('aria-expanded', 'false');
    }

    function openMenu() {
        nav.classList.add('is-open');
        document.body.classList.add('nav-open');
        button.setAttribute('aria-expanded', 'true');
    }

    button.addEventListener('click', function () {
        if (nav.classList.contains('is-open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    if (backdrop) {
        backdrop.addEventListener('click', closeMenu);
    }

    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 900) {
            closeMenu();
        }
    });
});
