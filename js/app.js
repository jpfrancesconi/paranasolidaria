const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const gradients = [
  "linear-gradient(to right top, #bf2e65, #cc5583)",
  "linear-gradient(to right top, #e8ba2f, #e4bd47)",
  "linear-gradient(to right top, #3fa9f5, #62b6f1)"
];

const options = {
  threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
  entries.forEach(entry =>{
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute('data-index');
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    };
    if(entry.isIntersecting){
      bubble.style.setProperty('left', `${directions.left}px`);
      bubble.style.setProperty('top', `${directions.top}px`);
      bubble.style.setProperty('height', `${directions.height}px`);
      bubble.style.setProperty('width', `${directions.width}px`);
      bubble.style.background = gradients[gradientIndex];
    }
  });
}

sections.forEach(section => {
  observer.observe(section);
});

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');

    // Aniamte Links
    navLinks.forEach((link, index)=> {
      if(link.style.animation){
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
  });
}

navSlide();

