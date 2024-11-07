import setState from "../utils/setState";

const state = {
  api: "https://mpvbackend.vercel.app/api/mpv/views?project=domget",
  count: 0,
};

const projectViews = () => {
  return /*html*/ `
  ${(() => (state.count === 0 ? '<img class="max-w-full size-[18px]" src="./loading.gif" />' : state.count))()}
   `;
};

// function for project views
const fetchId = setTimeout(() => {
  (async () => {
    try {
      const {
        data: { count },
      } = await (
        await fetch(state.api, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();

      if (count) {
        setState(() => {
          state.count = count;
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  })();
  clearTimeout(fetchId);
}, 1300);

export default projectViews;
