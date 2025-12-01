window.addEventListener('load', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const burgerMenuButton = document.querySelector('.burger-menu__button');
  const burgerMenuList = document.querySelector('.burger-menu__list');

  burgerMenuButton.addEventListener('click', showHideMenu);

  function showHideMenu() {
    burgerMenuList.classList.toggle('burger-menu__list_displaying_showed');
    burgerMenu.classList.toggle('burger-menu_border_added');

    document.addEventListener('click', hideMenu);
  }

  function hideMenu(e) {
    let isTargetInside = burgerMenu.contains(e.target);
    if (!isTargetInside) {
      burgerMenuList.classList.remove('burger-menu__list_displaying_showed');
      burgerMenu.classList.remove('burger-menu_border_added');
    }
  }
});
