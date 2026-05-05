async function initSolution() {
  const query = `*[_type == "solution"][0]{
    titre, contenu, illustration
  }`;

  try {
    const data = await Sanity.fetchQuery(query);
    if (!data) return;

    const el = (id) => document.getElementById(id);

    const titreEl = el('solution-titre');
    if (titreEl) titreEl.textContent = data.titre || '';

    const contenuEl = el('solution-contenu');
    if (contenuEl && data.contenu) {
      contenuEl.innerHTML = Sanity.renderPortableText(data.contenu);
    }

    if (data.illustration) {
      const imgEl = el('solution-illustration');
      if (imgEl) {
        imgEl.src = Sanity.imageUrl(data.illustration, {width: 800});
        imgEl.alt = data.illustration.alt || '';
      }
    }
  } catch (err) {
    console.error('Solution Sanity fetch failed:', err);
  }
}
