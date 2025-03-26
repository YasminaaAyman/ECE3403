// Full Screen Mode
function go_fullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
}

go_fullscreen()


// Disable Copy/Paste (Keyboard Shortcut)
document.addEventListener("keydown", function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === "c" || e.key === "v")) {
        e.clipboardData.setData("text/plain", "Copy and Paste are disabled :)");
        e.preventDefault();
    }
});

// Disable Copy/paste (Right-Click Menu)
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});






