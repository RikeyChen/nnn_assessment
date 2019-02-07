// navbar - changes class name of elements to adjust styling
// when the hamburger menu icon is clicked
function displayNavbarMenu(e) {
  const navbarMenu = document.getElementsByClassName('navbar-menu')[0];
  const navbar = document.getElementsByClassName('navbar')[0];
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

// calculator

const kibble = {
  tasteWild: {
    protein: 32,
    fat: 18,
    kcalPerKg: 3719,
  },
  diamondNaturals: {
    protein: 25,
    fat: 15,
    kcalPerKg: 3600,
  },
  blueFreedom: {
    protein: 24,
    fat: 14,
    kcalPerKg: 3583,
  },
};

function convertProtein(brand) {
  return Math.round((kibble[brand].protein + 1.5) / (kibble[brand].kcalPerKg / 10000));
}

function convertFat(brand) {
  return Math.round((kibble[brand].fat + 1) / (kibble[brand].kcalPerKg / 10000));
}

function convertCarb(brand) {
  return Math.round((1000 - (convertProtein(brand) * 3.5) - (convertFat(brand) * 8.5)) / 3.5);
}

function calculateNutrition(e) {
  const brandProtein = document.getElementsByClassName('brand-protein')[0];
  const brandFat = document.getElementsByClassName('brand-fat')[0];
  const brandCarb = document.getElementsByClassName('brand-carb')[0];

  brandProtein.innerText = convertProtein(e.target.value);
  brandFat.innerText = convertFat(e.target.value);
  brandCarb.innerText = convertCarb(e.target.value);
}

const brandDropdown = document.getElementsByName('other-brands')[0];
brandDropdown.addEventListener('change', calculateNutrition);
