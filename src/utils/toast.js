import Toastify from "toastify-js";

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

export default toast;
