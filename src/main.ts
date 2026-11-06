import "./style.css";

const app = document.querySelector<HTMLElement>("#app");

if (app) {
  const heading = document.createElement("h1");
  heading.textContent = "Hello world";
  const basketball = document.createElement("img");
  basketball.src = "./basketball.svg";
  basketball.alt = "Basketball";
  basketball.width = 30;
  basketball.height = 30;
  app.append(heading, basketball);
}
