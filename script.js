// Showing our tabs functionality
const tabs = document.querySelectorAll(".operations__tab"); // Our button
const tabsContainer = document.querySelector(".features__container"); // Whole feature container with buttons etc.
const tabsContent = document.querySelectorAll(".operations__content"); // Content of our hidden contents

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Sticky navigation

const header = document.querySelector(".header");
const nav = document.querySelector(".section__navigation");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// REVEAL SECTIONS

// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// FAQ component reveal

let toggles = document.getElementsByClassName("button__faq");
let contentDiv = document.getElementsByClassName("answer");
let arrow = document.getElementsByClassName("img-arrow");
let whole = document.getElementsByClassName("question");

// for (let i = 0; i < toggles.length; i++) {
//   toggles[i].addEventListener("click", () => {
//     if (!contentDiv[i].classList.contains("hidden")) {
//       contentDiv[i].classList.add("hidden");
//     } else {
//       contentDiv[i].classList.remove("hidden");
//     }
//   });
// }

// for (let i = 0; i < arrow.length; i++) {
//   arrow[i].addEventListener("click", () => {
//     if (!contentDiv[i].classList.contains("hidden")) {
//       contentDiv[i].classList.add("hidden");
//     } else {
//       contentDiv[i].classList.remove("hidden");
//     }
//   });
// }

for (let i = 0; i < whole.length; i++) {
  whole[i].addEventListener("click", () => {
    if (!contentDiv[i].classList.contains("hidden")) {
      contentDiv[i].classList.add("hidden");
      toggles[i].classList.remove("orangers");
      arrow[i].classList.remove("img-arrow-close");
    } else {
      contentDiv[i].classList.remove("hidden");
      toggles[i].classList.add("orangers");
      arrow[i].classList.add("img-arrow-close");
    }
  });
}

// EMAIL VALIDATION

// const email = document.getElementById("email");
// const error = document.querySelector(".error-text");
// const btn = document.querySelector("stayup__button");
// let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// function check() {
//   if (email.ariaValueMax.match(pattern)) {
//   } else {
//     alert("Error");
//   }
// }

//Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const HeaderEl = document.querySelector(".section__navigation");

btnNavEl.addEventListener("click", function () {
  HeaderEl.classList.toggle("nav-open");
});
