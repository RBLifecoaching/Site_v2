async function initObservation() {
  const query = `*[_type == "observation"][0]{
    titre, situations, conclusionPhrases, conclusionMiseEnAvant, conclusionMots
  }`;

  try {
    const data = await Sanity.fetchQuery(query);
    if (!data) return;

    const el = (id) => document.getElementById(id);

    const titreEl = el('observation-titre');
    if (titreEl) titreEl.textContent = data.titre || '';

    const gridEl = el('observation-grid');
    if (gridEl && Array.isArray(data.situations)) {
      gridEl.innerHTML = data.situations
        .map((s) => `<div class="observation-item">${Sanity.escapeHtml(s)}</div>`)
        .join('');
    }

    const phrasesEl = el('observation-conclusion-phrases');
    if (phrasesEl && data.conclusionPhrases) {
      phrasesEl.innerHTML = data.conclusionPhrases
        .split('\n')
        .filter((l) => l.trim())
        .map((l) => `<p>${Sanity.escapeHtml(l)}</p>`)
        .join('');
    }

    const miseEnAvantEl = el('observation-mise-en-avant');
    if (miseEnAvantEl && data.conclusionMiseEnAvant) {
      let html = Sanity.escapeHtml(data.conclusionMiseEnAvant);
      if (Array.isArray(data.conclusionMots)) {
        data.conclusionMots.forEach((mot) => {
          const escaped = Sanity.escapeHtml(mot).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          html = html.replace(
            new RegExp(escaped, 'g'),
            `<strong>${Sanity.escapeHtml(mot)}</strong>`
          );
        });
      }
      miseEnAvantEl.innerHTML = html;
    }
  } catch (err) {
    console.error('Observation Sanity fetch failed:', err);
  }
}
