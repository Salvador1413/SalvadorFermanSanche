// Project card interaction for Salvador Ferman Sanchez's cybersecurity portfolio
document.addEventListener('DOMContentLoaded', function() {
    console.log("Projects.js loaded - Cybersecurity Portfolio");
    
    const projectCards = document.querySelectorAll('.project-card');
    console.log("Found " + projectCards.length + " cybersecurity project cards");
    
    // Function to close all project cards
    function closeAllCards() {
        projectCards.forEach(card => {
            card.classList.remove('active');
        });
    }
    
    // Add click event to each project card
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            console.log("Cybersecurity project card clicked: " + this.getAttribute('data-project'));
            
            // Prevent click on links from triggering card toggle
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                console.log("GitHub link clicked, not toggling card");
                return;
            }
            
            // Check if the card is already active
            const isActive = this.classList.contains('active');
            
            // Close all cards first
            closeAllCards();
            
            // If the card wasn't active, make it active
            if (!isActive) {
                this.classList.add('active');
                console.log("Cybersecurity project card activated: " + this.getAttribute('data-project'));
                
                // Track which project is being viewed (could be used for analytics)
                const projectName = this.getAttribute('data-project');
                if (projectName) {
                    console.log("User viewing project details: " + projectName);
                }
            } else {
                console.log("Cybersecurity project card deactivated");
            }
        });
    });
    
    // Add click event to document to close cards when clicking outside
    document.addEventListener('click', function(e) {
        // Check if click is outside any project card
        if (!e.target.closest('.project-card')) {
            closeAllCards();
            console.log("Clicked outside cybersecurity project cards, all closed");
        }
    });
    
    // Optional: Add animation when cards first load
    setTimeout(() => {
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('loaded');
            }, 100 * index);
        });
    }, 300);
});
