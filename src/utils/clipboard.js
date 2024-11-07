import toast from "./toast";

const copyToClipBoard = (value, context = "") => {
  const tempInput = document.createElement("textarea");
  tempInput.value = value;
  tempInput.select();
  navigator.clipboard.writeText(tempInput.value);
  toast(`Succesfully copied ${context}`);
};

export default copyToClipBoard;
