document.addEventListener('DOMContentLoaded', function() {
    const aboutContent = document.querySelector('.about-content');
    
    aboutContent.style.opacity = '0';
    aboutContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        aboutContent.style.transition = 'opacity 0.6s, transform 0.6s';
        aboutContent.style.opacity = '1';
        aboutContent.style.transform = 'translateY(0)';
    }, 100);
});