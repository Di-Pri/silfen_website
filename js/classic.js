window.addEventListener("load", start);
let url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&q={"collection":"Classic"}`;
const options = {
  method: "GET",
  headers: {
    "x-apikey": "6082d28c28bf9b609975a5db",
    "Content-Type": "application/json",
  },
};

function start() {
  fetch(url, options)
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      showProducts(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

function showProducts(products) {
  //console.log(products);

  const productsTemplate = document.querySelector(".products_template").content;

  products.forEach((product) => {
    //console.log(product);
    const productsClone = productsTemplate.cloneNode(true);
    //populate
    productsClone.querySelector(".products_title").textContent = product.title;
    productsClone.querySelector(".products_thumbnail").src =
      product.primary_images[0].link;
    productsClone.querySelector(
      ".products_link"
    ).href = `individual.html?product=${product._id}`;
    if (product.sale) {
      const discount = Math.floor(
        ((product.price_current - product.price_regular) /
          product.price_regular) *
          100
      );
      productsClone.querySelector(
        ".item_icons_sale > span"
      ).textContent = discount;
      //console.log(discount);
      productsClone.querySelector(".sale_price_number").textContent =
        product.price_current;
      productsClone.querySelector(".regular_price_number").textContent =
        product.price_regular;
    } else {
      productsClone.querySelector(".item_icons_sale").style.display = "none";
      productsClone.querySelector(".regular_price_number").textContent =
        product.price_regular;
      productsClone.querySelector(".regular_price").style.textDecoration =
        "none";
      productsClone.querySelector(".sale_price").style.display = "none";
    }
    if (!product.recycled) {
      productsClone.querySelector(".item_icons_recycled").style.display =
        "none";
    }
    const parentEl = document
      .querySelector(".products_content")
      .appendChild(productsClone);
  });
}
