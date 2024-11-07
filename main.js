import "./style.css";
import "./src/external_modules/highlight.min.css";
import "toastify-js/src/toastify.css";
import { hljs } from "./src/external_modules/highlight.min";
import app from "./app";

export function renderDOM() {
  $("#root").innerHTML = /*html*/ `${app()}`;
}

// initial render
renderDOM();

// initiate highlight.js
hljs.highlightAll();
