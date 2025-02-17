document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentPage = window.location.pathname.split('/').pop();
    
    // Add active class to current page link
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    const button = document.querySelector('button');
    button.addEventListener('click', function() {
        alert('Welcome to DMU Cambodia Club DevOps!');
    });

    const headerLinks = document.querySelectorAll('header nav ul li a');
    headerLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent default behavior to avoid removing the header
            event.preventDefault();
            // Navigate to the target page
            window.location.href = this.href;
        });
    });
});
