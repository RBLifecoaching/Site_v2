console.log("INTRO JS CHARGÉ");
(async function () {
      const query = `*[_type == "intro"][0]`

  const intro = await window.Sanity.fetchQuery(query);

  const container = document.getElementById("intro-placeholder");

  if (!intro || !container) return;

  container.innerHTML = `
    <section class="intro">
      <h2>${intro.title || ""}</h2>
      <p>${intro.text || ""}</p>
    </section>
  `;
})();
