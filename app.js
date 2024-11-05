// global components codes start
// -------- the scroll line
let scrollLine = document.querySelector(".scrollLine");
let pageHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scrollLine.style.width = `${(scrollTop / pageHeight) * 100}%`;
});
// ----------------------- the fixed up btn
let upBtn = document.querySelector(".upBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    upBtn.classList.add("active");
  } else {
    upBtn.classList.remove("active");
  }
});
upBtn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
// --------------footer up btn
let FooterTop = document.querySelector(".FooterTop");
FooterTop.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

// ----------------- nav js code start
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

// ------------------ global components codes end -------------------
// store js code start
let thumbnailItems = document.querySelectorAll(".thumbnail span");
let StoreCards = document.querySelectorAll(".store .container .content .card");
thumbnailItems.forEach((item) => {
  item.addEventListener("click", () => {
    thumbnailItems.forEach((i) => {
      i.classList.remove("active");
    });
    item.classList.add("active");
    StoreCards.forEach((card) => {
      card.classList.remove("active");
      if (
        card.getAttribute("data-brand") == item.getAttribute("data-brand") ||
        item.getAttribute("data-brand") == "all"
      ) {
        card.classList.add("active");
      }
    });
  });
});
// store js code end
