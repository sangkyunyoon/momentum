const clock = document.querySelector("h2#clock");

clock.innerHTML = "00:00";

function sayHello() {
    console.log("hello");
}

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(() => {
    getClock();
}, 1000);

function say() {
    return "life is a series of building testing changing and iterating";
}