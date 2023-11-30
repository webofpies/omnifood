const menuBtnEle = document.querySelector(".button-mobile-nav");
const headerEle = document.querySelector(".header");
const navLinkElements = document.querySelectorAll(".nav-link");

menuBtnEle.addEventListener("click", function () {
  headerEle.classList.toggle("nav-open");
});

// close nav menu if clicked on menu item
navLinkElements.forEach((navLink) =>
  navLink.addEventListener("click", function () {
    headerEle.classList.remove("nav-open");
  })
);

const sectionHeroEle = document.querySelector(".main-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEle);
