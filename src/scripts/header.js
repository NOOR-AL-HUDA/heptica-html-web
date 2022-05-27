<<<<<<< HEAD
window.addEventListener("scroll", function () {
  const mainNavEle = document.querySelector(".header");
  mainNavEle.classList.toggle("sticky", window.scrollY > 75);
});

// header navbar here
const NavbarLinksList = [
  { name: "Home", link: "/" },
  { name: "LOL", link: "/game1" },
  { name: "Valorant", link: "/somethingSomething" },
  { name: "GTA", link: "/somethingSomething" },
  { name: "Mario", link: "/somethingSomething" },
];

const headerElement = document.querySelector("header");

// main navbar
const mainNavElement = document.querySelector("#mainNavList");

const MainNavbarLinks = NavbarLinksList.map((link) => {
  return `<li class="mainNavItem"><a href="${link.link}">${link.name}</a></li>`;
}).join("");

mainNavElement.innerHTML = MainNavbarLinks;

// mobile navbar
const mobileNavElement = document.querySelector("#mobileNavList");

const mobileNavbarLinks = NavbarLinksList.map((link) => {
  return `<li class="mainNavItem"><a href="${link.link}">mobile ${link.name}</a></li>`;
}).join("");

mobileNavElement.innerHTML = mobileNavbarLinks;

// drawer function
const drawer = document.querySelector(".mobileNav");
const drawerBtn = document.querySelector(".navbarToggleBtn");

drawerBtn.addEventListener("click", function () {
  console.log("clicked");
  drawer.classList.toggle("open");
});

// footer
const copyright = document.querySelector(".copyright");

copyright.innerHTML = `<p>&copy; ${new Date().getFullYear()} Games Consult</p>`;
=======
window.addEventListener("scroll", function () {
  const mainNavEle = document.querySelector(".header");
  mainNavEle.classList.toggle("sticky", window.scrollY > 75);
});

// header navbar here
const NavbarLinksList = [
  { name: "Home", link: "/" },
  { name: "LOL", link: "/game1" },
  { name: "Valorant", link: "/somethingSomething" },
  { name: "GTA", link: "/somethingSomething" },
  { name: "Mario", link: "/somethingSomething" },
];

const headerElement = document.querySelector("header");

// main navbar
const mainNavElement = document.querySelector("#mainNavList");

const MainNavbarLinks = NavbarLinksList.map((link) => {
  return `<li class="mainNavItem"><a href="${link.link}">${link.name}</a></li>`;
}).join("");

mainNavElement.innerHTML = MainNavbarLinks;

// mobile navbar
const mobileNavElement = document.querySelector("#mobileNavList");

const mobileNavbarLinks = NavbarLinksList.map((link) => {
  return `<li class="mainNavItem"><a href="${link.link}">mobile ${link.name}</a></li>`;
}).join("");

mobileNavElement.innerHTML = mobileNavbarLinks;

// drawer function
const drawer = document.querySelector(".mobileNav");
const drawerBtn = document.querySelector(".navbarToggleBtn");

drawerBtn.addEventListener("click", function () {
  console.log("clicked");
  drawer.classList.toggle("open");
});

// footer
const copyright = document.querySelector(".copyright");

copyright.innerHTML = `<p>&copy; ${new Date().getFullYear()} Games Consult</p>`;
>>>>>>> 257af18d0dbeed7ca287683ae098ef761345db65
