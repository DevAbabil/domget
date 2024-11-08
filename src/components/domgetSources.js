import copyToClipBoard from "../utils/clipboard";

const domgetModuleSource = {
  From_Netlify: "https://domget.netlify.app/js/v1.js",
  From_Vercel: "https://domget.vercel.app/js/v1.js",
  From_Surge: "https://domget.surge.sh/js/v1.js",
};

const domgetSources = () => {
  const buttonId = setTimeout(() => {
    function copySourceHandler(e) {
      const button = e.localName !== "button" ? e.parentNode : e;
      const domgetSourceLink = `<script src="${domgetModuleSource[button.getAttribute("domgetModuleSource")]}"></script>`;
      copyToClipBoard(domgetSourceLink, `DOMget source ${button.getAttribute("domgetModuleSource").split("_").join(" ")}`);
    }

    if ($(".copybutton")) {
      $(".copybutton").forEach((button) => {
        button.addEventListener("click", () => {
          copySourceHandler(button);
        });
      });
    }

    clearTimeout(buttonId);
  }, 300);

  return /*html*/ ` 
  <ol class="list-decimal p-6">${Object.entries(domgetModuleSource)
    .map(([key, src]) => {
      return /*html*/ `
    <li class="domgetModuleSource mt-[10px] border p-1 bg-[rgba(var(--primary),0.04)] rounded-md backdrop-blur-sm">
      <h2 class="font-bold">${key.split("_").join(" ")} :</h2>  
      <div class="relative">
          <pre><code class="whitespace-normal">
            &lt;script src="${src}"&gt;&lt;/script&gt;
          </code></pre>
          <button domgetModuleSource="${key}" type="button" class="copybutton absolute top-[4px] right-[4px] font-bold bg-[rgba(var(--primary),0.3)] text-[rgba(var(--mark),1)] px-[10px] py-[5px] text-xl rounded-md"  >
            <i class="fa-solid fa-copy"></i> 
          </button>
      </div>
    </li>
    `;
    })
    .join("")}</ol>`;
};

export default domgetSources;
