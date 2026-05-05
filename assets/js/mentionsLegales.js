async function initMentionsLegales() {
  const query = `*[_type == "mentionsLegales"][0]{
    titre, adresse, email, telephone, siret, formeJuridique,
    creditsPhotos, creditsDev, dateMiseAJour
  }`;

  try {
    const data = await Sanity.fetchQuery(query);
    if (!data) return;

    const el = (id) => document.getElementById(id);

    const titreEl = el('ml-titre');
    if (titreEl) titreEl.textContent = data.titre || '';

    const adresseEl = el('ml-adresse');
    if (adresseEl) adresseEl.textContent = data.adresse ? `Adresse : ${data.adresse}` : '';

    const emailEl = el('ml-email');
    if (emailEl) emailEl.textContent = data.email ? `Email : ${data.email}` : '';

    const telEl = el('ml-telephone');
    if (telEl) telEl.textContent = data.telephone ? `Téléphone : ${data.telephone}` : '';

    const siretEl = el('ml-siret');
    if (siretEl) siretEl.textContent = data.siret ? `SIRET : ${data.siret}` : '';

    const formeEl = el('ml-forme');
    if (formeEl) formeEl.textContent = data.formeJuridique ? `Forme juridique : ${data.formeJuridique}` : '';

    const emailRgpdEl = el('ml-email-rgpd');
    if (emailRgpdEl) emailRgpdEl.textContent = data.email || '';

    const photosEl = el('ml-credits-photos');
    if (photosEl) photosEl.textContent = data.creditsPhotos || '';

    const devEl = el('ml-credits-dev');
    if (devEl) devEl.textContent = data.creditsDev || '';

    if (data.dateMiseAJour) {
      const dateEl = el('ml-date');
      if (dateEl) {
        const date = new Date(data.dateMiseAJour);
        dateEl.textContent = date.toLocaleDateString('fr-FR', {
          day: 'numeric', month: 'long', year: 'numeric'
        });
      }
    }
  } catch (err) {
    console.error('MentionsLegales Sanity fetch failed:', err);
  }
}
