const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");
const calcBtn = document.getElementById("calc-btn");

calcBtn.addEventListener("click", function () {
  result.textContent = Number(num1.value) + Number(num2.value);
});
