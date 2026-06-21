// Initialize LuminSDK configuration options
document.addEventListener("DOMContentLoaded", function() {
    Lumin.init({
        container: '#games-grid', // Tells the SDK where to build the game engine
        theme: 'dark'             // Keeps the gaming panel dark and clean
    });
});

function toggleSecretPortal() {
    const decoy = document.getElementById('decoy-screen');
    const portal = document.getElementById('secret-portal');
    decoy.classList.toggle('hidden');
    portal.classList.toggle('hidden');
}

document.addEventListener('keydown', function(event) {
    // Press backtick key ` to flip between screens
    if (event.key === '`') {
        event.preventDefault();
        toggleSecretPortal();
    }
    // Emergency Panic: Escape completely resets back to Google Docs
    if (event.key === 'Escape') {
        panicMode();
    }
});

function panicMode() {
    // LuminSDK handles its own popups, so forcing a page reload completely purges playing frames
    location.reload(); 
}
