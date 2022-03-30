import anime from "animejs/lib/anime.es.js";

function animate() {
  let barsEasing = "cubicBezier(0.24, 1.37, 0.46, 1)";

  // Green Bars
  let greenBars = document.querySelectorAll(".bar-green");
  let animateGreenBars = anime({
    targets: [].slice.call(greenBars, 0).reverse(),
    scaleY: [0.1, 1],
    easing: barsEasing,
    duration: 2000,
    delay: 500,
    autoplay: true,
  });
}

export default animate;
