document.addEventListener("DOMContentLoaded", () => {

    const imgPreviews = document.querySelectorAll(".img_preview");
    const textPreviews = document.getElementById("text_preview");
    const links = document.querySelectorAll(".link_site");
    const preview = document.getElementById("preview")


    links.forEach((item, index) => {

        item.addEventListener("mouseenter", () => {

            preview.classList.add("shows");

            imgPreviews.forEach(img => img.classList.remove("shows"));

            imgPreviews[index].classList.add("shows");

            textPreviews.textContent = item.textContent;
        });

        item.addEventListener("mouseleave", () => {

            preview.classList.remove("shows");

            imgPreviews[index].classList.remove("shows");

            textPreviews.textContent = "";

        });

    });

});