import projectViews from "../components/projectViews";
const header = () => {
  return /*html*/ `
  <div class="text-center">
    <ul class="inline-flex items-center gap-x-2 my-[10px]">
      <li>
        <a href="/">
          <div class="size-[35px] select-none">
            <img src="./favicon.png" alt="DOMget logo" class="max-w-full h-auto" />
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
      <li >
        <div class="flex justify-center items-center">
          <span>Doc Views:</span>
          <div class="w-[20px] font-bold text-2xl"> 
            ${projectViews()}
          </div>
        </div>
      </li>
    </ul>
  </div>`;
};

export default header;
