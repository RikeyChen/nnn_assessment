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
  porkaliciousPotluck: {
    protein: 8,
    fat: 6,
    kcalPerKg: 1275,
  },
  heartlandBeefMash: {
    protein: 10,
    fat: 4.5,
    kcalPerKg: 1155,
  },
  chickenChowWow: {
    protein: 8.5,
    fat: 6,
    kcalPerKg: 1189,
  },
  tastyTurkeyFare: {
    protein: 10,
    fat: 5,
    kcalPerKg: 1372,
  },
};

function convertProtein(brand) {
  return Math.round((kibble[brand].protein + 1.5) / (kibble[brand].kcalPerKg / 10000));
}

function convertFat(brand) {
  return Math.round((kibble[brand].fat + 1) / (kibble[brand].kcalPerKg / 10000));
}

function convertCarb(brand) {
  const carbs = Math.round((1000 - (convertProtein(brand) * 3.5) - (convertFat(brand) * 8.5)) / 3.5);
  return carbs > 0 ? carbs : 0;
}

function calculateNutrition(e) {
  const type = e.target.name;
  const prodName = document.getElementsByClassName(type === 'other-brands' ? 'brand-name' : 'nnn-name')[0];
  const prodProtein = document.getElementsByClassName(type === 'other-brands' ? 'brand-protein' : 'nnn-protein')[0];
  const prodFat = document.getElementsByClassName(type === 'other-brands' ? 'brand-fat' : 'nnn-fat')[0];
  const prodCarb = document.getElementsByClassName(type === 'other-brands' ? 'brand-carb' : 'nnn-carb')[0];

  prodName.innerText = e.target.options[e.target.selectedIndex].innerText;
  prodProtein.innerText = convertProtein(e.target.value);
  prodFat.innerText = convertFat(e.target.value);
  prodCarb.innerText = convertCarb(e.target.value);
}

const brandDropdown = document.getElementsByName('other-brands')[0];
const nnnDropdown = document.getElementsByName('nnn-recipes')[0];

function displayResults() {
  const results = document.getElementsByClassName('results-container')[0];
  const directions = document.getElementsByClassName('nutrients-direction')[0].children;
  if (brandDropdown.value !== 'default' && nnnDropdown.value !== 'default') {
    results.style.display = 'block';
    directions[0].style.display = 'none';
    directions[1].innerText = 'See the the nutrient comparison below';
    directions[2].style.display = 'block';
  }
}

brandDropdown.addEventListener('change', (e) => {
  displayResults();
  calculateNutrition(e);
});

nnnDropdown.addEventListener('change', (e) => {
  displayResults();
  calculateNutrition(e);
});
