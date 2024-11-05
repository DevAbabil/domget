/*******************************************************
 * Title         : DOMget library                      *
 * Description   : for manipulate dom like a dream     *
 * Version       : 1                                   *
 * Author        : Md Ababil Hossain                   *
 * Site URL      : https://domget.netlify.app          *
 * Creation Date : Oct 29, 2024                        *
 * Last Modified : Nov 05, 2024                        *
 *******************************************************/

var $ = (qSelector) => {
  try {
    if (!qSelector) {
      let $msg = `Query selector is required! You have called $() but did not provide any query selector`;
      throw Error($msg);
    }
    const elements = document.querySelectorAll(qSelector);
    if (elements.length === 0) {
      let $msg = `No element found with selector '${qSelector}'`;
      throw Error($msg);
    }
    if (
      [...elements].filter((element) => {
        if (element.hasAttribute("id")) {
          const idOnly = qSelector.charAt(0) === "#" ? qSelector.slice(1, qSelector.length) : null;
          return idOnly === element.getAttribute("id") ? true : false;
        }
      }).length > 1
    ) {
      let $msg = `Duplicate id found with query '${qSelector}'`;
      throw Error($msg);
    }
    return elements.length === 1 ? elements[0] : elements;
  } catch (error) {
    if (error.message.includes(atob("RmFpbGVkIHRvIGV4ZWN1dGUgJ3F1ZXJ5U2VsZWN0b3JBbGwnIG9uICdEb2N1bWVudCc="))) {
      displayError(error.message.replace(error.message.slice(0, 52), ""));
    } else {
      displayError(error.message);
    }
  }
};

function displayError(message) {
  if (window.location.hostname === atob("MTI3LjAuMC4x") || window.location.hostname === atob("bG9jYWxob3N0")) {
    $("#DOMgetError").style.display = "flex";
    $(".msg-content").innerText = message;
    $("body").style.overflow = "hidden";
  }
  console.error(message);
}

window.location.hostname === atob("MTI3LjAuMC4x") || window.location.hostname === atob("bG9jYWxob3N0")
  ? (() => {
      const msg = document.createElement("div");
      msg.setAttribute("id", "DOMgetError");
      msg.innerHTML = `
      <div class="msg-contentainer">
        <div class="msg-title">Error :</div>
        <div class="msg-content"></div>
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
    })()
  : null;
