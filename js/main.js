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
