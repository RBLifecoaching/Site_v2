async function initCommunauteEsprit() {
  const query = `*[_type == "communauteEsprit"][0]{
    titre, image, contenu, boutonTexte, boutonLien
  }`;

  try {
    const data = await Sanity.fetchQuery(query);
    if (!data) return;

    const titreEl = document.getElementById('com-esprit-titre');
    if (titreEl) titreEl.textContent = data.titre || '';

    if (data.image) {
      const imgEl = document.getElementById('com-esprit-img');
      if (imgEl) {
        imgEl.src = Sanity.imageUrl(data.image, {width: 800});
        imgEl.alt = data.image.alt || '';
      }
    }

    if (data.contenu) {
      const contenuEl = document.getElementById('com-esprit-contenu');
      if (contenuEl) {
        contenuEl.innerHTML = Sanity.renderPortableText(data.contenu);
        contenuEl.querySelectorAll('ul').forEach((ul) => ul.classList.add('checklist'));
      }
    }

    const ctaEl = document.getElementById('com-esprit-cta');
    if (ctaEl) {
      if (data.boutonTexte) ctaEl.textContent = data.boutonTexte;
      if (data.boutonLien) ctaEl.href = data.boutonLien;
    }
  } catch (err) {
    console.error('CommunauteEsprit Sanity fetch failed:', err);
  }
}
