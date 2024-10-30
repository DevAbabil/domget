const domgetModuleSource = {
  From_Surge: "https://domget.surge.sh/js/v1.js",
  From_Vercel: "https://domget.vercel.app/js/v1.js",
  From_Netlify: "https://domget.netlify.app/js/v1.js",
};

const toast = (message) => {
  Toastify({
    text: message,
    duration: 3200,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
};

const codeHtml = Object.entries(domgetModuleSource)
  .map(([key, src]) => {
    return `
    <li class="domgetModuleSource mt-[10px] border p-1 bg-[rgba(var(--primary),0.07)] backdrop-blur-sm">
      <h2 class="font-bold">${key.split("_").join(" ")} :</h2>  
      <div class="relative">
          <pre><code class="whitespace-normal">
            &lt;script src="${src}"&gt;&lt;/script&gt;
          </code></pre>
          <button domgetModuleSource="${key}" type="button" class="copy_button absolute top-[10px] right-[10px] font-bold bg-[rgba(var(--primary),0.3)] text-[rgba(var(--mark),1)] px-[10px] py-[5px] text-xl rounded-md">
             <i class="fa-solid fa-copy"></i> 
          </button>
      </div>
    </li>
    `;
  })
  .join("");

const DOMgetModulSettimouteId = setTimeout(() => {
  $("#code_html").innerHTML = `<ol class="list-decimal">${codeHtml}</ol>`;
  copyButton();
  // reinitiate highlightjs after display domgetModuleSource list
  hljs.highlightAll();
  clearInterval(DOMgetModulSettimouteId);
}, 200);

const copyButton = () => {
  $(".copy_button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const button = e.target.localName !== "button" ? e.target.parentNode : e.target;

      const domgetSourceLink = `<script src="${domgetModuleSource[button.getAttribute("domgetModuleSource")]}"></script>`;

      copyToClipBoard(domgetSourceLink, button.getAttribute("domgetModuleSource").split("_").join(" "));
    });
  });
};

const copyToClipBoard = (value, context = "") => {
  const tempInput = document.createElement("input");
  tempInput.value = value;
  tempInput.select();
  navigator.clipboard.writeText(tempInput.value);
  toast(`Succesfully copied ${context}`);
};
