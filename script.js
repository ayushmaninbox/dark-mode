document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('.input__check');
    if (localStorage.getItem('mode') === 'dark') {
        document.body.classList.add('dark-mode');
        checkbox.checked = true;
    } else {
        document.body.classList.add('light-mode');
    }

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            document.body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('mode', 'dark');
        } else {
            document.body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('mode', 'light');
        }
    });
});
