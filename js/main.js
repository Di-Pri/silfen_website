window.addEventListener("load", start);

let menu = document.querySelector("#menu_second_line_id");
let menu_dropdown1 = document.querySelector("#dropdown_content1");
let menu_dropdown2 = document.querySelector("#dropdown_content2");
let menu_chevron_down1 = document.querySelector("#menu_chevron_down1");
let menu_chevron_down2 = document.querySelector("#menu_chevron_down2");
let menu_chevron_up1 = document.querySelector("#menu_chevron_up1");
let menu_chevron_up2 = document.querySelector("#menu_chevron_up2");

function start() {
  document.querySelector("#hamburger_id").addEventListener("click", topMenu);
  document.querySelector("#cross_id").addEventListener("click", topMenu);
}

menu_chevron_down1.addEventListener("click", function () {
  menu_dropdown1.classList.remove("hidden");

  menu_chevron_down1.classList.add("hidden");
  menu_chevron_up1.classList.remove("hidden");
});

menu_chevron_up1.addEventListener("click", function () {
  menu_dropdown1.className = "hidden";

  menu_chevron_down1.classList.remove("hidden");
  menu_chevron_up1.classList.add("hidden");
});

menu_chevron_down2.addEventListener("click", function () {
  menu_dropdown2.classList.remove("hidden");

  menu_chevron_down2.classList.add("hidden");
  menu_chevron_up2.classList.remove("hidden");
});

menu_chevron_up2.addEventListener("click", function () {
  menu_dropdown2.className = "hidden";

  menu_chevron_down2.classList.remove("hidden");
  menu_chevron_up2.classList.add("hidden");
});

function topMenu() {
  if (menu.className === "menu_second_line") {
    menu.className += " responsive";

    document.querySelector("#menu_first_line_id").classList.add("hidden");
    document.querySelector("#cross_id").classList.remove("hidden");

    document.querySelector("#mobile_flag_id").classList.remove("hidden");

    document.body.style.overflow = "hidden";
  } else {
    menu.className = "menu_second_line";

    document.querySelector("#menu_first_line_id").classList.remove("hidden");
    document.querySelector("#cross_id").classList.add("hidden");

    document.querySelector("#mobile_flag_id").classList.add("hidden");

    menu_dropdown1.className = "hidden";
    menu_dropdown2.className = "hidden";

    menu_chevron_down1.className = "";
    menu_chevron_up1.className = "hidden";

    menu_chevron_down2.className = "";
    menu_chevron_up2.className = "hidden";

    document.body.style.overflow = "visible";
  }
}

// sign up form in the footer
const signupForm = document.querySelector(".signup_form");
const modalSignup = document.querySelector("#modal_signup");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  showModal();
  clearForm();
});

function showModal() {
  modalSignup.style.display = "block";
  document.querySelector("span.signup_close").addEventListener("click", (e) => {
    e.stopPropagation();
    modalSignup.style.display = "none";
  });
  window.addEventListener("click", () => {
    modalSignup.style.display = "none";
  });
}

function clearForm() {
  console.log(signupForm.elements);
  signupForm.elements.signup_email.value = "";
}

// dropdowns in the footer
const aboutFooterWrapper = document.querySelector(
  ".about > .footer_heading_wrapper"
);
const faqFooterWrapper = document.querySelector(
  ".faq > .footer_heading_wrapper"
);

//console.log(aboutFooterWrapper, faqFooterWrapper);

aboutFooterWrapper.addEventListener("click", openFooterSection);
faqFooterWrapper.addEventListener("click", openFooterSection);

function openFooterSection() {
  //console.log(this.parentElement.className);
  const openSelector = "." + this.parentElement.className + " ul";
  const chevronImgSelector = "." + this.parentElement.className + " img";
  const chevronImg = document.querySelector(chevronImgSelector);
  console.log(chevronImg);
  //console.log(openSelector);
  const elementToOpen = document.querySelector(openSelector);
  //console.log(elementToOpen);
  elementToOpen.style.display = "block";
  chevronImg.src = "assets/images/icons/chevron-up.svg";
  this.removeEventListener("click", openFooterSection);
  this.addEventListener("click", closeFooterSection);
  function closeFooterSection() {
    console.log(this);
    elementToOpen.style.display = "none";
    chevronImg.src = "assets/images/icons/chevron-down.svg";
    this.removeEventListener("click", closeFooterSection);
    this.addEventListener("click", openFooterSection);
  }
}
