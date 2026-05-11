async function initCgv() {
  const query = `*[_type == "cgv"][0]{ titre, contenu }`;

  try {
    const data = await Sanity.fetchQuery(query);
    if (!data) return;

    const titreEl = document.getElementById('cgv-titre');
    if (titreEl && data.titre) titreEl.textContent = data.titre;

    const contenuEl = document.getElementById('cgv-contenu');
    if (contenuEl && Array.isArray(data.contenu)) {
      contenuEl.innerHTML = Sanity.renderPortableText(data.contenu);
    }
  } catch (err) {
    console.error('CGV Sanity fetch failed:', err);
  }
}
