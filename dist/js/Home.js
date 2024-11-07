function renderDOM() {
  $("#root").innerHTML = /*html*/ `
  <main>
    <div id="loader" class="absolute z-10 h-screen w-full max-w-full top-0 left-0 bg-[white] flex  justify-center items-center flex-col gap-y-[2px]">
      <div class="size-[70px] md:size-[100px] border-t-[4px] border-b-[4px] border-[rgba(var(--text))] rounded-full spin-loader"></div>
      <div class="text-2xl font-bold text-[rgba(var(--text),1)]">Loading...</div>
    </div>
    <div>
      <div class="fixed inset-0 -z-10 h-full w-full bg-[rgba(var(--primary),0.05)] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
    </div>
      <div class="container mx-auto my-0">
        <div class="text-center">
          <ul class="inline-flex items-center gap-x-2 my-[10px]">
            <li>
              <a href="/">
                <div class="size-[35px] select-none">
                  <img src="./images/favicon.png" alt="DOMget logo" class="max-w-full h-auto" />
                </div>
              </a>
            </li>
            <li>
              <a href="https://gitfront.io/r/devababil/rnjMhmwDqds7/domget/" target="_blank" class="text-2xl"
                ><span><i class="fa-brands fa-github"></i></span
              ></a>
            </li>
            <li>
              <a href="https://devababil.com" target="_blank" class="text-2xl select-none">❤️</a>
            </li>
          </ul>
        </div>
        <div class="w-[785px] max-w-full mx-auto mt-[20px] py-0 px-[10px]">
          <div class="mt-[20px] relative">
            <div class="font-bold text-xl md:text-2xl">
              <span class="text-[#ff0000e1]"><i class="fa-solid fa-triangle-exclamation"></i></span>
              Instead of doing these
            </div>
            <div class="max-w-full p-10px">
              <pre class="relative"><code class="whitespace-pre">let myId = document.getElementById();
let myClass = document.getElementsByClassName();
let myName = document.getElementsByName();
let myTag = document.getElementsByTagName();
let mySVG = document.getElementsByTagNameNS();
let myElement = document.querySelector();
let myElements = document.querySelectorAll();</code></pre>
            </div>
          </div>
          <div class="mt-[20px] relative">
            <div class="font-bold text-xl md:text-2xl">
              <span class="text-[#09ff00e1]"><i class="fa-solid fa-check"></i></span>
              Go with <span class="text-pink-500">KISS 😘</span>
              <span class="text-[#8080802a] select-none italic">Keep It Simple Stupid</span>
            </div>
            <pre class="relative"><code class="whitespace-pre">let allInOne = $("&lt;Your Query Selector&gt;");</code></pre>
          </div>
          <div class="mt-[25px]">
            <h1 class="font-bold text-2xl md:text-4xl text-center">So, what is <span class="text-red-600">DOMget</span>?</h1>
            <p class="mt-2"><span class="font-bold">DOMget</span> is a simple javascript library. that can help you to geting HTML element from html file to your JavaScript file. If you use DOMget library, you do not need to use others DOM method anymore.</p>
          </div>
          <div class="mt-[25px]">
            <h1 class="font-bold text-2xl md:text-4xl text-center">How to use?</h1>
            <p class="mt-2">
              First you need to include
              <span class="text-[rgba(var(--primary))] font-bold">DOMget source</span>
              inside your
              <span class="text-[rgba(var(--primary))] font-bold">HTML</span>
              file.
            </p>
            <div class="font-bold text-md text-[rgba(var(--primary),0.5)]">Use any of these ⬇️</div>
            <div>
            <ol class="list-decimal p-6">${Object.entries(domgetModuleSource)
              .map(([key, src]) => {
                return /*html*/ `
                <li class="domgetModuleSource mt-[10px] border p-1 bg-[rgba(var(--primary),0.04)] rounded-md backdrop-blur-sm">
                  <h2 class="font-bold">${key.split("_").join(" ")} :</h2>  
                  <div class="relative">
                      <pre><code class="whitespace-normal">
                        &lt;script src="${src}"&gt;&lt;/script&gt;
                      </code></pre>
                      <button domgetModuleSource="${key}" type="button" class="absolute top-[4px] right-[4px] font-bold bg-[rgba(var(--primary),0.3)] text-[rgba(var(--mark),1)] px-[10px] py-[5px] text-xl rounded-md" onclick="copySourceHandler(this)">
                        <i class="fa-solid fa-copy"></i> 
                      </button>
                  </div>
                </li>
                `;
              })
              .join("")}</ol>
            </div>
            <div class="mt-[17px] text-[brown]">
              <span class="text-[#ff2525]"><i class="fa-solid fa-triangle-exclamation"></i></span>
              You must have to include [DOMget source] before all the other script tags. Or, before your own &lt;script.js&gt; file sources.
            </div>
          </div>
          <div class="mt-[20px] relative">
            <div class="font-bold text-xl">HTML startup template</div>
            <div class="font-bold text-md text-[rgba(var(--primary),0.5)]">index.html</div>
            <div class="relative">
              <pre class="relative"><code class="whitespace-pre" id="html-starter-template">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;Manipulate DOM like dream 😊&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;

    &lt;p id=&quot;my_id&quot;&gt;Hello dear!&lt;/p&gt;
    &lt;h2&gt;This is h2 tag&lt;/h2&gt;
    &lt;ul&gt;
      &lt;li class=&quot;first-item&quot;&gt;I am Ababil&lt;/li&gt;
      &lt;li custom_attribute=&quot;atributeA&quot;&gt;age 21&lt;/li&gt;
      &lt;li&gt;JavaScript Programmer&lt;/li&gt;
    &lt;/ul&gt;

    &lt;!-- include [DOMget source] before other script tags  --&gt;
    &lt;script src=&quot;https://domget.surge.sh/js/v1.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;./index.js&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
              <button type="button" class="absolute top-[5px] right-[4px] font-bold bg-[rgba(var(--primary),0.3)] text-[rgba(var(--mark),1)] px-[10px] py-[5px] text-xl rounded-md" onclick='(() => { copyToClipBoard(indexHtmlSnippet,"HTML startup Template") })()'>
                <i class="fa-solid fa-copy"></i>
              </button>
            </div>
          </div>
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
              <button type="button" class="absolute top-[5px] right-[4px] font-bold bg-[rgba(var(--primary),0.3)] text-[rgba(var(--mark),1)] px-[10px] py-[5px] text-xl rounded-md" onclick="(() => { copyToClipBoard(indexJsSnippet, 'index.js') })()">
                <i class="fa-solid fa-copy"></i>
              </button>
            </div>
          </div>
          <div class="mt-[20px]">
            <h1 class="font-bold text-2xl md:text-4xl text-center">Be cautious about!</h1>
            <div class="font-bold text-xl">You might get <span class="text-[red]">errors</span> when;-</div>
            <ol class="mt-[5px] bg-[#ffd90027] p-6 rounded-b-md leading-[28px]">
              <li class="list-decimal"><span class="font-bold">$("")</span> Function are called, but no query selector's are provided!</li>
              <li class="list-decimal"><span class="font-bold">$("")</span> Function are called, but no element found with your selector!</li>
              <li class="list-decimal"><span class="font-bold">$("")</span> Function are called, but there was multiple element with same id selector!</li>
              <li class="list-decimal"><span class="font-bold">$("")</span> Function are called, but there was Invalid query selectors are provided!</li>
            </ol>
          </div>
        </div>
      </div>
      <div>
        <p class="text-center py-[20px]">
          &copy; All right reserved by
          <a href="http://devababil.com"><span class="font-bold">Ababil</span></a>
        </p>
      </div>
    </main>
  `;
}

// initial render
const renderId = setTimeout(() => {
  renderDOM();
  clearTimeout(renderId);
}, 200);

const copySourceHandler = (e) => {
  const button = e.localName !== "button" ? e.parentNode : e;
  const domgetSourceLink = `<script src="${domgetModuleSource[button.getAttribute("domgetModuleSource")]}"></script>`;
  copyToClipBoard(domgetSourceLink, `DOMget source ${button.getAttribute("domgetModuleSource").split("_").join(" ")}`);
};

const removeLoaderId = setTimeout(() => {
  if ($("#loader")) {
    $("html").classList.remove("overflow-hidden");
    $("body").classList.remove("overflow-hidden");
    $("#loader").remove();
    clearTimeout(removeLoaderId);
  }
}, 1000);