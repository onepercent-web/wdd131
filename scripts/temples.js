document.addEventListener('DOMContentLoaded', function() {
    const currentYear = document.getElementById('currentyear');
    const lastModified = document.getElementById('lastModified');

    // display current year
    currentYear.textContent = new Date().getFullYear();
    lastModified.textContent = `Last Modification: ${document.lastModified}`;

    // humberger menu
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-button';
    menuButton.innerHTML = '&#9776;';  // Hamburger Icon
    const header = document.querySelector('header');
    header.appendChild(menuButton);

    const menu = document.getElementById('menu');
    const menuList = menu.querySelector('ul');

    // menu click
    menuButton.addEventListener('click', function() {
        menuList.classList.toggle('is-active');
        const isOpen = menuList.classList.contains('is-active');
        menuButton.innerHTML = isOpen ? '&times;' : '&#9776;';  // Toggle icon based on state
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 600) {
            menuList.style.display = 'flex';  // Always display menu at 600px or more
            menuButton.style.display = 'none';  // Menu button is hidden
        } else {
            menuList.style.display = 'none';  // Hide menu at less than 600px
            menuButton.style.display = 'block';  // Show menu button
        }
    });
});