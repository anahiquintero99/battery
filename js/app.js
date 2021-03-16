// DOM elements
const batteryChargeBarsLabel = document.querySelector(
  "#battery-charge-bars-label"
);

const batteryChargeLinealLabel = document.querySelector(
  "#battery-charge-lineal-label"
);

const lineal = document.querySelector("#lineal");

const SECOND = 1000;
let totalChargeBars = 0;
let totalChargeLineal = 0;

function setBatteryChargeBars() {
  totalChargeBars += 10;
  batteryChargeBarsLabel.textContent = `${totalChargeBars}%`;

  if (totalChargeBars > 100) {
    const bars = document.querySelectorAll('[id^="bar-"]');
    bars.forEach((bar) => {
      bar.classList.remove("bg-green-500");
      bar.classList.add("bg-transparent");
    });

    totalChargeBars = 0;
    batteryChargeBarsLabel.textContent = `${totalChargeBars}%`;
    return;
  }

  const bar = document.querySelector(`#bar-${totalChargeBars}`);
  bar.classList.remove("bg-transparent");
  bar.classList.add("bg-green-500");
}

function setBatteryChargeLineal() {
  totalChargeLineal += 1;

  if (totalChargeLineal <= 100) {
    lineal.style.height = `${totalChargeLineal}%`;
    batteryChargeLinealLabel.textContent = `${totalChargeLineal}%`;
  }
  if (totalChargeLineal === 110) {
    totalChargeLineal = 0;
  }
}

setInterval(setBatteryChargeBars, SECOND);
setInterval(setBatteryChargeLineal, SECOND / 10);
