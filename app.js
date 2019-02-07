function displayNavbarMenu(e) {
  const navbarMenu = document.getElementsByClassName('navbar-menu')[0];
  if (navbarMenu.className === 'navbar-menu') {
    navbarMenu.className = 'navbar-menu open';
    for (let i = 0; i < e.currentTarget.children.length; i++) {
      e.currentTarget.children[i].className = 'hamburger-icon active';
    }
  } else {
    navbarMenu.className = 'navbar-menu';
    for (let i = 0; i < e.currentTarget.children.length; i++) {
      e.currentTarget.children[i].className = 'hamburger-icon';
    }
  }
}

const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
hamburgerMenu.addEventListener('click', displayNavbarMenu);
