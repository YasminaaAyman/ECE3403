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


document.addEventListener("DOMContentLoaded", function () {
    // Function to disable copying
    document.addEventListener("copy", function (event) {
        event.preventDefault();
        alert("Copying is disabled in this notebook.");
    });

    // Function to disable pasting
    document.addEventListener("paste", function (event) {
        event.preventDefault();
        alert("Pasting is disabled in this notebook.");
    });

    // Function to disable cut (optional)
    document.addEventListener("cut", function (event) {
        event.preventDefault();
        alert("Cutting is disabled in this notebook.");
    });
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
