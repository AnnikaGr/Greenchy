import anime from "animejs/lib/anime.es.js";

function animateBars() {
  let barsEasing = "cubicBezier(0.24, 1.37, 0.46, 1)";

  // Green Bars
  let bars = document.querySelectorAll(".bar-polygon");
  let animateGreenBars = anime({
    targets: [].slice.call(bars, 0).reverse(),
    scaleY: [0.01, 1],
    easing: 'easeInOutCubic',
    duration: 3000,
    delay: 100,
    autoplay: true,
  });
}

export default animateBars;
