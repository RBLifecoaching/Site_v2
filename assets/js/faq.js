async function initFaq() {
  const query = `*[_type == "faq"][0]{ titre, questions }`;

  try {
    const data = await Sanity.fetchQuery(query);
    if (!data) return;

    const el = (id) => document.getElementById(id);

    const titreEl = el('faq-titre');
    if (titreEl) titreEl.textContent = data.titre || '';

    const listeEl = el('faq-liste');
    if (!listeEl || !Array.isArray(data.questions)) return;

    listeEl.innerHTML = data.questions.map((q) => `
      <div class="faq-item">
        <details>
          <summary>${Sanity.escapeHtml(q.question || '')}</summary>
          <p>${Sanity.escapeHtml(q.reponse || '')}</p>
        </details>
      </div>`).join('');
  } catch (err) {
    console.error('FAQ Sanity fetch failed:', err);
  }
}
