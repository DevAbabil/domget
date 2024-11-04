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
    return /*html*/ `
    <li class="domgetModuleSource mt-[10px] border p-1 bg-[rgba(var(--primary),0.07)] backdrop-blur-sm">
      <h2 class="font-bold">${key.split("_").join(" ")} :</h2>  
      <div class="relative">
          <pre><code class="whitespace-normal">
            &lt;script src="${src}"&gt;&lt;/script&gt;
          </code></pre>
          <button domgetModuleSource="${key}" type="button" class="copy_button absolute top-[4px] right-[4px] font-bold bg-[rgba(var(--primary),0.3)] text-[rgba(var(--mark),1)] px-[10px] py-[5px] text-xl rounded-md">
             <i class="fa-solid fa-copy"></i> 
          </button>
      </div>
    </li>
    `;
  })
  .join("");

const DOMgetModulSettimouteId = setTimeout(() => {
  $("#code_html").innerHTML = `<ol class="list-decimal p-6">${codeHtml}</ol>`;
  copyButton();
  // initiate highlightjs after display domgetModuleSource list
  hljs.highlightAll();
  clearInterval(DOMgetModulSettimouteId);
}, 200);

const copyButton = () => {
  $(".copy_button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const button = e.target.localName !== "button" ? e.target.parentNode : e.target;
      const domgetSourceLink = `<script src="${domgetModuleSource[button.getAttribute("domgetModuleSource")]}"></script>`;
      copyToClipBoard(domgetSourceLink, `DOMget source ${button.getAttribute("domgetModuleSource").split("_").join(" ")}`);
    });
  });
};

const copyToClipBoard = (value, context = "") => {
  const tempInput = document.createElement("textarea");
  tempInput.value = value;
  tempInput.select();
  navigator.clipboard.writeText(tempInput.value);
  toast(`Succesfully copied ${context}`);
};

const removeLoaderId = setTimeout(() => {
  $("#loader").remove();
  $("body").classList.remove("overflow-hidden");
  clearTimeout(removeLoaderId);
}, 1000);

$("#low_screen").classList.add("hidden");
window.addEventListener("resize", (e) => {
  if (e.currentTarget.innerWidth < 840) {
    $("#low_screen").classList.remove("hidden");
    $("body").classList.add("overflow-hidden");
  } else {
    $("body").classList.add("overflow-auto");
    $("#low_screen").classList.add("hidden");
    $("body").classList.remove("overflow-hidden");
  }
});

$("#index-js").addEventListener("click", () => {
  copyToClipBoard(
    `console.log($("h2").innerText); // This is h2 tag
console.log($("ul li")); // NodeList(3) [li.first-item, li, li]
console.log($("#my_id").innerText); // Hello dear!
console.log($(".first-item").innerText); // I am Ababil
console.log($("[custom_attribute='atributeA']").innerText); // age 21`,
    "index.js"
  );
});

$("#index-html").addEventListener("click", () => {
  copyToClipBoard(
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Manipulate DOM like dream 😊</title>
      </head>
      <body>

        <p id="my_id">Hello dear!</p>
        <h2>This is h2 tag</h2>
        <ul>
          <li class="first-item">I am Ababil</li>
          <li custom_attribute="atributeA">age 21</li>
          <li>JavaScript Programmer</li>
        </ul>

        <!-- include [DOMget source] before other script tags  -->
        <script src="https://domget.surge.sh/js/v1.js"></script>
        <script src="./index.js"></script>
      </body>
    </html>`,
    "index.html"
  );
});
