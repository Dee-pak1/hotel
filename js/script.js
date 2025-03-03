// Simple scroll effect for header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (this.window.scroll > 50) {
        header.classList.add('scrolled');
    } else {
    header.classList.remove('scrolled');
    }

});