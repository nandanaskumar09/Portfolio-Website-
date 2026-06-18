window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 40) {
        navbar.style.top = '0px';
        navbar.style.width = '100%';
        navbar.style.maxWidth = '100%';
        navbar.style.borderRadius = '0px';
        navbar.style.background = 'rgba(7, 6, 20, 0.85)';
    } else {
        navbar.style.top = '20px';
        navbar.style.width = 'calc(100% - 40px)';
        navbar.style.maxWidth = '900px';
        navbar.style.borderRadius = '100px';
        navbar.style.background = 'rgba(16, 15, 36, 0.7)';
    }
});
