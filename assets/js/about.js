async function initAbout() {
  const query = `*[_type == "about"][0]{
    titre, photo, contenu, boutonTexte, boutonLien
  }`;

  try {
    const data = await Sanity.fetchQuery(query);
    if (!data) return;

    const el = (id) => document.getElementById(id);

    const titreEl = el('about-titre');
    if (titreEl) titreEl.textContent = data.titre || '';

    if (data.photo) {
      const photoEl = el('about-photo');
      if (photoEl) {
        photoEl.src = Sanity.imageUrl(data.photo, {width: 800});
        photoEl.alt = data.photo.alt || '';
      }
    }

    const contenuEl = el('about-contenu');
    if (contenuEl && data.contenu) {
      contenuEl.innerHTML = Sanity.renderPortableText(data.contenu);
      contenuEl.querySelectorAll('blockquote').forEach((bq) => {
        bq.classList.add('about-insight');
      });
    }

    const ctaEl = el('about-cta');
    if (ctaEl) {
      ctaEl.textContent = data.boutonTexte || '';
      ctaEl.href = data.boutonLien || '#';
    }
  } catch (err) {
    console.error('About Sanity fetch failed:', err);
  }
}
