// Confetti Animation - Runs once on page load
(function() {
    // Check if confetti has already been shown
    if (sessionStorage.getItem('confettiShown')) {
        return; // Don't show again in this session
    }

    // Mark confetti as shown for this session
    sessionStorage.setItem('confettiShown', 'true');

    // Confetti colors
    const colors = ['#f5d021', '#8cc540', '#29aae2', '#ec469c'];

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
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';

        // Random color
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Random starting position (from sides)
        const fromLeft = Math.random() > 0.5;
        const startX = fromLeft ? -10 : window.innerWidth + 10;
        const endX = Math.random() * window.innerWidth;

        // Random size
        const size = Math.random() * 8 + 4; // 4-12px

        // Random rotation
        const rotation = Math.random() * 360;
        const rotationSpeed = Math.random() * 360 - 180; // -180 to 180

        // Random duration between 3-5 seconds
        const duration = Math.random() * 2 + 3;

        // Style the confetti
        confetti.style.position = 'absolute';
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.backgroundColor = color;
        confetti.style.top = '-20px';
        confetti.style.left = startX + 'px';
        confetti.style.borderRadius = '50%';
        confetti.style.opacity = '1';
        confetti.style.transform = `rotate(${rotation}deg)`;

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

            // Calculate position
            const currentX = startX + (endX - startX) * progress;
            const currentY = progress * (window.innerHeight + 20);
            const currentRotation = rotation + (rotationSpeed * progress * 360);
            const currentOpacity = 1 - (progress * 0.5); // Fade out slightly

            // Apply position
            confetti.style.left = currentX + 'px';
            confetti.style.top = currentY + 'px';
            confetti.style.transform = `rotate(${currentRotation}deg)`;
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
