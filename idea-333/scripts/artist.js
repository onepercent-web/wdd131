document.getElementById('mobile-menu').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar ul');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
});
