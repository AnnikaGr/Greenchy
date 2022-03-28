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
    autoplay: false,
  });

  // Red Bars
  let redBars = document.querySelectorAll(".bar-red");
  let animateRedBars = anime({
    targets: [].slice.call(redBars, 0).reverse(),
    scaleY: [0, 1],
    easing: barsEasing,
    duration: 500,
    delay: anime.stagger(100, { start: 100 }),
    autoplay: false,
  });

  // Months
  let animateMonths = anime({
    targets: [".months", ".lines"],
    opacity: [0, 1],
    easing: "linear",
    duration: 500,
    delay: 150,
    autoplay: true,
  });

  document.addEventListener("click", () => {
    animateGreenBars.play();
    animateRedBars.play();
    animateMonths.play();
  });
}

export default animate;
