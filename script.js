document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');

  btn.addEventListener('click', () => {
      for (let i = 0; i < 100; i++) {
          createConfetti();
      }
  });

  function createConfetti() {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');

      // Set random position and animation duration
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.backgroundColor = randomColor();
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's';

      document.body.appendChild(confetti);

      // Remove confetti after animation
      confetti.addEventListener('animationend', () => {
          confetti.remove();
      });
  }

  function randomColor() {
      const colors = ['#ff0000', '#0000ff', '#ffff00']; // Red, Blue, Yellow
      return colors[Math.floor(Math.random() * colors.length)];
  }
});
