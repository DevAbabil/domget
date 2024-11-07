import domgetSources from "../components/domgetSources";
import header from "../components/header";
import htmlStartUpTemplate from "../components/htmlStartUpTemplate";
import jsStartUpTemplate from "../components/jsStartUpTemplate";

export const home = () => {
  return /*html*/ `
  <main>
    <div>
      <div class="fixed inset-0 -z-10 h-full w-full bg-[rgba(var(--primary),0.05)] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
    </div>
      <div class="container mx-auto my-0">
        ${header()}
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
              ${domgetSources()}
            </div>
            <div class="mt-[17px] text-[brown]">
              <span class="text-[#ff2525]"><i class="fa-solid fa-triangle-exclamation"></i></span>
              You must have to include [DOMget source] before all the other script tags. Or, before your own &lt;script.js&gt; file sources.
            </div>
          </div>
          <div>
            ${htmlStartUpTemplate()}
          </div>
          <div>
            ${jsStartUpTemplate()}
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
};
