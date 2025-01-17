import loader from "./src/components/loader";
import { home } from "./src/pages/Home";
import setState from "./src/utils/setState";

const state = {
  loading: true,
};

const app = () => {
  return `
  <div>
    ${home()}
    ${loader(state.loading)}
  </div>`;
};

window.addEventListener("DOMContentLoaded", () => {
  let id = setTimeout(() => {
    setState(() => {
      state.loading = false;
    });
    /*remove overflow-hidden from html and body after loaded content*/
    {
      $("html").classList.remove("overflow-hidden");
      $("body").classList.remove("overflow-hidden");
    }
    clearTimeout(id);
  }, 1000);
});

export default app;
