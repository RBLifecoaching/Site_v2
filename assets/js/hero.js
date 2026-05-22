async function initHero() {
  const query = `*[_type == "hero"][0]{
    tag, titre, motsEnCouleur,
    anaphore, sousTitre, boutonTexte, boutonLien, photo
  }`;
  try {
    console.log('[Hero] initHero() lancé');
    const data = await Sanity.fetchQuery(query);
    console.log('[Hero] données reçues :', data);
    if (!data) { console.warn('[Hero] data est null/undefined, abandon'); return; }
    const el = (id) => document.getElementById(id);
    const tagEl = el('hero-tag');
    if (tagEl) tagEl.textContent = data.tag || '';
    const subtitleEl = el('hero-subtitle');
    if (subtitleEl) subtitleEl.textContent = data.sousTitre || '';
    const titleEl = el('hero-title');
    if (titleEl && data.titre) {
      let html = Sanity.escapeHtml(data.titre);
      if (Array.isArray(data.motsEnCouleur)) {
        data.motsEnCouleur.forEach((mot) => {
          const escaped = Sanity.escapeHtml(mot).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          html = html.replace(
            new RegExp(`\\b${escaped}\\b`, 'g'),
            `<span class="hero-accent">${Sanity.escapeHtml(mot)}</span>`
          );
        });
      }
      titleEl.innerHTML = html;
    }
    const anaphoreEl = el('hero-anaphore');
    if (anaphoreEl && Array.isArray(data.anaphore)) {
      anaphoreEl.innerHTML = data.anaphore
        .map((p) => `<p>${Sanity.escapeHtml(p)}</p>`)
        .join('');
    }
    const ctaEl = el('hero-cta');
    if (ctaEl) {
      ctaEl.textContent = data.boutonTexte || '';
      ctaEl.href = data.boutonLien || '#';
      if (data.boutonLien && data.boutonLien.startsWith('http')) {
        ctaEl.target = '_blank';
        ctaEl.rel = 'noopener noreferrer';
      }
    }
    if (data.photo) {
      const photoEl = el('hero-photo');
      if (photoEl) {
        photoEl.src = Sanity.imageUrl(data.photo, { width: 800 });
        photoEl.alt = data.photo.alt || '';
      }
    }
  } catch (err) {
    console.error('Hero Sanity fetch failed:', err);
  }
}
