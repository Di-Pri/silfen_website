const check = document.querySelector("#different_address");
console.log(check.checked);

check.addEventListener("click", seeIfChecked);

function seeIfChecked() {
  if (check.checked) {
    console.log("checked");
    console.log(check.checked);
    document.querySelector(".shipping_info").style.display = "grid";
    document.querySelector("#country_ship").setAttribute("required", "");
    document.querySelector("#street_ship").setAttribute("required", "");
    document.querySelector("#house_ship").setAttribute("required", "");
    document.querySelector("#postcode_ship").setAttribute("required", "");
    document.querySelector("#phone_ship").setAttribute("required", "");
    document.querySelector("#email_ship").setAttribute("required", "");
    check.addEventListener("click", unCheck);
  }
}

function unCheck() {
  document.querySelector(".shipping_info").style.display = "none";
  document.querySelector("#country_ship").removeAttribute("required", "");
  document.querySelector("#street_ship").removeAttribute("required", "");
  document.querySelector("#house_ship").removeAttribute("required", "");
  document.querySelector("#postcode_ship").removeAttribute("required", "");
  document.querySelector("#phone_ship").removeAttribute("required", "");
  document.querySelector("#email_ship").removeAttribute("required", "");
  check.removeEventListener("click", unCheck);
  check.addEventListener("click", seeIfChecked);
}

// checkout form submit
const checkoutForm = document.querySelector("#checkout_form");
const modalCheckout = document.querySelector("#modal_checkout");

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  showModalCheckout();
  clearFormCheckout();
});

function showModalCheckout() {
  modalCheckout.style.display = "block";
  document
    .querySelector("span.checkout_close")
    .addEventListener("click", (e) => {
      e.stopPropagation();
      modalCheckout.style.display = "none";
    });
  window.addEventListener("click", () => {
    modalCheckout.style.display = "none";
  });
}

function clearFormCheckout() {
  console.log(checkoutForm.elements);
  checkoutForm.elements.first_name.value = "";
  checkoutForm.elements.last_name.value = "";
  checkoutForm.elements.country.value = "";
  checkoutForm.elements.street.value = "";
  checkoutForm.elements.house.value = "";
  checkoutForm.elements.city.value = "";
  checkoutForm.elements.postcode.value = "";
  checkoutForm.elements.phone.value = "";
  checkoutForm.elements.email.value = "";

  checkoutForm.elements.country_ship.value = "";
  checkoutForm.elements.street_ship.value = "";
  checkoutForm.elements.house_ship.value = "";
  checkoutForm.elements.city_ship.value = "";
  checkoutForm.elements.postcode_ship.value = "";
  checkoutForm.elements.phone_ship.value = "";
  checkoutForm.elements.email_ship.value = "";
}
