async function initCommunauteCitation() {
  const query = `*[_type == "communauteCitation"][0]{ citation, auteur }`;

  try {
    const data = await Sanity.fetchQuery(query);
    if (!data) return;

    const citationEl = document.getElementById('com-citation');
    if (citationEl) citationEl.textContent = data.citation || '';

    const auteurEl = document.getElementById('com-citation-auteur');
    if (auteurEl) auteurEl.textContent = data.auteur || '';
  } catch (err) {
    console.error('CommunauteCitation Sanity fetch failed:', err);
  }
}
