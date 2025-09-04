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
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('ver-mais');
    const extras = document.querySelectorAll('#grid-catalogo .extra');

    btn.addEventListener('click', () => {
        const mostrar = !extras[0].classList.contains('show');

        extras.forEach(item => item.classList.toggle('show', mostrar));

        btn.textContent = mostrar ? 'Ver menos' : 'Ver mais';
    });
});