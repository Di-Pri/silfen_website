// contact us form
const contactForm = document.querySelector("#contact_form");
const modalContact = document.querySelector("#modal_contact");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  showModalContact();
  clearFormContact();
});

function showModalContact() {
  modalContact.style.display = "block";
  document
    .querySelector("span.contact_close")
    .addEventListener("click", (e) => {
      e.stopPropagation();
      modalContact.style.display = "none";
    });
  window.addEventListener("click", () => {
    modalContact.style.display = "none";
  });
}

function clearFormContact() {
  console.log(contactForm.elements);
  contactForm.elements.name.value = "";
  contactForm.elements.email.value = "";
  contactForm.elements.phone.value = "";
  contactForm.elements.message.value = "";
}
