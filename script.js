document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isOpen = button.getAttribute('aria-expanded') === 'true';
            const content = document.getElementById(button.getAttribute('aria-controls'));

            // Close all other open accordion items
            accordionButtons.forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
                const otherContent = document.getElementById(btn.getAttribute('aria-controls'));
                otherContent.style.maxHeight = null;
            });

            // Toggle the clicked item
            if (!isOpen) {
                button.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });

        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
});
