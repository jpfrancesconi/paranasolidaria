const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburguer = document.querySelector('.hamburguer');
const headline = document.querySelector('.headline');
const letters = document.querySelector('.letters');

const tl = new TimelineMax();

tl.fromTo(
  hero,
  1,
  { height: "0%" },
  { height: "90%", ease: Power2.easeInOut }
)
/*.fromTo(
  hero,
  1.2,
  { width: "100%" },
  { width: "80%", ease: Power3.easeInOut }
)
.fromTo(
  slider,
  1.2,
  { x: "-100%" },
  { x: "0", ease: Power2.easeInOut },
  "-=1.2"
)*/
.fromTo(
  logo,
  0.5,
  { opacity: 0, x: 30 },
  { opacity: 1, x: 0 },
  "-=0.5"
)
.fromTo(
  hamburguer,
  0.5,
  { opacity: 0, x: -30 },
  { opacity: 1, x: 0 },
  "-=0.5"
)
.fromTo(
  headline,
  0.5,
  { opacity: 0, x: -1000 },
  { opacity: 1, x: -100 },
  "-=0.5"
)
.fromTo(
  letters,
  5,
  { color: "white" },
  { color: "orange" },
  "-=0.5"
);
