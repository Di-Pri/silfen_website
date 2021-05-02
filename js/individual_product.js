const parag1 = document.querySelector("#parag1");
const parag2 = document.querySelector("#parag2");
const parag3 = document.querySelector("#parag3");
const parag4 = document.querySelector("#parag4");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const chev1 = document.querySelector("#chev1");
const chev2 = document.querySelector("#chev2");
const chev3 = document.querySelector("#chev3");
const chev4 = document.querySelector("#chev4");

btn1.addEventListener("click", function () {
  parag1.classList.toggle("hidden");
  chev1.classList.toggle("open");
});
btn2.addEventListener("click", function () {
  parag2.classList.toggle("hidden");
  chev2.classList.toggle("open");
});
btn3.addEventListener("click", function () {
  parag3.classList.toggle("hidden");
  chev3.classList.toggle("open");
});
btn4.addEventListener("click", function () {
  parag4.classList.toggle("hidden");
  chev4.classList.toggle("open");
});
function myFunction(smallImg) {
  var fullImg = document.getElementById("imageBox");
  fullImg.src = smallImg.src;
}
