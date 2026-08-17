// Grab elements
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseMessage = document.getElementById('surpriseMessage');
const effectsLayer = document.getElementById('effectsLayer');

// Colors for confetti pieces
const confettiColors = ['#ff9fd6', '#c58bff', '#ffd1ec', '#e0b3ff', '#ff6fb5', '#ffffff'];

// Heart emojis for the burst
const heartEmojis = ['💖', '💕', '💗', '💓', '💜', '❤️'];

surpriseBtn.addEventListener('click', () => {
  // Show the surprise message
  surpriseMessage.classList.add('show');

  // Trigger effects
  launchConfetti();
  launchHeartBurst();

  // Little bounce feedback on the button
  surpriseBtn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    surpriseBtn.style.transform = '';
  }, 150);
});

// ---------- Confetti ----------
function launchConfetti() {
  const pieceCount = 60;

  for (let i = 0; i < pieceCount; i++) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');

    const size = Math.random() * 8 + 6; // 6px - 14px
    const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    const left = Math.random() * 100; // vw
    const duration = Math.random() * 2 + 2.5; // 2.5s - 4.5s
    const delay = Math.random() * 0.5;

    piece.style.width = `${size}px`;
    piece.style.height = `${size * 0.4}px`;
    piece.style.backgroundColor = color;
    piece.style.left = `${left}vw`;
    piece.style.animationDuration = `${duration}s`;
    piece.style.animationDelay = `${delay}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;

    effectsLayer.appendChild(piece);

    // Clean up after animation finishes
    setTimeout(() => {
      piece.remove();
    }, (duration + delay) * 1000 + 200);
  }
}

// ---------- Heart burst around the screen ----------
function launchHeartBurst() {
  const heartCount = 22;

  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('span');
    heart.classList.add('burst-heart');
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    const left = Math.random() * 100; // vw
    const top = Math.random() * 70 + 15; // vh, keep away from very top/bottom
    const duration = Math.random() * 1.5 + 1.8; // 1.8s - 3.3s
    const delay = Math.random() * 0.6;
    const size = Math.random() * 1.2 + 1.2; // 1.2rem - 2.4rem

    heart.style.left = `${left}vw`;
    heart.style.top = `${top}vh`;
    heart.style.fontSize = `${size}rem`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `${delay}s`;

    effectsLayer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, (duration + delay) * 1000 + 200);
  }
}
