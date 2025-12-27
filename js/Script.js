
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('ul.nav a');
    const navbar = document.querySelector('nav.nav');
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    let lastScrollTop = 0;

    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -70% 0px',
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));

    window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (window.innerWidth <= 780) {
        if (scrollTop > 50) {
            navList.classList.add('swiped');
            menuToggle.classList.add('visible');
        } else {
            navList.classList.remove('swiped');
            menuToggle.classList.remove('visible');
            navList.classList.remove('show');
        }
    } else {
        navList.classList.remove('swiped');
        menuToggle.classList.remove('visible');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('show');
            menuToggle.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('show');
            menuToggle.classList.remove('active');
        });
    });
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    body.classList.add('dark');
    if(themeToggle) themeToggle.textContent = '💡';
}

if(themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '💡' : '⚫️';
    });
}
