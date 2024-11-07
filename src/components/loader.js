const loader = (isLoading) => {
  return /*html*/ `
    <div id="loader" class="fixed z-10 h-screen w-full max-w-full top-0 left-0 bg-[white]  ${isLoading ? "flex" : "hidden"}  justify-center items-center flex-col gap-y-[2px]">
      <div class="size-[70px] md:size-[100px] border-t-[4px] border-b-[4px] border-[rgba(var(--text))] rounded-full spin-loader"></div>
      <div class="text-2xl font-bold text-[rgba(var(--text),1)]">Loading...</div>
    </div>`;
};

export default loader;
