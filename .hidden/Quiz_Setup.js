require(["base/js/namespace", "base/js/events"], function(Jupyter, events) {
    function disableCopyPaste() {
        // Prevent right-click context menu
        document.addEventListener("contextmenu", function(event) {
            event.preventDefault();
        });

        // Prevent copy event
        document.addEventListener("copy", function(e) {
            e.clipboardData.setData("text/plain", "Copy and Paste are disabled!");
            alert("Copying is disabled!");
            e.preventDefault();
        });

        // Prevent paste event
        document.addEventListener("paste", function(e) {
            alert("Pasting is disabled!");
            e.preventDefault();
        });

        // Hook into all CodeMirror instances (Jupyter's text editor)
        Jupyter.notebook.get_cells().forEach(cell => {
            if (cell.code_mirror) {
                cell.code_mirror.on("keydown", function(cm, e) {
                    if ((e.ctrlKey || e.metaKey) && (e.key === "c" || e.key === "v")) {
                        alert("Copy/Paste is disabled!");
                        e.preventDefault();
                    }
                });
            }
        });
}

    
// Apply when notebook is fully loaded
    events.on("notebook_loaded", disableCopyPaste);
    if (Jupyter.notebook._fully_loaded) {
        disableCopyPaste();
    }
});


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


// Disable Copy/paste (Right-Click Menu)
// document.addEventListener("contextmenu", function (event) {
//     event.preventDefault();
// });


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
