document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 1;
    const pages = document.querySelectorAll(".page");
    const totalPages = pages.length;
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    function showPage(pageNumber) {
        pages.forEach((page, index) => {
            if (index + 1 === pageNumber) {
                page.style.display = "block";
                page.style.opacity = "0";
                setTimeout(() => {
                    page.style.opacity = "1";
                    page.style.transition = "opacity 0.5s ease-in-out";
                }, 50);
            } else {
                page.style.display = "none";
            }
        });

        // Habilitar o deshabilitar botones según la página
        prevButton.disabled = pageNumber === 1;
        nextButton.disabled = pageNumber === totalPages;
    }

    prevButton.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Mostrar la primera página al cargar
    showPage(currentPage);
});
