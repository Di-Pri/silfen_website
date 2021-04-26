document
  .querySelector("label.colors .chevron")
  .addEventListener("click", closeFilterSection);
document
  .querySelector("label.material .chevron")
  .addEventListener("click", closeFilterSection);
document
  .querySelector("label.category .chevron")
  .addEventListener("click", closeFilterSection);
document
  .querySelector("label.collection .chevron")
  .addEventListener("click", closeFilterSection);

//select#color.select_hidden

function closeFilterSection() {
  console.log(this.dataset.id);
  const filterID = this.dataset.id;
  document
    .querySelector("select#" + filterID)
    .classList.toggle("select_hidden");
  // this.src = "../assets/images/icons/chevron-up.svg";
  this.classList.toggle("open");
  console.log(this);
}
