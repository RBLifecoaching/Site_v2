async function initNewsletter() {
  const query = `*[_type == "newsletter"][0]{ titre, texte, boutonTexte, boutonLien }`;

  try {
    const data = await Sanity.fetchQuery(query);
    if (!data) return;

    const el = (id) => document.getElementById(id);

    const titreEl = el('newsletter-titre');
    if (titreEl) titreEl.textContent = data.titre || '';

    const texteEl = el('newsletter-texte');
    if (texteEl) texteEl.textContent = data.texte || '';

    const ctaEl = el('newsletter-cta');
    if (ctaEl) {
      ctaEl.textContent = data.boutonTexte || '';
      ctaEl.href = data.boutonLien || '#';
    }
  } catch (err) {
    console.error('Newsletter Sanity fetch failed:', err);
  }
}
