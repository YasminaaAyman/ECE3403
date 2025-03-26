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
// document.addEventListener("keydown", function(e) {
//     if ((e.ctrlKey || e.metaKey) && (e.key === "c" || e.key === "v")) {
//         e.clipboardData.setData("text/plain", "Copy and Paste are disabled :)");
//         e.preventDefault();
//     }
// });

 // Disable direct copy event
document.addEventListener("copy", function(e) {
    e.clipboardData.setData("text/plain", "Copy and Paste are disabled :)");
    e.preventDefault();
});

// Disable direct paste event
document.addEventListener("paste", function(e) {
    alert("Pasting is disabled!");
    e.preventDefault();
});

// Disable Copy/paste (Right-Click Menu)
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});


// Wait until Jupyter Notebook is fully loaded and delete some buttons in toolbar
setTimeout(function () {
    document.querySelectorAll('.jp-ToolbarButtonComponent').forEach(el => {
        if (el.title === "Visit Binder repository" || el.title === "Link to this Binder" || 
            el.title === "Download visible" || el.title === "Save to browser storage" ||
            el.title === "Restore from browser storage" || el.title === "Notebook") {
            el.style.display = 'none';
        }
    });
}, 1000);






