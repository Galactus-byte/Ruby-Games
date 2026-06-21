// Safe Initialization: Prevents crashes if the CDN script loads slowly
document.addEventListener("DOMContentLoaded", function() {
    try {
        if (typeof Lumin !== 'undefined') {
            Lumin.init({
                container: '#games-grid', 
                theme: 'dark'             
            });
            console.log("LuminSDK successfully initialized.");
        } else {
            console.error("LuminSDK script could not be reached. Checking fallback...");
            document.getElementById('games-grid').innerHTML = "<p style='color:white; padding:20px;'>Loading arcade framework... If this takes too long, check your connection.</p>";
        }
    } catch (error) {
        console.error("Initialization error:", error);
    }
});

// The core screen flipping mechanism (Always runs)
function toggleSecretPortal() {
    const decoy = document.getElementById('decoy-screen');
    const portal = document.getElementById('secret-portal');
    
    if (decoy && portal) {
        decoy.classList.toggle('hidden');
        portal.classList.toggle('hidden');
    }
}

// Global hotkeys listener
document.addEventListener('keydown', function(event) {
    // Press backtick key ` (under the Esc key) to flip screens
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
    location.reload(); 
}
