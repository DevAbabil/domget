import { hljs } from "../external_modules/highlight.min";
import { renderDOM } from "../../main";

const setState = (stateChanger) => {
  stateChanger();
  renderDOM();
  // reinitiate highlight.js
  hljs.highlightAll();
};

export default setState;
