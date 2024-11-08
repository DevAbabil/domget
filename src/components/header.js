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
        <a href="https://github.com/DevAbabil/domget" target="_blank" class="text-2xl"
          ><span><i class="fa-brands fa-github"></i></span
        ></a>
      </li>
      <li>
        <a href="https://devababil.com" target="_blank" class="text-2xl select-none">❤️</a>
      </li>
      <li >
        <div class="flex justify-center items-center select-none">
          <div class="text-[17px] leading-[18px]">
            <span class="font-semibold text-gray-600">Doc Views</span>
            <div class="w-auto font-bold text-gray-400 flex justify-center items-center"> 
              ${projectViews()}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>`;
};

export default header;
