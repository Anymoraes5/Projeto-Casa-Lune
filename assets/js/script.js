const toggle = document.getElementById("menu-toggle");
const menu   = document.getElementById("menu-list");

// Abre/fecha menu ao clicar no hambúrguer
toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Fecha menu ao clicar em qualquer item
const links = menu.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

// -------------------campeão de vendasa----------------
const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-track article');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let index = 0;

  function updateCarousel() {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (index < slides.length - 1) index++;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) index--;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);