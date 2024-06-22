document.addEventListener('DOMContentLoaded', function() {
    const currentYear = document.getElementById('currentyear');
    const lastModified = document.getElementById('lastModified');

    // display current year
    currentYear.textContent = new Date().getFullYear();

    lastModified.textContent = `Last Modification: ${document.lastModified}`;


  // humberger menu
  const menu = document.getElementById('menu');
  const menuButton = document.createElement('button');
  menuButton.innerHTML = '&#9776;'; // Hamburger Icon
  menuButton.classList.add('menu-button');
  document.querySelector('header').insertBefore(menuButton, menu);

  // menu click
  menuButton.addEventListener('click', function() {
      const isVisible = menu.style.display === 'block';
      menu.style.display = isVisible ? 'none' : 'block';
      menuButton.innerHTML = isVisible ? '&#9776;' : '&times;'; // Show "X" when menu is open
  });

  window.addEventListener('resize', function() {
      if (window.innerWidth > 600) {
          menu.style.display = 'block'; // Always display menu at 600px or more
          menuButton.style.display = 'none'; // menu button is hidden
      } else {
          menu.style.display = 'none'; // Hide menu at less than 600px
          menuButton.style.display = 'block'; // display menu button
      }
  });
});