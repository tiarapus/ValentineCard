document.addEventListener('DOMContentLoaded', () => {
    const valentineCard = document.getElementById('valentineCard');
    const loveButton = document.getElementById('loveButton');
    const loveSong = document.getElementById('loveSong');
    let heartInterval; 
  
    valentineCard.addEventListener('click', () => {
      valentineCard.classList.add('open');
    });
  
    loveButton.addEventListener('click', (e) => {
      e.stopPropagation(); 
  
      if (loveSong.paused) {
        loveSong.play();
  
        heartInterval = setInterval(pourHearts, 300); 
      }
    });
  
    loveSong.addEventListener('ended', () => {
      clearInterval(heartInterval); 
    });
  
    function pourHearts() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
  
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDelay = `${Math.random() * 0.5}s`;
      heart.style.transform = `translateY(-100px) scale(${Math.random() * 0.5 + 0.8}) rotate(${Math.random() * 360}deg)`;
  
      document.body.appendChild(heart);
  
      setTimeout(() => {
        heart.remove();
      }, 4000);
    }
  });
  