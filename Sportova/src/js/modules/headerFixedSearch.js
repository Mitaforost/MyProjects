const headerFixedSearch = (searchButtonSelector, searchInputSelector, otherButtonsSelector, buttonsContainerSelector, fixedMenuSelector) => {
    const searchButton = document.querySelector(searchButtonSelector);
    const searchInput = document.querySelector(searchInputSelector);
    const otherButtons = document.querySelectorAll(otherButtonsSelector);
    const buttonsContainer = document.querySelector(buttonsContainerSelector);
    const fixedMenu = document.querySelector(fixedMenuSelector);

    searchInput.style.width = `${buttonsContainer.offsetWidth}px`;
    searchButton.addEventListener("click", function () {
        searchInput.classList.toggle("hidden");
        otherButtons.forEach((button, index) => {
            if (index === 0) {
                // Убираем margin у первого элемента
                button.style.marginRight = '0';
            } else {
                button.classList.toggle("hidden");
                button.style.marginRight = '0';
            }
        });
    });
    fixedMenu.addEventListener("mouseleave", function () {
        searchInput.classList.add("hidden");

        // Показать остальные элементы кнопок
        otherButtons.forEach((button, index) => {
            if (index === 0) {
                button.style.marginRight = '0';
            } else {
                button.classList.remove("hidden");
                button.style.marginRight = '';
            }
        });
    });
}

export default headerFixedSearch;
