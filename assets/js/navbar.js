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
  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('#nav-menu a');

  if (!burger || !navMenu) {
    console.warn('Burger ou nav-menu introuvable');
    return;
  }

  // Ouvre/ferme le menu au clic sur le burger
  burger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    burger.classList.toggle('active');
  });

  // Ferme le menu quand on clique sur un lien
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      burger.classList.remove('active');
    });
  });
}
