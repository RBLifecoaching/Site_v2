async function initCherche() {
  const query = `*[_type == "cherche"][0]{
    titrePasRecherche, listePasRecherche, titreRecherche, listeRecherche
  }`;

  try {
    const data = await Sanity.fetchQuery(query);
    if (!data) return;

    const el = (id) => document.getElementById(id);

    const titreNonEl = el('cherche-titre-non');
    if (titreNonEl) titreNonEl.textContent = data.titrePasRecherche || '';

    const listeNonEl = el('cherche-liste-non');
    if (listeNonEl && Array.isArray(data.listePasRecherche)) {
      listeNonEl.innerHTML = data.listePasRecherche
        .map((item) => `<li>${Sanity.escapeHtml(item)}</li>`)
        .join('');
    }

    const titreOuiEl = el('cherche-titre-oui');
    if (titreOuiEl) titreOuiEl.textContent = (data.titreRecherche || '').trim();

    const listeOuiEl = el('cherche-liste-oui');
    if (listeOuiEl && Array.isArray(data.listeRecherche)) {
      listeOuiEl.innerHTML = data.listeRecherche
        .map((item) => `<li>${Sanity.escapeHtml(item)}</li>`)
        .join('');
    }
  } catch (err) {
    console.error('Cherche Sanity fetch failed:', err);
  }
}
