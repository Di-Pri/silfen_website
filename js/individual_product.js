let parag1 = document.querySelector("#parag1");
function myFunction(smallImg) {
  var fullImg = document.getElementById("imageBox");
  fullImg.src = smallImg.src;
}
function openParag() {}
parag1.addEventListener("click", function () {
  parag1.classList.remove("hidden");
});
