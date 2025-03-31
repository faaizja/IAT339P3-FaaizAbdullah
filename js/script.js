document.addEventListener('DOMContentLoaded', function() {
    // Form accessibility enhancement
    const form = document.querySelector('.contact-form');
    if (form) {
        // Add keyboard accessibility for the form submit button
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.addEventListener('keydown', function(event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    submitButton.click();
                }
            });
        }
        
        // Simple form validation feedback
        form.addEventListener('submit', function(event) {
            // Prevent actual form submission for demo purposes
            event.preventDefault();
            
            // You would typically handle form submission via AJAX here
            // For demonstration, we'll just show a success message
            alert('Thanks for your message! In a real implementation, this would be sent to the server.');
            form.reset();
        });
    }
    
    // Typing animation
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        const titles = [
            'software developer',
            'game developer',
            'full stack software developer',
        ];
        let titleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100; // Default typing speed
        
        function typeTitle() {
            const currentTitle = titles[titleIndex];
            
            if (isDeleting) {
                // Erasing text
                typingElement.textContent = currentTitle.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50; // Faster when deleting
            } else {
                // Typing text
                typingElement.textContent = currentTitle.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100; // Normal speed when typing
            }
            
            // If finished typing the full word
            if (!isDeleting && charIndex === currentTitle.length) {
                isDeleting = true;
                typingSpeed = 1500; // Pause before starting to delete
            } 
            // If finished deleting
            else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                titleIndex = (titleIndex + 1) % titles.length; // Move to next title
                typingSpeed = 500; // Pause before typing next word
            }
            
            setTimeout(typeTitle, typingSpeed);
        }
        
        // Start the typing animation
        setTimeout(typeTitle, 1000);
    }
}); 