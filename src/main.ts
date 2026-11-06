import "./style.css";

const app = document.querySelector<HTMLElement>("#app");

if (app) {
  app.innerHTML = `
    <section class="introduction" aria-labelledby="intro-title">
      <span class="eyebrow">For the love of the game</span>
      <h1 id="intro-title">Find your next great shot.</h1>
      <p class="summary">
        A home for basketball fans to discover the game, celebrate its moments,
        and get inspired to hit the court.
      </p>
      <div class="signature">
        <img src="/basketball.svg" width="36" height="36" alt="" />
        <span>Basketball starts here</span>
      </div>
    </section>
  `;
}
