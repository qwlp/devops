document.addEventListener('DOMContentLoaded', function() {
    const sections = ['.header-image', '.contact-section'];
    let currentIndex = 0;

    // Set initial active section
    document.querySelector(sections[currentIndex]).classList.add('active');

    // Function to switch sections
    function switchSection() {
        // Remove active class from current section
        document.querySelector(sections[currentIndex]).classList.remove('active');
        
        // Update index
        currentIndex = (currentIndex + 1) % sections.length;
        
        // Add active class to next section
        document.querySelector(sections[currentIndex]).classList.add('active');
    }

    // Switch sections every 10 seconds
    setInterval(switchSection, 7000);
});
