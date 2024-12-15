// Placeholder for any JavaScript functionality
console.log("Download website loaded.");

// Animate main content on page load
window.onload = function() {
    gsap.from("main", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power3.out"
    });

    // Animate buttons on load
    gsap.from("a", {
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: "power3.out"
    });
};

// Optional: Button hover effect using GSAP
const buttons = document.querySelectorAll("a");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        gsap.to(button, {
            scale: 1.1,
            duration: 0.2,
            ease: "power1.out"
        });
    });

    button.addEventListener("mouseleave", () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.2,
            ease: "power1.out"
        });
    });
});