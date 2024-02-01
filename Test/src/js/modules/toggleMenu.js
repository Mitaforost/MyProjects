const toggleMenu = (buttonSelector, menuSelector) => {
    const button = document.querySelector(buttonSelector);
    const menu = document.querySelector(menuSelector);

    if (!button || !menu) {
        console.error('Button or menu not found.');
        return;
    }

    let isOpen = false;

    const toggle = () => {
        isOpen = !isOpen;
        menu.classList.toggle('active', isOpen);
    };

    button.addEventListener('click', toggle);

    // Добавим обработчик клика за пределами меню для закрытия при клике вне меню
    document.addEventListener('click', (event) => {
        if (isOpen && !menu.contains(event.target) && !button.contains(event.target)) {
            toggle();
        }
    });
};

export default toggleMenu;
