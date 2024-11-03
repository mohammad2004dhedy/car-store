// nav js code start
let navMenu = document.querySelector(".navMenu");
let OpenMenu = document.querySelector("nav .OpenMenu");
let cartIcon = document.querySelector("nav .cartIcon");
let navMenuItems = navMenu.querySelectorAll("li");
OpenMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
navMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    navMenuItems.forEach((i) => {
      i.classList.remove("active");
    });
    item.classList.add("active");
  });
});
// nav js code end
