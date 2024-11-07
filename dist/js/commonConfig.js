function setState(callback) {
  callback();
  renderDOM();
}

const toast = (message) => {
  Toastify({
    text: message,
    duration: 3200,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
};

const copyToClipBoard = (value, context = "") => {
  const tempInput = document.createElement("textarea");
  tempInput.value = value;
  tempInput.select();
  navigator.clipboard.writeText(tempInput.value);
  toast(`Succesfully copied ${context}`);
};
