function displayNavbarMenu(e) {
  const navbarMenu = document.getElementsByClassName('navbar-menu')[0];
  const navbar = document.getElementsByClassName('navbar')[0];
  console.log(navbar.style);
  if (navbarMenu.className === 'navbar-menu') {
    navbar.className = 'navbar no-shadow';
    navbarMenu.className = 'navbar-menu open';
    for (let i = 0; i < e.currentTarget.children.length; i++) {
      e.currentTarget.children[i].className = 'hamburger-icon active';
    }
  } else {
    navbar.className = 'navbar';
    navbarMenu.className = 'navbar-menu';
    for (let i = 0; i < e.currentTarget.children.length; i++) {
      e.currentTarget.children[i].className = 'hamburger-icon';
    }
  }
}

const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
hamburgerMenu.addEventListener('click', displayNavbarMenu);
