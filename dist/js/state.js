const domgetModuleSource = {
  From_Surge: "https://domget.surge.sh/js/v1.js",
  From_Vercel: "https://domget.vercel.app/js/v1.js",
  From_Netlify: "https://domget.netlify.app/js/v1.js",
};

const indexJsSnippet = `console.log($("h2").innerText); // This is h2 tag
console.log($("ul li")); // NodeList(3) [li.first-item, li, li]
console.log($("#my_id").innerText); // Hello dear!
console.log($(".first-item").innerText); // I am Ababil
console.log($("[custom_attribute='atributeA']").innerText); // age 21`;

const indexHtmlSnippet = `<!DOCTYPE html>
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
</html>`;

const projectViews = {
  API: "https://mpvbackend.vercel.app/api/mpv/views?project=domget",
  count: 0,
};
