import anime from "animejs/lib/anime.es.js";

function animateBars() {
  // Green Bars
  let bars = document.querySelectorAll(".bar-polygon");
  anime({
    targets: [].slice.call(bars, 0).reverse(),
    scaleY: [0.01, 1],
    easing: 'easeInOutCubic',
    duration: 3000,
    delay: 100,
    autoplay: true,
  });
}

export default animateBars;
