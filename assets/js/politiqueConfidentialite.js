async function initPolitiqueConfidentialite() {
  const query = `*[_type == "politiqueConfidentialite"][0]{ titre, contenu }`;

  try {
    const data = await Sanity.fetchQuery(query);
    if (!data) return;

    const titreEl = document.getElementById('confidentialite-titre');
    if (titreEl && data.titre) titreEl.textContent = data.titre;

    const contenuEl = document.getElementById('confidentialite-contenu');
    if (contenuEl && Array.isArray(data.contenu)) {
      contenuEl.innerHTML = Sanity.renderPortableText(data.contenu);
    }
  } catch (err) {
    console.error('PolitiqueConfidentialite Sanity fetch failed:', err);
  }
}
