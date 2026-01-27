document.addEventListener('DOMContentLoaded', function() {
    const posts = document.querySelectorAll('.blog-post-card');
    
    posts.forEach((post, index) => {
        post.style.opacity = '0';
        post.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            post.style.transition = 'opacity 0.5s, transform 0.5s';
            post.style.opacity = '1';
            post.style.transform = 'translateY(0)';
        }, 150 * index);
    });
});