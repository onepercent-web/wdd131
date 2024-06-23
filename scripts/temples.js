document.addEventListener('DOMContentLoaded', function() {
    const currentYear = document.getElementById('currentyear');
    const lastModified = document.getElementById('lastModified');

    // display current year and last modification
    currentYear.textContent = new Date().getFullYear();
    lastModified.textContent = `Last Modification: ${document.lastModified}`;

    
    const menuButton = document.querySelector('.menu-button');
    const menu = document.getElementById('menu');
    const menuList = menu.querySelector('ul');

    // Menu click event
    menuButton.addEventListener('click', function() {
        const isOpen = menuList.classList.toggle('is-active');
        menuButton.innerHTML = isOpen ? '&times;' : '&#9776;';  // Toggle icon based on state
    });

    // Adjust menu visibility based on window width
    function adjustMenuVisibility() {
        if (window.innerWidth > 600) {
            menuList.style.display = '';  // Reset to default
            menuButton.style.display = 'none';  // Hide hamburger button
        } else {
            menuList.style.display = 'none';  // Hide menu
            menuButton.style.display = 'block';  // Show hamburger button
        }
    }

    // Call adjust function on resize and on load
    window.addEventListener('resize', adjustMenuVisibility);
    adjustMenuVisibility();  // Call on initial load
});



