window.addEventListener("load", start);
let priceTo = 600;
let priceFrom = 200;
let url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&&q={"sale":true,"price_current":{"$bt":[${priceFrom},${priceTo}]}}`;
//let url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&q={"sale":true}`;
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
      document.querySelector(".loader_container").style.display = "none";
      console.log(response);
      if (response.length < 1) {
        console.log("No product matches your query. Try to adjust filter.");
        document.querySelector(".filter_empty").classList.remove("hidden");
        document.querySelector(".products_footer").style.display = "none";
      } else {
        document.querySelector(".filter_empty").classList.add("hidden");
        document.querySelector(".products_footer").style.display = "flex";
        showProducts(response);
      }
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
    ).href = `individual_product.html?product=${product._id}`;
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

// making filter work
const filterForm = document.querySelector("#filter_form");
console.log(filterForm);
console.log(filterForm.elements.red.value);

filterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(filterForm.elements.material);
  console.log(filterForm.elements.price_from.value);
  console.log(filterForm.elements.price_to.value);
  let colors = document.querySelectorAll(
    "#filter_form input[type=checkbox]:checked"
  );
  colors = Array.from(colors);
  const colorsString = colors
    .map(function (color) {
      return `"` + color.name + `"`;
    })
    .join(",");
  //console.log(colorsString);
  let material = filterForm.elements.material.selectedOptions;
  material = Array.from(material);

  const materialString = material
    .map((item) => {
      return `"` + item.value + `"`;
    })
    .join(",");
  //console.log(materialString);
  let category = filterForm.elements.category.selectedOptions;
  category = Array.from(category);
  const categoryString = category
    .map((item) => {
      return `"` + item.value + `"`;
    })
    .join(",");
  //console.log(categoryString);
  let collection = filterForm.elements.collection.selectedOptions;
  collection = Array.from(collection);
  const collectionString = collection
    .map((item) => {
      return `"` + item.value + `"`;
    })
    .join(",");
  console.log(collectionString);

  priceFrom = filterForm.elements.price_from.value;
  priceTo = filterForm.elements.price_to.value;

  if (colors.length > 0) {
    if (material.length > 0) {
      if (category.length > 0) {
        if (collection.length > 0) {
          url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&q={"sale":true,"price_current":{"$bt":[${priceFrom},${priceTo}]},"colors":{"$in":[${colorsString}]},"material":{"$in":[${materialString}]},"category":{"$in":[${categoryString}]},"collection":{"$in":[${collectionString}]}}`;
        } else {
          url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&q={"sale":true,"price_current":{"$bt":[${priceFrom},${priceTo}]},"colors":{"$in":[${colorsString}]},"material":{"$in":[${materialString}]},"category":{"$in":[${categoryString}]}}`;
        }
      } else {
        if (collection.length > 0) {
          url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&q={"sale":true,"price_current":{"$bt":[${priceFrom},${priceTo}]},"colors":{"$in":[${colorsString}]},"material":{"$in":[${materialString}]},"collection":{"$in":[${collectionString}]}}`;
        } else {
          url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&q={"sale":true,"price_current":{"$bt":[${priceFrom},${priceTo}]},"colors":{"$in":[${colorsString}]},"material":{"$in":[${materialString}]}}`;
        }
      }
    } else {
      if (category.length > 0) {
        if (collection.length > 0) {
          url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&q={"sale":true,"price_current":{"$bt":[${priceFrom},${priceTo}]},"colors":{"$in":[${colorsString}]},"category":{"$in":[${categoryString}]},"collection":{"$in":[${collectionString}]}}`;
        } else {
          url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&q={"sale":true,"price_current":{"$bt":[${priceFrom},${priceTo}]},"colors":{"$in":[${colorsString}]},"category":{"$in":[${categoryString}]}}`;
        }
      } else {
        if (collection.length > 0) {
          url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&q={"sale":true,"price_current":{"$bt":[${priceFrom},${priceTo}]},"colors":{"$in":[${colorsString}]},"collection":{"$in":[${collectionString}]}}`;
        } else {
          url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&q={"sale":true,"price_current":{"$bt":[${priceFrom},${priceTo}]},"colors":{"$in":[${colorsString}]}}`;
        }
      }
    }
  } else {
    if (material.length > 0) {
      if (category.length > 0) {
        if (collection.length > 0) {
          url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&q={"sale":true,"price_current":{"$bt":[${priceFrom},${priceTo}]},"material":{"$in":[${materialString}]},"category":{"$in":[${categoryString}]},"collection":{"$in":[${collectionString}]}}`;
        } else {
          url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&q={"sale":true,"price_current":{"$bt":[${priceFrom},${priceTo}]},"material":{"$in":[${materialString}]},"category":{"$in":[${categoryString}]}}`;
        }
      } else {
        if (collection.length > 0) {
          url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&q={"sale":true,"price_current":{"$bt":[${priceFrom},${priceTo}]},"material":{"$in":[${materialString}]},"collection":{"$in":[${collectionString}]}}`;
        } else {
          url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&q={"sale":true,"price_current":{"$bt":[${priceFrom},${priceTo}]},"material":{"$in":[${materialString}]}}`;
        }
      }
    } else {
      if (category.length > 0) {
        if (collection.length > 0) {
          url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&q={"sale":true,"price_current":{"$bt":[${priceFrom},${priceTo}]},"category":{"$in":[${categoryString}]},"collection":{"$in":[${collectionString}]}}`;
        } else {
          url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&q={"sale":true,"price_current":{"$bt":[${priceFrom},${priceTo}]},"category":{"$in":[${categoryString}]}}`;
        }
      } else {
        if (collection.length > 0) {
          url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&q={"sale":true,"price_current":{"$bt":[${priceFrom},${priceTo}]},"collection":{"$in":[${collectionString}]}}`;
        } else {
          url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&q={"sale":true,"price_current":{"$bt":[${priceFrom},${priceTo}]}}`;
        }
      }
    }
  }
  document.querySelector(".reset_filter_btn").disabled = false;
  document
    .querySelector(".reset_filter_btn")
    .addEventListener("click", resetFilter);
  document.querySelector(".products_content").innerHTML = "";
  start();
  document.querySelector(".loader_container").style.display = "block";
  window.scrollTo(0, 100);
});

function resetFilter() {
  const colorsChecked = document.querySelectorAll(
    "#filter_form input[type=checkbox]:checked"
  );
  console.log(colorsChecked);
  colorsChecked.forEach((color) => {
    color.checked = false;
  });

  let materialSelected = filterForm.elements.material.selectedOptions;
  materialSelected = Array.from(materialSelected);
  console.log(materialSelected);
  materialSelected.forEach((material) => {
    material.selected = false;
  });

  let categorySelected = filterForm.elements.category.selectedOptions;
  categorySelected = Array.from(categorySelected);
  console.log(categorySelected);
  categorySelected.forEach((item) => {
    item.selected = false;
  });

  let collectionSelected = filterForm.elements.collection.selectedOptions;
  collectionSelected = Array.from(collectionSelected);
  collectionSelected.forEach((item) => {
    item.selected = false;
  });

  document.querySelector(".products_content").innerHTML = "";
  url = `https://kea0209-5a57.restdb.io/rest/products?fetchchildren=true&&q={"sale":true,"price_current":{"$bt":[${priceFrom},${priceTo}]}}`;
  document.querySelector(".loader_container").style.display = "block";
  document.querySelector(".reset_filter_btn").disabled = true;
  start();
}
