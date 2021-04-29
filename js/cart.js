const couponPlaceholder = document.querySelector(
  ".cart_coupon input[type=text]"
);
const linkCheckout = document.querySelector("a.checkout");
console.log(couponPlaceholder);
console.log(linkCheckout);

let mql = window.matchMedia("(max-width: 500px)");

if (mql.matches) {
  console.log("This is a narrow screen — less than 500px wide.");
  couponPlaceholder.placeholder = "Type your coupon code here";
  linkCheckout.textContent = "Checkout";
}
