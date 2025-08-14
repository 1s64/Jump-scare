// script.js

// Play audio after page load
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('audio');
    audio.play().catch(err => {
        console.log('Autoplay was blocked:', err);
    });
});
