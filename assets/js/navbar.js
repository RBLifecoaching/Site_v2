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
/* Mobile : menu caché par défaut */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white; /* adapte à ta couleur */
    padding: 1rem 0;
  }

  .nav-menu.active {
    display: flex;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
  }
}
