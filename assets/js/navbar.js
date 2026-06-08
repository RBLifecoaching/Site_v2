async function initNavbar() {
  // ... ton code Sanity (garde-le tel quel)
}

function initBurger() {
  console.log('initBurger appelée');
  const burger = document.querySelector('.hamburger');
  const navMenu = document.getElementById('nav-menu');
  console.log('burger:', burger);
  console.log('navMenu:', navMenu);

  if (!burger || !navMenu) {
    console.warn('Burger ou nav-menu introuvable');
    return;
  }

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    burger.classList.toggle('active');
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      burger.classList.remove('active');
    });
  });
}
