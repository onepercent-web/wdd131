// effector.js

document.addEventListener("DOMContentLoaded", function () {
    const navbtn = document.getElementById("navbtn");
    const nav = document.querySelector(".nav");

    navbtn.addEventListener("click", function () {
        document.documentElement.classList.toggle("open");
    });
});



// Last Modified
const yearSpan = document.getElementById('currentyear');
const lastModifiedSpan = document.getElementById('lastModified');
yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = `Last modified: ${document.lastModified}`;
document.addEventListener('DOMContentLoaded', () => {


    // Local Storage for Favorites
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    const favoriteDisplay = document.getElementById('favorite-display');

    favoriteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const knobType = e.target.closest('.knob-card').dataset.type;
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            
            if (favorites.includes(knobType)) {
                favorites = favorites.filter(fav => fav !== knobType);
                e.target.textContent = '☆';
            } else {
                favorites.push(knobType);
                e.target.textContent = '★';
            }

            localStorage.setItem('favorites', JSON.stringify(favorites));
            displayFavorites(favorites);
        });
    });

    const displayFavorites = (favorites) => {
        if (favoriteDisplay) {
            favoriteDisplay.textContent = `Favorites: ${favorites.join(', ')}`;
        }
    }

    displayFavorites(JSON.parse(localStorage.getItem('favorites')) || []);

    // Image Hover Change
    const historyImages = document.querySelectorAll('.history-image');

    historyImages.forEach(img => {
        const originalSrc = img.src;
        const hoverSrc = img.dataset.hover;

        img.addEventListener('mouseover', () => {
            img.src = hoverSrc;
        });

        img.addEventListener('mouseout', () => {
            img.src = originalSrc;
        });
    });

    // Display Detailed Info on Knob Click
    const knobCards = document.querySelectorAll('.knob-card');
    const knobDetails = {
        "RATE": "This knob adjusts the speed of the effect. Turning it clockwise increases the speed of the effect, and turning it counterclockwise decreases the speed.",
        "CUT OFF": "This knob cuts specific frequency bands. Turning it clockwise cuts higher frequencies, and turning it counterclockwise cuts lower frequencies.",
        "TIME": "This knob adjusts the delay time of the effect. Turning it clockwise increases the delay time, and turning it counterclockwise decreases the delay time.",
        "FEED BACK": "This knob adjusts the feedback amount of the delay effect. Turning it clockwise increases the feedback, and turning it counterclockwise decreases the feedback.",
        "RATE": "This knob adjusts the speed of the effect. Turning it clockwise increases the speed of the effect, and turning it counterclockwise decreases the speed.",
        "CUT OFF": "This knob cuts specific frequency bands. Turning it clockwise cuts higher frequencies, and turning it counterclockwise cuts lower frequencies.",
        "TIME": "This knob adjusts the delay time of the effect. Turning it clockwise increases the delay time, and turning it counterclockwise decreases the delay time.",
        "FEED BACK": "This knob adjusts the feedback amount of the delay effect. Turning it clockwise increases the feedback, and turning it counterclockwise decreases the feedback.",
        "PITCH": "This knob adjusts the pitch. Turning it clockwise raises the pitch, and turning it counterclockwise lowers the pitch.",
        "DELAY": "This knob adjusts the delay time of the delay effect. Turning it clockwise increases the delay time, and turning it counterclockwise decreases the delay time.",
        "SPEED": "This knob adjusts the speed of the modulation effect. Turning it clockwise increases the speed, and turning it counterclockwise decreases the speed.",
        "DEPTH": "This knob adjusts the depth of the effect. Turning it clockwise increases the depth, and turning it counterclockwise decreases the depth.",
        "SPREAD": "This knob adjusts the width of the stereo field. Turning it clockwise widens the stereo field, and turning it counterclockwise narrows the stereo field.",
        "MIX": "This knob adjusts the balance between the dry signal and the effect signal. Turning it clockwise increases the effect signal, and turning it counterclockwise increases the dry signal.",
        "WAVE": "This knob selects the waveform. Turn the knob to select different waveforms.",
        "PUMP": "This knob adjusts the compression strength. Turning it clockwise increases the compression, and turning it counterclockwise decreases the compression.",
        "GAIN": "This knob adjusts the output signal volume. Turning it clockwise increases the volume, and turning it counterclockwise decreases the volume.",
        "LOW CUT": "This knob cuts low frequencies. Turning it clockwise cuts more low frequencies, and turning it counterclockwise cuts fewer low frequencies.",
        "HIGH CUT": "This knob cuts high frequencies. Turning it clockwise cuts more high frequencies, and turning it counterclockwise cuts fewer high frequencies.",
        "DRIVE": "This knob adjusts the amount of distortion. Turning it clockwise increases the distortion, and turning it counterclockwise decreases the distortion.",
        "TONE": "This knob adjusts the brightness of the sound. Turning it clockwise makes the sound brighter, and turning it counterclockwise makes the sound darker.",
        "LOW": "This knob adjusts the volume of the low frequencies. Turning it clockwise increases the low frequencies, and turning it counterclockwise decreases the low frequencies.",
        "HIGH": "This knob adjusts the volume of the high frequencies. Turning it clockwise increases the high frequencies, and turning it counterclockwise decreases the high frequencies.",
        "TYPE": "This knob selects the type of effect. Turn the knob to select different effect types.",
        "BASS": "This knob adjusts the volume of the bass frequencies. Turning it clockwise increases the bass frequencies, and turning it counterclockwise decreases the bass frequencies.",
        "MIDDLE": "This knob adjusts the volume of the mid frequencies. Turning it clockwise increases the mid frequencies, and turning it counterclockwise decreases the mid frequencies.",
        "TREBLE": "This knob adjusts the volume of the treble frequencies. Turning it clockwise increases the treble frequencies, and turning it counterclockwise decreases the treble frequencies.",
        "COLOR": "This knob adjusts the character of the effect's tone. Turning it clockwise changes the tone, and turning it counterclockwise returns it to its original state.",
        "REVEL": "This knob adjusts the amount of reverb. Turning it clockwise increases the reverb, and turning it counterclockwise decreases the reverb."
    };

    knobCards.forEach(card => {
        card.addEventListener('click', () => {
            const type = card.dataset.type;
            const detail = knobDetails[type] || "No details available.";
            card.querySelector('p').textContent = detail;
            card.classList.toggle('expanded');
        });
    });
});
