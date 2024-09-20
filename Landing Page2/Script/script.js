document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section, .fade-in');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Adjust to determine when to trigger
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add class when in view
                observer.unobserve(entry.target); // Stop observing after it becomes visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section); // Observe each section
    });
});
