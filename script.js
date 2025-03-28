document.addEventListener("DOMContentLoaded", () => {
    const toggleModeButton = document.getElementById("toggle-mode");
    const body = document.body;

    // Dark mode toggle
    toggleModeButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });

    // Fade-in animations on scroll
    const fadeInElements = document.querySelectorAll(".fade-in");
    
    const revealOnScroll = () => {
        fadeInElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementPosition < windowHeight - 50) {
                element.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Initial check
});
