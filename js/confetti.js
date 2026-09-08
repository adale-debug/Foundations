// Confetti Animation - Runs once on page load
(function() {
    // Check if confetti has already been shown
    if (sessionStorage.getItem('confettiShown')) {
        return; // Don't show again in this session
    }

    // Mark confetti as shown for this session
    sessionStorage.setItem('confettiShown', 'true');

    // Confetti icon images
    const icons = [
        'Images/Fly Icon.png',
        'Images/Grow Icon.png',
        'Images/Heart Icon.png',
        'Images/Team Icon.png',
        'Images/Best Icon.png'
    ];

    // Create confetti container
    const confettiContainer = document.createElement('div');
    confettiContainer.id = 'confetti-container';
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '9999';
    confettiContainer.style.overflow = 'hidden';
    document.body.appendChild(confettiContainer);

    // Function to create a single confetti piece
    function createConfetti() {
        const confetti = document.createElement('img');
        confetti.className = 'confetti-piece';

        // Random icon
        const icon = icons[Math.floor(Math.random() * icons.length)];
        confetti.src = icon;

        // Random starting position (from top corners)
        const fromLeft = Math.random() > 0.5;
        const startX = fromLeft ? 0 : window.innerWidth;
        const startY = 0; // Start from top of screen
        const endX = Math.random() * window.innerWidth;

        // Tiny size - between 15px and 30px
        const size = Math.random() * 15 + 15; // 15-30px

        // Random duration between 3-5 seconds
        const duration = Math.random() * 2 + 3;

        // Style the confetti
        confetti.style.position = 'absolute';
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.top = startY + 'px';
        confetti.style.left = startX + 'px';
        confetti.style.opacity = '1';
        confetti.style.objectFit = 'contain';

        confettiContainer.appendChild(confetti);

        // Animate the confetti
        const startTime = Date.now();

        function animate() {
            const elapsed = (Date.now() - startTime) / 1000; // seconds
            const progress = elapsed / duration;

            if (progress >= 1) {
                confetti.remove();
                return;
            }

            // Calculate position (original animation - side to side, falling down)
            const currentX = startX + (endX - startX) * progress;
            const currentY = progress * (window.innerHeight + 50);
            const currentOpacity = 1 - (progress * 0.5); // Fade out slightly

            // Apply position (no rotation)
            confetti.style.left = currentX + 'px';
            confetti.style.top = currentY + 'px';
            confetti.style.opacity = currentOpacity;

            requestAnimationFrame(animate);
        }

        animate();
    }

    // Create confetti pieces
    const confettiCount = 50; // Number of confetti pieces
    for (let i = 0; i < confettiCount; i++) {
        // Stagger the creation slightly
        setTimeout(() => {
            createConfetti();
        }, Math.random() * 1000);
    }

    // Remove container after 6 seconds
    setTimeout(() => {
        confettiContainer.remove();
    }, 6000);
})();
