const urlParams = new URLSearchParams(window.location.search);
const message = urlParams.get("message");
const msgElement = document.getElementById("message");
if (msgElement) msgElement.value = message;
