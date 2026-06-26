const countElement = document.getElementById("count");
const targetElement = document.getElementById("target");
const dhikrNameElement = document.getElementById("dhikrName");

const countButton = document.getElementById("countButton");
const resetButton = document.getElementById("resetButton");

let count = Number(localStorage.getItem("count")) || 0;
let target = Number(localStorage.getItem("target")) || 33;
let dhikrName = localStorage.getItem("dhikrName") || "SubhanAllah";

function updateScreen() {
  countElement.textContent = count;
  targetElement.textContent = target;
  dhikrNameElement.textContent = dhikrName;

  localStorage.setItem("count", count);
  localStorage.setItem("target", target);
  localStorage.setItem("dhikrName", dhikrName);
}

countButton.addEventListener("click", () => {
  count++;

  if (count > target) {
    count = target;
  }

  updateScreen();

  countButton.classList.remove("counted");
  void countButton.offsetWidth;
  countButton.classList.add("counted");

  setTimeout(() => {
    countButton.classList.remove("counted");
  }, 220);
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateScreen();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

updateScreen();