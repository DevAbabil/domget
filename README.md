### DOMget Source

1. From Surge
   ```html
   <script src="https://domget.surge.sh/js/v1.js"></script>
   ```
2. From Vercel
   ```html
   <script src="https://domget.vercel.app/js/v1.js"></script>
   ```
3. From Netlify
   ```html
   <script src="https://domget.netlify.app/js/v1.js"></script>
   ```

### HTML startup template

`index.html`

```html
<!DOCTYPE html>
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
</html>
```

### Inside your JavaScript file

`index.js`

```js
console.log($("h2").innerText); // This is h2 tag
console.log($("ul li")); // NodeList(3) [li.first-item, li, li]
console.log($("#my_id").innerText); // Hello dear!
console.log($(".first-item").innerText); // I am Ababil
console.log($("[custom_attribute='atributeA']").innerText); // age 21
```
