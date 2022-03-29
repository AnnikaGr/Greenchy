import anime from "animejs/lib/anime.es.js";

function animate() {
  let barsEasing = "cubicBezier(0.24, 1.37, 0.46, 1)";

  // Green Bars
  let greenBars = document.querySelectorAll(".bar-green");
  let animateGreenBars = anime({
    targets: [].slice.call(greenBars, 0).reverse(),
    scaleY: [0, 1],
    easing: barsEasing,
    duration: 500,
    delay: anime.stagger(100),
    autoplay: true,
  });

  // Red Bars
  let redBars = document.querySelectorAll(".bar-red");
  let animateRedBars = anime({
    targets: [].slice.call(redBars, 0).reverse(),
    scaleY: [0, 1],
    easing: barsEasing,
    duration: 500,
    delay: anime.stagger(100, { start: 100 }),
    autoplay: true,
  });

  document.addEventListener("click", () => {
    animateGreenBars.play();
    animateRedBars.play();
  });
}

export default animate;
