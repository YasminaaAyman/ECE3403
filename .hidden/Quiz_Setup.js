// Add to your existing code
const meta = document.createElement('meta');
meta.httpEquiv = "Content-Security-Policy";
meta.content = "script-src 'self' 'unsafe-inline';";
document.head.prepend(meta);

// -------------------------------------------------------------------------------------------------------

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

// -------------------------------------------------------------------------------------------------------

// Detect exit attempts and block unless the password is entered
function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function checkPasswordAndExit() {
    let password = "1234";  
    let userInput = prompt("Enter password to exit full screen:");
    if (userInput === password) {
        exitFullScreen();
    } else {
        alert("Incorrect password! You must enter the correct password to exit full screen.");
        go_fullscreen();  // Force re-entry into full-screen mode
    }
}

document.addEventListener("fullscreenchange", function () {
    if (!document.fullscreenElement) {
        checkPasswordAndExit();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        event.preventDefault();
        checkPasswordAndExit();
    }
});

// -------------------------------------------------------------------------------------------------------

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

// -------------------------------------------------------------------------------------------------------

// Disable copy-paste for the entire notebook
document.addEventListener('copy', function(e) {
    // Get selected text
    const selection = window.getSelection().toString();
    
    if (selection.length > 0) {
        // Modify the clipboard content
        e.preventDefault();
        
        // Write to clipboard
        e.clipboardData.setData('text/plain', `Copy is Disabled`);
    }
});

document.addEventListener('cut', function(e) {
    // Get selected text
    const selection = window.getSelection().toString();
    
    if (selection.length > 0) {
        // Modify the clipboard content
        e.preventDefault();
        
        // Write to clipboard
        e.clipboardData.setData('text/plain', `Cut is Disabled`);
    }
});

document.addEventListener('paste', function(e) {
    e.preventDefault();
    e.stopImmediatePropagation(); // Block all other handlers

    // e.clipboardData.setData('text/plain', `Copy is Disabled`);

    const selection = window.getSelection();
    
    if (selection.toString().length > 0) {
        selection.deleteFromDocument();
    }

    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode("Paste is Disabled"));
        
        // Move cursor after the inserted text
        selection.collapseToEnd();
    }
}, true);


// Disable Copy/paste (Right-Click Menu)
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

