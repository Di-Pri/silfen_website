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

// document.querySelector("input.filter_submit").addEventListener("click", (e) => {
//   e.preventDefault();
// });
