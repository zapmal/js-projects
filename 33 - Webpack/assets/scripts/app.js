import { showHelloWorld } from "./messages";
import "../styles/styles.css";

const button = document.getElementById("btn-alert");

button.addEventListener("click", showHelloWorld);