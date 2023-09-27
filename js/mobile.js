"use strict";

const btnHamburger = document.querySelector(`.section-hamburger__nav`);
const modalMobileNav = document.querySelector(`.section-mobile__nav`);
const modalMobileNavIcon1 = document.querySelector(
  `.section-hamburger__nav--line-1`
);
const modalMobileNavIcon2 = document.querySelector(
  `.section-hamburger__nav--line-2`
);
const modalMobileNavIcon3 = document.querySelector(
  `.section-hamburger__nav--line-3`
);

const modalMobileBG = document.querySelector(`.section-mobile__bg`);

const toggleMobileNavHandler = () => {
  modalMobileNav.classList.toggle(`nav-menu-open`);
  modalMobileNavIcon1.classList.toggle(`open-line__1`);
  modalMobileNavIcon2.classList.toggle(`open-line__2`);
  modalMobileNavIcon3.classList.toggle(`open-line__3`);
  modalMobileBG.classList.toggle(`mobile-bg-open`);

  modalMobileNav.classList.contains(`nav-menu-open`)
    ? (document.body.style.overflowY = `hidden`)
    : (document.body.style.overflowY = `visible`);
};
btnHamburger.addEventListener(`click`, toggleMobileNavHandler);
