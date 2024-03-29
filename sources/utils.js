import { monthNames } from "@/global/months";

// Animation with wowjs
export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};

// Sidebar
export const sidebarOnclick = () => {
  const body = document.querySelector("body");
  body.classList.toggle("side-content-visible");
};

// Sticky nav
const stickyNav_ = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll(".main-header");
  for (let i = 0; i < stickys.length; i++) {
    const sticky = stickys[i];
    if (sticky) {
      if (offset > 10) {
        sticky.classList.add("fixed-header");
      } else {
        sticky.classList.remove("fixed-header");
      }
    }
  }
};
export const stickyNav = (stickyClass) =>
  window.addEventListener("scroll", stickyNav_);

// Scroll top
export const scrollTopFun = () => {
  let scrollUp = document.getElementById("scroll-top"),
    lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    let st = window.scrollY;
    if (st > 110) {
      scrollUp.classList.add("d-block");
    } else {
      scrollUp.classList.remove("d-block");
    }
  });
};

// Paggination
export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};
// change pagination and update pagination and content
export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};

// fetcher
export const fetcher = (...args) => fetch(...args).then((res) => res.json());

// generateRandomString
export const generateRandomString = () => {
  const LENGTH_STRING = 24;
  const ALLOWED_CHARACTERS = "0123456789abcdef";

  let randomString = "";
  for (let i = 0; i < LENGTH_STRING; i++) {
    const randomCharacter =
      ALLOWED_CHARACTERS[Math.floor(Math.random() * ALLOWED_CHARACTERS.length)];
    randomString += randomCharacter;
  }
  return randomString;
};

export const isNotEmptyObject = (obj) => {
  return Object.values(obj).length > 0;
};

export const formatDateTime = (currentDate) => {
  // Array of abbreviated month names
  const date = new Date(currentDate);

  // Get date components
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes();

  // Determine if it's AM or PM
  const period = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12 || 12;

  // Ensure minutes have two digits
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  // Construct the formatted string
  const formattedDateTime = `${month} ${day}, ${year} ${hours}:${formattedMinutes} ${period}`;

  return formattedDateTime;
};

export const typeContract = {
  "full-time": "Jornada completa",
  "part-time": "Jornada parcial",
  autonomous: "Autónomo",
  "temporary-contract": "Contrato temporal",
  "practice-contract": "Contrato de practica",
};
