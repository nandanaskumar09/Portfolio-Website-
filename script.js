// Simple navbar scroll behavior
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
    }
});
