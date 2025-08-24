// Mobile menu functionality
var navLinks = document.getElementById("navLinks");

function showmenu() {
    navLinks.style.right = "0";
}

function hidemenu() {
    navLinks.style.right = "-200px";
}

// Make sure footer is visible on page load
document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('.footer');
    if (footer) {
        footer.style.opacity = '1';
        footer.style.transform = 'translateY(0)';
    }
});