const mobileNav = document.querySelector(".mobile-nav");
const mobileNavBtn = document.querySelector(".mobile-nav__btn");
const body = document.body;
const footerYear = document.querySelector(".footer__year");

mobileNavBtn.addEventListener("click", function () {
  if (mobileNav.classList.contains("mobile-nav__active")) {
    mobileNav.classList.remove("mobile-nav__active");
    body.classList.remove("bodyScroll");
  } else {
    mobileNav.classList.add("mobile-nav__active");
    body.classList.add("bodyScroll");
  }
});

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};

handleCurrentYear();

/////contact
const mobileNavLinks = document.querySelectorAll(".mobile-nav__list a");

mobileNavLinks.forEach(item => {
  item.addEventListener("click", () => {
    mobileNav.classList.remove("mobile-nav__active");
    body.classList.remove("bodyScroll");
    mobileNavBtn.classList.remove("opened");
  });
});
