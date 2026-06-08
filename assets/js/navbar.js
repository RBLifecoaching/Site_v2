async function initNavbar() {
  const query = `*[_type == "navbar"][0]{
    logo, lienLogo, liens, boutonTexte, boutonLien
  }`;
  try {
    const data = await Sanity.fetchQuery(query);
    if (!data) return;
    const logoEl = document.getElementById('nav-logo');
    if (logoEl && data.lienLogo) logoEl.href = data.lienLogo;
    if (data.logo) {
      const logoImg = document.getElementById('nav-logo-img');
      if (logoImg) {
        logoImg.src = Sanity.imageUrl(data.logo, {height: 60});
        logoImg.alt = data.logo.alt || '';
      }
    }
    const menuEl = document.getElementById('nav-menu');
    if (menuEl && Array.isArray(data.liens)) {
      const linkEls = menuEl.querySelectorAll('a.nav-link:not(.cta-button)');
      data.liens.forEach((item, i) => {
        const el = linkEls[i];
        if (!el) return;
        el.textContent = item.titre || '';
        if (item.lien) el.href = item.lien;
      });
    }
    const ctaEl = document.getElementById('nav-cta');
    if (ctaEl) {
      if (data.boutonTexte) ctaEl.textContent = data.boutonTexte;
      if (data.boutonLien) ctaEl.href = data.boutonLien;
    }
  } catch (err) {
    console.error('Navbar Sanity fetch failed:', err);
  }
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
