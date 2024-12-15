// Animate media items on page load
window.onload = function() {
    gsap.from(".media-item", {
        duration: 0.8,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        ease: "power3.out"
    });
};

// Optional: Additional hover effects using GSAP
const mediaItems = document.querySelectorAll('.media-item');

mediaItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            scale: 1.05,
            duration: 0.3,
            ease: "power1.out"
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            scale: 1,
            duration: 0.3,
            ease: "power1.out"
        });
    });
});
