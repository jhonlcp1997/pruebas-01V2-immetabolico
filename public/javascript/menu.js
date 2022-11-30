// *js solo para abrir el boton menu
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector("#header-center-right");

menu.onclick = () => {
  menu.classList.toggle('active');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('active');
  navbar.classList.remove('active');
}