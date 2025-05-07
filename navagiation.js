document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
        }
    });
    
    // Animate skill bars on scroll
    const progressBars = document.querySelectorAll('.progress-bar');
    
    if (progressBars.length > 0) {
        const animateSkills = function() {
            progressBars.forEach(bar => {
                const value = bar.getAttribute('data-value');
                if (isElementInViewport(bar) && !bar.classList.contains('animated')) {
                    bar.style.width = value + '%';
                    bar.classList.add('animated');
                }
            });
        };
        
        // Initial check
        animateSkills();
        
        // Check on scroll
        window.addEventListener('scroll', animateSkills);
    }
    
    // Helper function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Typing effect for hero section
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const phrases = ['Developer', 'Designer', 'Problem Solver', 'Tech Enthusiast'];
        let currentPhrase = 0;
        let currentChar = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function typeEffect() {
            const currentText = phrases[currentPhrase];
            
            if (isDeleting) {
                // Remove a character
                typingElement.textContent = currentText.substring(0, currentChar - 1);
                currentChar--;
                typingSpeed = 50;
            } else {
                // Add a character
                typingElement.textContent = currentText.substring(0, currentChar + 1);
                currentChar++;
                typingSpeed = 150;
            }
            
            // If word is complete, start deleting after delay
            if (!isDeleting && currentChar === currentText.length) {
                isDeleting = true;
                typingSpeed = 1000; // Pause at end of word
            } 
            // If deletion is complete, move to next word
            else if (isDeleting && currentChar === 0) {
                isDeleting = false;
                currentPhrase = (currentPhrase + 1) % phrases.length;
                typingSpeed = 500; // Pause before starting new word
            }
            
            setTimeout(typeEffect, typingSpeed);
        }
        
        // Start the typing effect
        setTimeout(typeEffect, 1000);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                hamburger.classList.remove('active');
                navbar.classList.remove('active');
            }
        });
    });
    
    // Form validation for contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            // Email validation
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && emailField.value.trim()) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(emailField.value)) {
                    isValid = false;
                    emailField.classList.add('error');
                }
            }
            
            if (isValid) {
                // Here you would typically send the form data to a server
                // For now, we'll just show a success message
                const formData = new FormData(contactForm);
                const formValues = Object.fromEntries(formData.entries());
                
                console.log('Form submitted:', formValues);
                
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
                
                contactForm.innerHTML = '';
                contactForm.appendChild(successMessage);
            }
        });
        
        // Remove error class on input
        contactForm.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', function() {
                this.classList.remove('error');
            });
        });
    }
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});
