/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.querySelector("input");
const btn = document.querySelector("button");
let lengthOutput = document.getElementById("length");
let volumeOutput = document.getElementById("volume");
let massOutput = document.getElementById("mass");

btn.addEventListener("click", function convert() {
  lengthOutput.innerHTML = `${inputEl.value} meters = ${(
    inputEl.value * 3.281
  ).toFixed(3)} feet | ${inputEl.value} feet = ${(
    inputEl.value / 3.281
  ).toFixed(3)} meters`;

  volumeOutput.innerHTML = `${inputEl.value} liters = ${(
    inputEl.value * 0.264
  ).toFixed(3)} gallons | ${inputEl.value} gallons = ${(
    inputEl.value / 0.264
  ).toFixed(3)} liters`;

  massOutput.innerHTML = `${inputEl.value} kilos = ${(
    inputEl.value * 2.204
  ).toFixed(3)} pounds | ${inputEl.value} pounds = ${(
    inputEl.value / 2.204
  ).toFixed(3)} kilos`;
});
