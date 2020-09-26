import { v4 as uuidv4 } from "uuid";
import { showDaysTillChristmas } from "./time";


export function showHelloWorld() {
    console.log("Hello world");
    console.log(uuidv4());

    showDaysTillChristmas();
}

