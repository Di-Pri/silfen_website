const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("product");
console.log(id);

const url =
  "https://kea0209-5a57.restdb.io/rest/products/" + id + "?fetchchildren=true";

function getData() {
  fetch(url, {
    method: "GET",
    headers: {
      "x-apikey": "6082d28c28bf9b609975a5db",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      //console.log(response);
      showProduct(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

getData();

function showProduct(product) {
  console.log(product);
  document.querySelector("title").textContent =
    product.title.charAt(0).toUpperCase() + product.title.slice(1);
  document.querySelector(".product-description h1").textContent = product.title;
  if (product.sale) {
    document.querySelector(".price_current_number").textContent =
      product.price_current;
    document.querySelector(".price_regular_number").textContent =
      product.price_regular;
  } else {
    document.querySelector(".price_current").style.display = "none";
    document.querySelector(".price_regular").style.textDecoration = "none";
  }
  document.querySelector("#parag1").textContent = product.description;
  //console.log(document.querySelector("#parag1"));
  document.querySelector("#parag2").innerHTML = product.details;
  product.primary_images.forEach((elem) => {
    console.log(elem);
    const colorpickerTemplate = document.querySelector(".colorpicker_images")
      .content;
  });
}

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
