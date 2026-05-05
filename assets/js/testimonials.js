async function initTestimonials() {
  const query = `*[_type == "testimonials"][0]{ titre, temoignages }`;

  try {
    const data = await Sanity.fetchQuery(query);
    if (!data) return;

    const el = (id) => document.getElementById(id);

    const titreEl = el('testimonials-titre');
    if (titreEl) titreEl.textContent = data.titre || '';

    const gridEl = el('testimonials-grid');
    if (!gridEl || !Array.isArray(data.temoignages)) return;

    gridEl.innerHTML = data.temoignages.map((t) => {
      const photo = t.photo
        ? `<img src="${Sanity.imageUrl(t.photo, {width: 80, height: 80, fit: 'crop'})}" alt="${Sanity.escapeHtml(t.photo.alt || t.prenom)}" class="testimonial-photo" />`
        : '';
      return `
        <div class="testimonial-card">
          ${photo}
          <p>${Sanity.escapeHtml(t.texte || '')}</p>
          <h4>- ${Sanity.escapeHtml(t.prenom || '')}</h4>
        </div>`;
    }).join('');
  } catch (err) {
    console.error('Testimonials Sanity fetch failed:', err);
  }
}
