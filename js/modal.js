document.addEventListener("DOMContentLoaded", () => {

    const projectData = {
        minecraft: {
            desc: { 
                en: "Site for minecraft server. Rules, descripton and links to owner.",
                ru: "Сайт сервера Minecraft. Правила, описание и ссылки на владельца.",
                ua: "Сайт для сервера майнкрафт. Правила, опис та посилання на власника.",
                pl: "Strona dla serwera Minecraft. Zasady, opis i linki do właściciela."
            },
            tech: "Google site",
            img: "./image/preview_ms.png",
            url: "https://sites.google.com/view/server-maderatorworld"
        },
        php_mysql: {
            desc: { 
                en: "Testing site with Database MySQL with my training plan in gym.",
                ru: "Тестирование сайта с использованием базы данных MySQL и моего тренировочного плана в спортзале",
                ua: "Тестовий сайт з базою даних MySQL та моїм планом тренувань у тренажерному залі.",
                pl: "Testuję witrynę z bazą danych MySQL z moim planem treningowym na siłowni.",
            },
            tech: "PHP, MySQL, HTML",
            img: "./image/preview_php.png",
            url: "https://yujenix.page.gd"
        },
        calculator: {
            desc: {
                en: "This site is not finished yet.",
                ru: "Работа над этим сайтом ещё не завершена.",
                ua: "Цей сайт ще не завершений.",
                pl: "Ta strona nie jest jeszcze ukończona."
            },
            tech: "JavaScript, HTML, CSS, PHP, MySQL",
            img: "",
            url: ""
        },
        testJS: {
            desc: {
                en: "Testing JS site.",
                ru: "Тестирование сайта на JavaScript.",
                ua: "Тестування JS сайту.",
                pl: "Testowanie witryny JS."
            },
            tech: "JavaScript, HTML, CSS",
            img: "./image/preview_js.png",
            url: "https://mpmotorobot.github.io/testingJS/"
        }
    };




    const links = document.querySelectorAll(".link_site");
    const modal = document.getElementById("modal");
    const modalClose = document.getElementById("modal-close");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalTech = document.getElementById("modal-tech");
    const modalImg = document.getElementById("modal-img");
    const modalLink = document.getElementById("modal-link");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const key = link.dataset.i18n;
            const project = projectData[key];
            const currentLang = localStorage.getItem("language") || "en";

            if(project){
                modalTitle.textContent = link.textContent;
                modalDesc.textContent = project.desc[currentLang];
                modalTech.textContent = project.tech;
                modalImg.src = project.img;
                modalLink.href = project.url;
                modal.style.display = "flex";

                setTemiout(() => {
                    modal.style.opacity = "1";
                }, 10);
            }
        });
    });

    modalClose.addEventListener("click", () => {
        modal.style.opacity = "0";

        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    });
    window.addEventListener("click", (e) => {
        if(e.target === modal) {
            modal.style.opacity = "0";

            setTimeout(() => {
                modal.style.display = "none";
            }, 300)
        }
    })
});
