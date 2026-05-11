async function initFooter() {
  const query = `*[_type == "footer"][0]{
    copyright, lienMentionsLegales, lienCgv, lienPolitiqueConfidentialite,
    lienRendezVous, lienLinkedIn, lienInstagram
  }`;

  try {
    const data = await Sanity.fetchQuery(query);
    if (!data) return;

    const el = (id) => document.getElementById(id);

    const copyrightEl = el('footer-copyright');
    if (copyrightEl) copyrightEl.textContent = data.copyright || '';

    const mentionsEl = el('footer-mentions');
    if (mentionsEl && data.lienMentionsLegales) mentionsEl.href = data.lienMentionsLegales;

    const cgvEl = el('footer-cgv');
    if (cgvEl && data.lienCgv) cgvEl.href = data.lienCgv;

    const confidentialiteEl = el('footer-confidentialite');
    if (confidentialiteEl && data.lienPolitiqueConfidentialite)
      confidentialiteEl.href = data.lienPolitiqueConfidentialite;

    const rdvEl = el('footer-rdv');
    if (rdvEl && data.lienRendezVous) rdvEl.href = data.lienRendezVous;

    const linkedinEl = el('footer-linkedin');
    if (linkedinEl && data.lienLinkedIn) linkedinEl.href = data.lienLinkedIn;

    const instagramEl = el('footer-instagram');
    if (instagramEl && data.lienInstagram) instagramEl.href = data.lienInstagram;
  } catch (err) {
    console.error('Footer Sanity fetch failed:', err);
  }
}
