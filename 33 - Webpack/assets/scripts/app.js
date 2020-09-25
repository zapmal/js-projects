import { showHelloWorld } from "./messages";

const button = document.getElementById("btn-alert");

button.addEventListener("click", showHelloWorld);