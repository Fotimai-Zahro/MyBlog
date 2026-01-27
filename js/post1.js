document.addEventListener('DOMContentLoaded', function() {
    const postContent = document.querySelector('.post-content');
    
    if (postContent) {
        postContent.style.opacity = '0';
        postContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            postContent.style.transition = 'opacity 0.6s, transform 0.6s';
            postContent.style.opacity = '1';
            postContent.style.transform = 'translateY(0)';
        }, 100);
    }
});