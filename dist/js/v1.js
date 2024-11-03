/*****************************************************
 * Title       : DOMget library                      *
 * Description : for manipulate dom like a dream     *
 * Version     : 1                                   *
 * Author      : Md Ababil Hossain                   *
 * Site URL    : https://domget.netlify.app          *
 * Date        : Oct 29, 2024                        *
 *****************************************************/

var $ = (qSelector) => {
  if (!qSelector) {
    let $msg = `Query selector is required! You have called $() but did not provide any query selector`;
    displayError($msg);
    throw Error($msg);
  }
  const elements = document.querySelectorAll(qSelector);
  if (elements.length === 0) {
    let $msg = `No element found with selector '${qSelector}'`;
    displayError($msg);
    throw Error($msg);
  }

  if (
    [...elements].filter((element) => {
      if (element.hasAttribute("id")) {
        const idOnly =
          qSelector.charAt(0) === "#"
            ? qSelector.slice(1, qSelector.length)
            : null;
        return idOnly === element.getAttribute("id") ? true : false;
      }
    }).length > 1
  ) {
    let $msg = `Duplicate id found with query '${qSelector}'`;
    displayError($msg);
    throw Error($msg);
  }
  if (elements.length === 1) {
    return elements[0];
  }
  return elements;
};

function displayError(message) {
  $("#DOMgetError").style.display = "flex";
  $(".msg-content").innerText = message;
  $("body").style.overflow = "hidden";
  console.error(message);
}

(() => {
  const msg = document.createElement("div");
  msg.setAttribute("id", "DOMgetError");
  msg.innerHTML = `
    <div class="msg-contentainer">
      <div class="msg-title">Error :</div>
      <div class="msg-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
        corrupti!
      </div>
      <div class="console">See the console for more details.</div>
    </div>
  `;
  const style = document.createElement("style");
  style.setAttribute("style-for", "domget");
  style.innerHTML = ` 
    #DOMgetError {
      width: 100%;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      justify-content: center;
      align-items: center;
      background: rgba(245, 222, 179, 0.514);
      display: none;
    }
    #DOMgetError .msg-contentainer {
      width: 390px;
      padding: 20px;
      border: 1px solid rgba(128, 128, 128, 0.568);
      box-shadow: 0px 0px 4px black inset;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      row-gap: 5px;
      background: white;
    }
    #DOMgetError .msg-contentainer .msg-title {
      color: red;
      font-weight: bold;
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
    #DOMgetError .msg-contentainer .msg-content {
      color: gray;
      font-weight: bold;
    }
    #DOMgetError .msg-contentainer .console {
      color: rgb(66, 66, 66);
    }
 `;
  $("head").appendChild(style);
  $("body").appendChild(msg);
})();
