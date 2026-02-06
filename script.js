const time = document.querySelector("#time");
const startbtn = document.querySelector("#start");
const stopbtn = document.querySelector("#stop");
const resetbtn = document.querySelector("#reset");

let hour = 0;
let minutes = 0;
let second = 0;
let timer = null;

function updateTime() {
  second++;

  if (second === 60) {
    second = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hour++;
  }

  time.innerText =
    `${String(hour).padStart(2, "0")}:` +
    `${String(minutes).padStart(2, "0")}:` +
    `${String(second).padStart(2, "0")}`;
}

startbtn.addEventListener("click", () => {
  if (timer !== null) return;
  timer = setInterval(updateTime, 1000);
});

stopbtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

resetbtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  hour = minutes = second = 0;
  time.innerText = "00:00:00";
});
