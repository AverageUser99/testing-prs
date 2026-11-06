import "./style.css";

const app = document.querySelector<HTMLElement>("#app");

if (app) {
  const heading = document.createElement("h1");
  heading.textContent = "Hello world";
  const text = document.createElement("p");
  text.textContent = "test";
  app.append(heading, text);
}
