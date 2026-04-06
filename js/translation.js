const translations = {
    en: {
        title: "Profile frontend developer",

        myName: "Yelisieiev Yevhenii",
        description: "Beginner Frontend Developer",

        nav_about: "About me",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contacts: "Contacts",

        about_title: "About me",
        about_text: "I'm a beginner front-end developer. I study and live in Poland. I'm studying computer science and programming at a technical school. ",
        
        skills: "Skills",
        languages: "Languages",

        lang_en: "English",
        lang_ua: "Ukrainian",
        lang_pl: "Polish",
        lang_ru: "Russian",
        speaking: "Speaking",

        project_title: "My Projects",
        minecraft: "Minecraft Server Website",
        php_mysql: "PHP and MySQL testing site",
        calculator: "Calculator",
        testJS: "In this web site I will be testing JS",
        testJSLS: "In this website I will be testing Locale Storage in JS",

        aside: "I live in Częstochowa, Poland. I'm a boxer and go to the gym. I'm 18 years old.",
        resume: "My resume",

        modal_desc: "Site for minecraft server. Rules, descripton and links to owner.",
        modal_tech: "Technologies:",
        modal_link: "Website:",
        open_site: "Open site!"
    },
    ru: {
        title: "Профиль фронтенд-разработчика",

        myName: "Елисиеев Евгений",
        description: "Начинающий фронтенд-разработчик",

        nav_about: "Обо мне",
        nav_skills: "Навыки",
        nav_projects: "Проекты",
        nav_contacts: "Контакты",

        about_title: "Обо мне",
        about_text: "Я начинающий фронтенд-разработчик. Я учусь и живу в Польше. Я изучаю информатику и программирование в техническом училище.",
        
        skills: "Навыки",
        languages: "Владение языками",

        lang_en: "Английский",
        lang_ua: "Украинский",
        lang_pl: "Польский",
        lang_ru: "Русский",
        speaking: "Говорящий",

        project_title: "Мои проекты",
        minecraft: "Сайт сервера Minecraft",
        php_mysql: "Сайт для тестирования PHP и MySQL",
        calculator: "Калькулятор",
        testJS: "На этом сайте я буду тестировать JavaScript.",
        testJSLS: "На этом сайте я буду тестировать локальное хранилище в JavaScript.",
        
        aside: "Я живу в Ченстохове, Польша. Я боксер и хожу в спортзал. Мне 18 лет.",
        resume: "Моё резюме",
        modal_desc: "Сайт сервера Minecraft. Правила, описание и ссылки на владельца.",
        modal_tech: "Технологии:",
        modal_link: "Веб-сайт:",
        open_site: "Открыть сайт!"
    },
    ua: {
        title: "Профіль фронтенд-розробника",

        myName: "Єлісєєв Євгеній",
        description: "Фронтенд-розробник-початківець",

        nav_about: "Про мене",
        nav_skills: "Навички",
        nav_projects: "Проєкти",
        nav_contacts: "Контакти",

        about_title: "Про мене",
        about_text: "Я фронтенд-розробник-початківець. Я навчаюся та живу в Польщі. Вивчаю інформатику та програмування в технікумі. ",

        skills: "Навички",
        languages: "Мови",

        lang_en: "Англійська",
        lang_ua: "Українська",
        lang_pl: "Польська",
        lang_ru: "Російська",
        speaking: "Розмовна мова",

        project_title: "Мої проєкти",
        minecraft: "Веб-сайт сервера Minecraft",
        php_mysql: "Сайт для тестування PHP та MySQL",
        calculator: "Калькулятор",
        testJS: "На цьому веб-сайті я буду тестувати JS",
        testJSLS: "На цьому вебсайті я буду тестувати локальне сховище на JS.",

        aside: "Я живу в Ченстохова, Польща. Я боксер та ходжу в спортзал. Мені 18 років.",
        resume: "Моє резюме",
        modal_desc: "Сайт для сервера майнкрафт. Правила, опис та посилання на власника.",
        modal_tech: "Технології:",
        modal_link: "Веб-сайт:",
        open_site: "Відкритий сайт!"
    },
    pl: {
        title: "Profil frontend developera",

        myName: "Yelisieiev Yevhenii",
        description: "Początkujący frontend developer",

        nav_about: "O mnie",
        nav_skills: "Umiejętności",
        nav_projects: "Projekty",
        nav_contacts: "Kontakty",

        about_title: "O mnie",
        about_text: "Jestem początkującym frontend developerem. Studiuję i mieszkam w Polsce. Studiuję informatykę i programowanie w technikum. ",
        
        skills: "Umiejętności",
        languages: "Jezyki",

        lang_en: "Angielski",
        lang_ua: "Ukraiński",
        lang_pl: "Polski",
        lang_ru: "Rosyjski",
        speaking: "Mówiący",

        project_title: "Moje projekty",
        minecraft: "Strona serwera Minecraft",
        php_mysql: "Strona testowa PHP i MySQL",
        calculator: "Kalkulator",
        testJS: "Na tej stronie będę testował JS",
        testJSLS: "Na tej stronie będę testował pamięć lokalną w JS",

        aside: "Mieszkam w Częstochowie. Jestem bokserem i chodzę na siłownię. Mam 18 lat.",
        resume: "Moje CV",
        modal_desc: "Strona dla serwera Minecraft. Zasady, opis i linki do właściciela.",
        modal_tech: "Technologie:",
        modal_link: "Strona internetowa:",
        open_site: "Otwórz witrynę!"
    }
};

const langSelect = document.getElementById("language-select");

const savedLang = localStorage.getItem("language") || "en";
langSelect.value = savedLang;
setLanguage(savedLang);

langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    localStorage.setItem("language", lang);
    setLanguage(lang);
});

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (key in translations[lang]) {
        element.textContent = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;

}


