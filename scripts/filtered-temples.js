document.addEventListener('DOMContentLoaded', function () {
    const currentYear = document.getElementById('currentyear');
    const lastModified = document.getElementById('lastModified');

    currentYear.textContent = new Date().getFullYear();
    lastModified.textContent = `Last Modification: ${document.lastModified}`;

    const menuButton = document.querySelector('.menu-button');
    const menu = document.getElementById('menu');
    const menuList = menu.querySelector('ul');

    menuButton.addEventListener('click', function () {
        const isOpen = menuList.classList.toggle('is-active');
        menuButton.innerHTML = isOpen ? '&times;' : '&#9776;';
    });

    function adjustMenuVisibility() {
        if (window.innerWidth > 600) {
            menuList.style.display = '';
            menuButton.style.display = 'none';
        } else {
            menuList.style.display = 'none';
            menuButton.style.display = 'block';
        }
    }

    window.addEventListener('resize', adjustMenuVisibility);
    adjustMenuVisibility();


    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "San Juan Puerto Rico",
            location: "San Juan, Puerto Rico",
            dedicated: "2023, January, 15",
            area: 6988,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-juan-puerto-rico/400x250/san_juan_puerto_rico_temple_exterior.jpeg"
        },
        {
            templeName: "Twin Falls Idaho",
            location: "Twin Falls, Idaho, United States",
            dedicated: "2008, August, 24",
            area: 31245,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/twin-falls-idaho/800x500/twin-falls-temple-766327-wallpaper.jpg"
        },
        {
            templeName: "São Paulo Brazil",
            location: "São Paulo, Brazil",
            dedicated: "1978, October, 30",
            area: 80600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/800x500/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
        }
    ];

    function displayTemples(filter = "all") {
        const container = document.getElementById('temple-cards');
        container.innerHTML = '';

        temples
            .filter(temple => {
                switch (filter) {
                    case "old":
                        return new Date(temple.dedicated).getFullYear() < 1900;
                    case "new":
                        return new Date(temple.dedicated).getFullYear() > 2000;
                    case "large":
                        return temple.area > 90000;
                    case "small":
                        return temple.area < 10000;
                    default:
                        return true;
                }
            })
            .forEach(temple => {
                const card = document.createElement('div');
                card.className = 'temple-card';

                card.innerHTML = `
                <h2>${temple.templeName}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                `;

                container.appendChild(card);
            });
    }

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const filter = event.target.getAttribute('data-filter');
            displayTemples(filter);
        });
    });

    displayTemples();
});
