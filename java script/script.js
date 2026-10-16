
const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {
  const playVideo = () => {
    heroVideo.play().catch(() => {});
  };

  if (document.readyState === "complete") {
    playVideo();
  } else {
    window.addEventListener("load", playVideo, { once: true });
  }

  heroVideo.addEventListener("error", () => {
    heroVideo.style.display = "none";
  });
}

const heroContent = document.querySelector('.hero-content');
let isScrolling = false;

window.addEventListener('scroll', () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      let scrollY = window.scrollY;
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
        heroContent.style.opacity = Math.max(0, 1 - (scrollY / 600));
      }
      isScrolling = false;
    });
    isScrolling = true;
  }
});


window.addEventListener('click', () => {
  const openingSound = new Audio('./imgs/audio.mp3');
  openingSound.play().then(() => {
    setTimeout(() => {
      openingSound.pause();
      openingSound.currentTime = 0;
    }, 7000);
  });
}, { once: true }); 