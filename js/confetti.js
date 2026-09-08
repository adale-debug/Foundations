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

    // Confetti shapes (slightly curved/twisted rectangles)
    const shapes = [
        'polygon(10% 0%, 100% 10%, 90% 100%, 0% 90%)', // Twisted rectangle 1
        'polygon(0% 10%, 90% 0%, 100% 90%, 10% 100%)', // Twisted rectangle 2
        'polygon(5% 0%, 100% 5%, 95% 100%, 0% 95%)',   // Slight curve 1
        'polygon(0% 5%, 95% 0%, 100% 95%, 5% 100%)',   // Slight curve 2
        'polygon(8% 0%, 100% 12%, 92% 100%, 0% 88%)'   // Twisted rectangle 3
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
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';

        // Random color
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Random shape
        const shape = shapes[Math.floor(Math.random() * shapes.length)];

        // Random starting position (from sides)
        const fromLeft = Math.random() > 0.5;
        const startX = fromLeft ? -10 : window.innerWidth + 10;

        // Random trajectory - shoots inward and across
        const shootDistance = window.innerWidth * (0.3 + Math.random() * 0.4); // 30-70% across screen
        const midX = fromLeft ? startX + shootDistance : startX - shootDistance;
        const endX = midX + (Math.random() * 100 - 50); // Slight drift at end

        // Random size (rectangles)
        const width = Math.random() * 8 + 6; // 6-14px
        const height = Math.random() * 12 + 8; // 8-20px

        // Random rotation
        const rotation = Math.random() * 360;
        const rotationSpeed = Math.random() * 720 - 360; // -360 to 360 (faster rotation)

        // Total duration 3-5 seconds, but shoot phase is much faster
        const totalDuration = Math.random() * 2 + 3;
        const shootDuration = 0.4; // 0.4 seconds to shoot out (fast!)
        const fallDuration = totalDuration - shootDuration;

        // Style the confetti
        confetti.style.position = 'absolute';
        confetti.style.width = width + 'px';
        confetti.style.height = height + 'px';
        confetti.style.backgroundColor = color;
        confetti.style.clipPath = shape; // Apply twisted rectangle shape
        confetti.style.top = '-20px';
        confetti.style.left = startX + 'px';
        confetti.style.opacity = '1';
        confetti.style.transform = `rotate(${rotation}deg)`;

        confettiContainer.appendChild(confetti);

        // Animate the confetti
        const startTime = Date.now();

        function animate() {
            const elapsed = (Date.now() - startTime) / 1000; // seconds

            if (elapsed >= totalDuration) {
                confetti.remove();
                return;
            }

            let currentX, currentY, progress;

            // Phase 1: Fast shoot out (first 0.4 seconds)
            if (elapsed < shootDuration) {
                progress = elapsed / shootDuration;
                // Ease-out curve for shoot
                const shootProgress = 1 - Math.pow(1 - progress, 3);
                currentX = startX + (midX - startX) * shootProgress;
                currentY = shootProgress * 150; // Only goes down 150px during shoot
            }
            // Phase 2: Slower fall (remaining time)
            else {
                const fallElapsed = elapsed - shootDuration;
                progress = fallElapsed / fallDuration;
                currentX = midX + (endX - midX) * progress;
                currentY = 150 + (progress * (window.innerHeight - 150 + 20)); // Continue falling from 150px
            }

            const currentRotation = rotation + (rotationSpeed * (elapsed / totalDuration) * 2);
            const currentOpacity = 1 - ((elapsed / totalDuration) * 0.5); // Fade out slightly

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
