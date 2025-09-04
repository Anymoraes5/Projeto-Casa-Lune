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
const wrapper = document.querySelector('.grid-mobile .carrossel-wrapper');
const items = document.querySelectorAll('.grid-mobile .carrossel-item');

let index = 0;

function slideNext() {
  index++;
  if (index >= items.length) index = 0;
  wrapper.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(slideNext, 2000);
//--------------------ver mais/catalogo------------------
const botao = document.getElementById("ver-mais");
const itensExtras = document.querySelectorAll("#grid-catalogo .extra");

botao.addEventListener("click", () => {
    itensExtras.forEach((item, index) => {
        setTimeout(() => {
            item.classList.toggle("show");
        }, index * 150); // cada item aparece 150ms depois do anterior
    });

    botao.textContent = botao.textContent === "Ver mais" ? "Ver menos" : "Ver mais";
});
//===========================fade=======================
const imgs = document.querySelectorAll("#fade-js .fade-img");
let current = 0;

function nextImage() {
  imgs[current].classList.remove("active");
  current = (current + 1) % imgs.length;
  imgs[current].classList.add("active");
}

imgs[0].classList.add("active"); // inicial
setInterval(nextImage, 3000); // troca a cada 3 segundos
