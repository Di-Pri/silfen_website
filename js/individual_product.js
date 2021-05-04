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
      document.querySelector(".loader_container").style.display = "none";
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
  document.querySelector(".breadcrumbs_item_active").textContent =
    product.title.charAt(0).toUpperCase() + product.title.slice(1);
  document.querySelector(".category_link").textContent = product.category;
  document.querySelector(".category_link").href =
    "category.html?category=" + product.category;
  console.log(document.querySelector(".category_link").href);
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

  document.querySelector("#parag2").innerHTML = product.details;
  document.querySelector("#imageBox").src = product.primary_images[0].link;
  document.querySelector("#imageBox").alt = product.title;

  let color = product.primary_images[0].color;
  console.log(color);
  const smallImageTemplate = document.querySelector(".secondary_image_template")
    .content;
  // console.log(smallImageTemplate);
  const smallImageParent = document.querySelector(".product-small-img");
  product.secondary_images.forEach((elem) => {
    //console.log(elem);
    if (elem.color == color) {
      const smallImageClone = smallImageTemplate.cloneNode(true);
      //console.log(smallImageClone);
      smallImageClone.querySelector(".secondary_image").src = elem.link;
      //console.log(smallImageClone.querySelector(".secondary_image"));
      smallImageParent.appendChild(smallImageClone);
    }
  });
  const colorpickerTemplate = document.querySelector(".colorpicker_images")
    .content;
  //console.log(colorpickerTemplate);
  const colorParent = document.querySelector(".colorpicker");
  product.primary_images.forEach((elem) => {
    //console.log(elem);
    if (elem.color == color) {
      document.querySelector("#imageBox").src = elem.link;
      //console.log(elem.link);
    }
    const colorpickerClone = colorpickerTemplate.cloneNode(true);
    //console.log(colorpickerClone);
    colorpickerClone.querySelector(".colorpicker_image").src = elem.link;
    colorpickerClone.querySelector(".colorpicker_image").dataset.color =
      elem.color;
    colorParent.appendChild(colorpickerClone);
  });

  document.querySelectorAll(".colorpicker_image").forEach((image) => {
    image.addEventListener("click", function (e) {
      console.log(this.dataset.color);
      color = this.dataset.color;
      console.log(color);
      product.primary_images.forEach((elem) => {
        if (elem.color == color) {
          document.querySelector("#imageBox").src = elem.link;
          console.log(elem.color);
          console.log(elem.link);
        }
      });
      smallImageParent.innerHTML = "";
      product.secondary_images.forEach((elem) => {
        //console.log(elem);
        if (elem.color == color) {
          const smallImageClone = smallImageTemplate.cloneNode(true);
          //console.log(smallImageClone);
          smallImageClone.querySelector(".secondary_image").src = elem.link;
          //console.log(smallImageClone.querySelector(".secondary_image"));
          smallImageParent.appendChild(smallImageClone);
        }
      });
    });
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
