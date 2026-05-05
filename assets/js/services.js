async function initServices() {
  const query = `*[_type == "services"][0]{ titre, offres }`;

  try {
    const data = await Sanity.fetchQuery(query);
    if (!data) return;

    const el = (id) => document.getElementById(id);

    const titreEl = el('services-titre');
    if (titreEl) titreEl.textContent = data.titre || '';

    const gridEl = el('services-grid');
    if (!gridEl || !Array.isArray(data.offres)) return;

    gridEl.innerHTML = data.offres.map((offre) => {
      const isFeatured = offre.badge || (Array.isArray(offre.listeBenefices) && offre.listeBenefices.length);
      const cardClass = isFeatured ? 'service-card service-card--featured' : 'service-card';
      const iconClass = isFeatured ? 'service-icon service-icon--featured' : 'service-icon';

      const badge = offre.badge
        ? `<span class="service-card__badge">${Sanity.escapeHtml(offre.badge)}</span>` : '';

      const iconSrc = offre.icone ? Sanity.imageUrl(offre.icone, {width: 200}) : '';
      const iconAlt = offre.icone?.alt || '';
      const icon = iconSrc ? `<div class="${iconClass}"><img src="${iconSrc}" alt="${Sanity.escapeHtml(iconAlt)}" /></div>` : '';

      const body = Array.isArray(offre.listeBenefices) && offre.listeBenefices.length
        ? `<ul>${offre.listeBenefices.map((b) => `<li>${Sanity.escapeHtml(b)}</li>`).join('')}</ul>`
        : `<p>${Sanity.escapeHtml(offre.texte || '')}</p>`;

      const isExternal = offre.boutonLien && offre.boutonLien.startsWith('http');
      const btnClass = isFeatured ? 'cta-button cta-button--light' : 'cta-button';
      const btnTarget = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
      const btn = `<a href="${Sanity.escapeHtml(offre.boutonLien || '#')}" class="${btnClass}"${btnTarget}>${Sanity.escapeHtml(offre.boutonTexte || '')}</a>`;

      return `
        <div class="${cardClass}">
          ${badge}
          ${icon}
          <h3>${Sanity.escapeHtml(offre.titre || '')}</h3>
          ${body}
          ${btn}
        </div>`;
    }).join('');
  } catch (err) {
    console.error('Services Sanity fetch failed:', err);
  }
}
