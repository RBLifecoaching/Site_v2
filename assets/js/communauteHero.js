async function initCommunauteHero() {
  const query = `*[_type == "communauteHero"][0]{
    titre, sousTitre, boutonTexte, boutonLien, image
  }`;

  try {
    const data = await Sanity.fetchQuery(query);
    if (!data) return;

    const titreEl = document.getElementById('com-hero-title');
    if (titreEl) titreEl.textContent = data.titre || '';

    const sousTitreEl = document.getElementById('com-hero-subtitle');
    if (sousTitreEl) sousTitreEl.textContent = data.sousTitre || '';

    const ctaEl = document.getElementById('com-hero-cta');
    if (ctaEl) {
      if (data.boutonTexte) ctaEl.textContent = data.boutonTexte;
      if (data.boutonLien) ctaEl.href = data.boutonLien;
    }

    if (data.image) {
      const imgEl = document.getElementById('com-hero-img');
      if (imgEl) {
        imgEl.src = Sanity.imageUrl(data.image, {width: 800});
        imgEl.alt = data.image.alt || '';
      }
    }
  } catch (err) {
    console.error('CommunauteHero Sanity fetch failed:', err);
  }
}
