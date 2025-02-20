// Selecionar elementos
const menuToggle = document.getElementById("menuToggle");
const menuLateral = document.getElementById("menuLateral");
const closeMenu = document.getElementById("closeMenu");

// Abrir o menu lateral ao clicar no botão hambúrguer
menuToggle.addEventListener("click", () => {
  menuLateral.classList.add("open");
});

// Fechar o menu lateral ao clicar no botão "X"
closeMenu.addEventListener("click", () => {
  menuLateral.classList.remove("open");
});
