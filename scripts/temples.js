document.addEventListener('DOMContentLoaded', function() {
    const currentYear = document.getElementById('currentyear');
    const lastModified = document.getElementById('lastModified');

    // display current year
    currentYear.textContent = new Date().getFullYear();

    lastModified.textContent = `Last Modification: ${document.lastModified}`;

    // humberger menu
    const menu = document.getElementById('menu');
    menu.addEventListener('click', function() {
        
        menu.classList.toggle('is-active');
    });
});