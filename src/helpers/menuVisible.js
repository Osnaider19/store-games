export function handelvisiblemenu(e) {
    const menu = document.querySelector(".menu__container");
    const layout = document.querySelector(".layout");
    layout.classList.toggle("layout-visible");
    menu.classList.toggle("menu-visible");
  }