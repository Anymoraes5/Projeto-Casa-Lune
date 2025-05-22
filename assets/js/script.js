document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menu-lista a");
  const checkbox = document.getElementById("menu-toggle");

  links.forEach(link => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        checkbox.checked = false;
      }
    });
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