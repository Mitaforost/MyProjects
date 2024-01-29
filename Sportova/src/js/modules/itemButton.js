const itemButton = (selector, params) => {
    const btns = document.querySelectorAll(selector);

    btns.forEach(function (btn) {
        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');

        svgElement.setAttribute('width', `${params.width}`);
        svgElement.setAttribute('height', `${params.height}`);
        useElement.setAttribute('href', params.path);
        svgElement.appendChild(useElement);
        btn.appendChild(svgElement);
        const position = params.position || 'after';

        // Вставка до или после текстового содержимого
        if (position === 'before') {
            btn.insertBefore(svgElement, btn.firstChild);
        } else if (position === 'after') {
            btn.appendChild(svgElement);
        } else {
            console.error('Invalid position value. Use "before" or "after".');
            return;
        }
        btn.addEventListener('mouseenter', () => {
            useElement.setAttribute('href', params.hoverPath || params.path || '');
        });

        btn.addEventListener('mouseleave', () => {
            useElement.setAttribute('href', params.path || '');
        });
    });
};

export default itemButton;
