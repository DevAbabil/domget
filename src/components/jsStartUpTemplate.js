import copyToClipBoard from "../utils/clipboard";

const state = {
  jsSnippet: `console.log($("h2").innerText); // This is h2 tag
console.log($("ul li")); // NodeList(3) [li.first-item, li, li]
console.log($("#my_id").innerText); // Hello dear!
console.log($(".first-item").innerText); // I am Ababil
console.log($("[custom_attribute='atributeA']").innerText); // age 21`,
};

const jsStartUpTemplate = () => {
  const buttonId = setTimeout(() => {
    function copJShandler() {
      copyToClipBoard(state.jsSnippet, `JS Startup Template`);
    }
    if ($(".html-js-button")) {
      $(".html-js-button").addEventListener("click", () => {
        copJShandler();
      });
    }
    clearTimeout(buttonId);
  }, 300);

  return /*html*/ `
  <div class="mt-[20px] relative">
            <div class="font-bold text-xl">Inside your JavaScript file</div>
            <p class="mt-1">
              With DOMget library, you have to call a function
              <span class="font-bold">$("&lt;query selector&gt;")</span> and inside this function you have to provide a query selector string as a argument. After that, this function will return you to desired html element or a NodeList.
            </p>
            <div class="font-bold text-md text-[rgba(var(--primary),0.5)]">index.js</div>
            <div class="relative">
              <pre><code>console.log($("h2").innerText); // This is h2 tag
console.log($("ul li")); // NodeList(3) [li.first-item, li, li]
console.log($("#my_id").innerText); // Hello dear!
console.log($(".first-item").innerText); // I am Ababil
console.log($("[custom_attribute='atributeA']").innerText); // age 21      </code></pre>
              <button type="button" class="html-js-button absolute top-[5px] right-[4px] font-bold bg-[rgba(var(--primary),0.3)] text-[rgba(var(--mark),1)] px-[10px] py-[5px] text-xl rounded-md">
                <i class="fa-solid fa-copy"></i>
              </button>
            </div>
          </div>`;
};

export default jsStartUpTemplate;
