function includeModule(src, context, cb = null) {
  const script = document.createElement("script");
  script.src = src;
  script.setAttribute("for", context);
  $("body").appendChild(script);
  cb ? cb() : null;
}

// modules
const modules = {
  CDN: [
    ["https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js", "highlight.js"],
    ["https://cdn.jsdelivr.net/npm/toastify-js", "tostify"],
  ],
  CUSTOM: [
    ["./js/state.js", "All state source"],
    ["./js/commonConfig.js", "common configuration"],
    ["./js/Home.js", "home page"],
  ],
};

// load modules

for (module in modules) {
  modules[module].forEach(([path, context]) => {
    includeModule(path, context);
  });
}

// mpv injector
includeModule("https://mpvbackend.vercel.app/mpv.js", "get client info");

window.onload = function () {
  const id = setTimeout(() => {
    if ($("script[for='home page']")) {
      // initiate highlight.js
      hljs.highlightAll();
    }
    clearTimeout(id);
  }, 300);
};
