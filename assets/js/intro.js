console.log("INTRO JS CHARGÉ");
(async function () {
  if (!window.Sanity) {
    console.error("Sanity non chargé");
    return;
  }
  try {
    const query = `*[_type == "intro"][0]{
      title,
      paragraphes
    }`;
    const intro = await window.Sanity.fetchQuery(query);
    console.log("Données intro:", intro);
    const container = document.getElementById("intro-placeholder");
    if (!intro || !container) return;

    const paragraphesHTML = Array.isArray(intro.paragraphes)
      ? intro.paragraphes
          .map(p => `<p>${p.texte || ""}</p>`)
          .join("")
      : "";

    container.innerHTML = `
      <section class="intro-text-section">
        <h2>${intro.title || ""}</h2>
        <div class="intro-text">${paragraphesHTML}</div>
      </section>
    `;
  } catch (e) {
    console.error("Erreur intro:", e);
  }
})();
