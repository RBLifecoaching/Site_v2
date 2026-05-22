console.log("INTRO JS CHARGÉ");
(async function () {
  if (!window.Sanity) {
    console.error("Sanity non chargé");
    return;
  }
  try {
    const query = `*[_type == "intro"][0]{
      title,
      text
    }`;
    const intro = await window.Sanity.fetchQuery(query);
    console.log("Données intro:", intro);
    const container = document.getElementById("intro-placeholder");
    if (!intro || !container) return;
    container.innerHTML = `
      <section class="intro-text-section">
        <h2>${intro.title || ""}</h2>
        <p>${intro.text || ""}</p>
      </section>
    `;
  } catch (e) {
    console.error("Erreur intro:", e);
  }
})();
