async function initApproche() {
  const query = `*[_type == "approche"][0]{
    titre, sousTitre, piliers, titreResultats, resultats
  }`;

  try {
    const data = await Sanity.fetchQuery(query);
    if (!data) return;

    const el = (id) => document.getElementById(id);
    const pilierColors = ['turquoise', 'orange', 'primary'];

    const titreEl = el('approche-titre');
    if (titreEl) titreEl.textContent = data.titre || '';

    const sousTitreEl = el('approche-sous-titre');
    if (sousTitreEl) sousTitreEl.textContent = data.sousTitre || '';

    const piliersEl = el('approche-piliers');
    if (piliersEl && Array.isArray(data.piliers)) {
      piliersEl.innerHTML = data.piliers.map((p, i) => {
        const color = pilierColors[i] || 'turquoise';
        return `
          <div class="approche-pillar approche-pillar--${color}">
            <span class="approche-pillar__num">${Sanity.escapeHtml(p.numero)}</span>
            <h3>${Sanity.escapeHtml(p.titre)}</h3>
            <p>${Sanity.escapeHtml(p.texte)}</p>
          </div>`;
      }).join('');
    }

    const titreResultatsEl = el('approche-titre-resultats');
    if (titreResultatsEl) titreResultatsEl.textContent = data.titreResultats || '';

    const resultatsEl = el('approche-resultats');
    if (resultatsEl && Array.isArray(data.resultats)) {
      resultatsEl.innerHTML = data.resultats.map((r) => `
        <div class="approche-resultat">
          <span class="resultat-from">${Sanity.escapeHtml(r.avant)}</span>
          <span class="resultat-arrow">↓</span>
          <span class="resultat-to">${Sanity.escapeHtml(r.apres)}</span>
        </div>`).join('');
    }
  } catch (err) {
    console.error('Approche Sanity fetch failed:', err);
  }
}
