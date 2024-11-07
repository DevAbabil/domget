import copyToClipBoard from "../utils/clipboard";

const state = {
  htmlSnippet: `<!DOCTYPE html>
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
};

const htmlStartUpTemplate = () => {
  const buttonId = setTimeout(() => {
    function copyHtmlHandler() {
      copyToClipBoard(state.htmlSnippet, `HTML Startup Template`);
    }
    if ($(".html-copy-button")) {
      $(".html-copy-button").addEventListener("click", () => {
        copyHtmlHandler();
      });
    }
    clearTimeout(buttonId);
  }, 300);

  return /*html*/ ` <div class="mt-[20px] relative">
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
              <button type="button" class="html-copy-button absolute top-[5px] right-[4px] font-bold bg-[rgba(var(--primary),0.3)] text-[rgba(var(--mark),1)] px-[10px] py-[5px] text-xl rounded-md"  >
                <i class="fa-solid fa-copy"></i>
              </button>
            </div>
          </div>`;
};

export default htmlStartUpTemplate;
