const buttonlang = (selector, params) => {
    const btns = document.querySelectorAll(selector);
    btns.forEach(function (btn) {
        const svgElement = btn.querySelector('svg'); // Находим существующий svg в кнопке

        btn.addEventListener('click', () => {
            if (params.text === 'EN') {
                params.text = 'RU';
            } else if (params.text === 'RU') {
                params.text = 'EN';
            }
            btn.innerText = params.text;

            // Добавьте код для обработки иконки
            if (svgElement) {
                svgElement.remove(); // Удаляем существующий svg перед добавлением нового
            }

            const newSvgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');

            newSvgElement.setAttribute('width', `${params.width}`);
            newSvgElement.setAttribute('height', `${params.height}`);
            useElement.setAttribute('href', params.path);
            newSvgElement.appendChild(useElement);

            const position = params.position || 'after';

            if (position === 'before') {
                btn.insertBefore(newSvgElement, btn.firstChild);
            } else if (position === 'after') {
                btn.appendChild(newSvgElement);
            } else {
                return;
            }
        });
    });
}

export default buttonlang;