import { format, addYears, differenceInDays } from "date-fns";

export function showDaysTillChristmas() {
    const timeMessage = document.getElementById("time");
    const firstDay = new Date();
    const christmas = new Date("2020/12/24");

    const daysBetween = differenceInDays(christmas, firstDay);

    timeMessage.textContent = `Want to know how many days till christmas? Its just ${daysBetween} days away!`;
}