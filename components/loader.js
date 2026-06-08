async function loadComponent(name, targetId) {
  try {
    const res = await fetch(`components/${name}.html`, { cache: "no-cache" });
    if (!res.ok) throw new Error(`Failed to load ${name}`);
    const target = document.getElementById(targetId);
    if (target) target.innerHTML = await res.text();
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const components = [
    { name: "header", target: "header-placeholder" },
    { name: "hero", target: "hero-placeholder" },
    { name: "observation", target: "observation-placeholder" },
    { name: "cherche", target: "cherche-placeholder" },
    { name: "about", target: "about-placeholder" },
    { name: "solution", target: "solution-placeholder" },
    { name: "approche", target: "approche-placeholder" },
    { name: "services", target: "services-placeholder" },
    { name: "testimonials", target: "testimonials-placeholder" },
    { name: "faq", target: "faq-placeholder" },
    { name: "newsletter", target: "newsletter-placeholder" },
    { name: "footer", target: "footer-placeholder" },
  ];

  for (const c of components) {
    await loadComponent(c.name, c.target);
  }

  if (typeof initNavbar === "function") await initNavbar();
  if (typeof initBurger === "function") initBurger(); // ← ajoute cette ligne
  if (typeof initHero === "function") await initHero();
  if (typeof initObservation === "function") await initObservation();
  if (typeof initCherche === "function") await initCherche();
  if (typeof initAbout === "function") await initAbout();
  if (typeof initSolution === "function") await initSolution();
  if (typeof initApproche === "function") await initApproche();
  if (typeof initServices === "function") await initServices();
  if (typeof initTestimonials === "function") await initTestimonials();
  if (typeof initFaq === "function") await initFaq();
  if (typeof initNewsletter === "function") await initNewsletter();
  if (typeof initFooter === "function") await initFooter();
  if (typeof initializeApp === "function") initializeApp();
  if (typeof typeHeroTitle === "function") typeHeroTitle();
});
