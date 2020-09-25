import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";

export function showHelloWorld() {
    console.log(format(new Date(2014, 1, 11), 'MM/dd/yyyy'));
    console.log(uuidv4());
}

