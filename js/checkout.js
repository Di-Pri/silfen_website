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
