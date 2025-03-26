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


function disableCopyPaste() {
    // Prevent right-click context menu
    document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });

    // Prevent copy event
    document.addEventListener("copy", function(e) {
        e.clipboardData.setData("text/plain", "Copy and Paste are disabled!");
        e.preventDefault();
    });

    // Prevent paste event
    document.addEventListener("paste", function(e) {
        e.preventDefault();
    });

disableCopyPaste()


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
