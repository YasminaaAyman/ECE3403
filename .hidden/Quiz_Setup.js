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

try{
// Disable copy-paste for the entire notebook
const disableCopyPaste = (e) => {
  const isEditable = e.target.matches('input, textarea, [contenteditable="true"]');
  if (!isEditable) {
    e.preventDefault();
  }
};

document.addEventListener('copy', disableCopyPaste);
document.addEventListener('cut', disableCopyPaste);
document.addEventListener('paste', disableCopyPaste);

// Block keyboard shortcuts (Ctrl/Cmd + C/V/X)
document.addEventListener('keydown', (e) => {
  const ctrlOrCmd = e.ctrlKey || e.metaKey; // Works for both Ctrl (Windows) and Cmd (Mac)
  const isEditable = e.target.matches('input, textarea, [contenteditable="true"]');

  // Block Ctrl+C/Ctrl+V/Ctrl+X
  if (ctrlOrCmd && !isEditable) {
    if (e.key === 'c' || e.key === 'C' || e.key === 'v' || e.key === 'V' || e.key === 'x' || e.key === 'X') {
      e.preventDefault();
    }
  }
});


// Disable Copy/paste (Right-Click Menu)
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});
}
catch(error) {
    console.log('Security restrictions active:', error);
}
