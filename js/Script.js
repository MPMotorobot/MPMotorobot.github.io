document.addEventListener('DOMContentLoaded', () => {
    // ============================================================
    // 1. VARIABLE INITIALIZATION / ИНИЦИАЛИЗАЦИЯ ПЕРЕМЕННЫХ
    // ============================================================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('ul.nav a');
    const navbar = document.querySelector('nav.nav');
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    let lastScrollTop = 0;

    // ============================================================
    // 2. ACTIVE LINK HIGHLIGHTING / ПОДСВЕТКА АКТИВНЫХ ССЫЛОК
    // ============================================================
    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px -70% 0px', // Adjust trigger area / Настройка области срабатывания
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    // Match section ID with link href / Сопоставляем ID секции с якорем ссылки
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));

    // ============================================================
    // 3. SCROLL LOGIC & NAVBAR BEHAVIOR / ЛОГИКА СКРОЛЛА И НАВБАРА
    // ============================================================
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Mobile behavior (screens <= 780px) / Поведение на мобильных (экран <= 780px)
        if (window.innerWidth <= 780) {
            if (scrollTop > 50) {
                // Hide menu, show burger / Прячем меню, показываем бургер
                navList.classList.add('swiped');
                menuToggle.classList.add('visible');
            } else {
                // Reset to default at the top / Сброс в начало при прокрутке вверх
                navList.classList.remove('swiped');
                menuToggle.classList.remove('visible');
                navList.classList.remove('show');
            }
        } else {
            // Desktop reset / Сброс для десктопа
            navList.classList.remove('swiped');
            menuToggle.classList.remove('visible');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // ============================================================
    // 4. MOBILE MENU (BURGER) / МОБИЛЬНОЕ МЕНЮ (БУРГЕР)
    // ============================================================
    if (menuToggle) {
        // Toggle menu visibility / Переключение видимости меню
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('show');
            menuToggle.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked / Закрытие меню при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('show');
            menuToggle.classList.remove('active');
        });
    });

    // ============================================================
    // 5. THEME SWITCHER (DARK/LIGHT) / ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ
    // ============================================================
    
    // Load saved theme from localStorage / Загрузка сохраненной темы
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        if (themeToggle) themeToggle.textContent = '💡';
    }

    // Toggle theme on click / Переключение темы по клику
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark');
            const isDark = body.classList.contains('dark');
            
            // Save preference / Сохраняем выбор пользователя
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            // Update button icon / Обновляем иконку кнопки
            themeToggle.textContent = isDark ? '💡' : '⚫️';
        });
    }
});