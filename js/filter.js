document
  .querySelector("label.colors .chevron")
  .addEventListener("click", openFilterSection);
document
  .querySelector("label.material .chevron")
  .addEventListener("click", openFilterSection);
document
  .querySelector("label.category .chevron")
  .addEventListener("click", openFilterSection);
document
  .querySelector("label.collection .chevron")
  .addEventListener("click", openFilterSection);

function openFilterSection() {
  console.log(this.dataset.id);
  const filterID = this.dataset.id;
  document.querySelector("#" + filterID).classList.toggle("select_hidden");
  this.classList.toggle("open");
  console.log(this);
}

// slider functionality
var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

function setLeftValue() {
  var _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
  //console.log(_this.value);
  document.querySelector("label.label-left > span").textContent = _this.value;
  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
  //console.log(percent);
}
setLeftValue();

function setRightValue() {
  var _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
  //console.log(_this.value);
  document.querySelector("label.label-right > span").textContent = _this.value;
  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function () {
  thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function () {
  thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function () {
  thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function () {
  thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function () {
  thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function () {
  thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function () {
  thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function () {
  thumbRight.classList.remove("active");
});
// slider functionality end

// mobile filter
const filterCloseBtn = document.querySelector(".filter_close_btn");
const filterOpenBtn = document.querySelector(".filter_open_btn");
console.log(filterOpenBtn);

filterCloseBtn.addEventListener("click", closeMobileFilter);
filterOpenBtn.addEventListener("click", openFilterMobile);

function closeMobileFilter() {
  document.querySelector(".filter_mobile").classList.remove("opened");
  document.querySelector(".filter_mobile").classList.add("closed");
  window.scrollTo(0, 0);
}

function openFilterMobile() {
  document.querySelector(".filter_mobile").classList.remove("closed");
  document.querySelector(".filter_mobile").classList.add("opened");
  console.log(filterOpenBtn + "was clicked");
}
