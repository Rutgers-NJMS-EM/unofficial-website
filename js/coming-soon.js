"use strict";

const btnComingSoon = document.querySelectorAll(`.page-coming-soon`);
const btnCloseComingSoon = document.querySelector(`.close-modal__coming-soon`);
const bgComingSoon = document.querySelector(`.coming-soon-modal`);

// FUNCTIONS
const closeComingSoonModalHandler = () => {
  btnCloseComingSoon.classList.add(`hidden`);
  bgComingSoon.classList.add(`hidden`);
  document.body.style.overflowY = `visible`;
};

const openComingSoonModalHandler = () => {
  btnCloseComingSoon.classList.remove(`hidden`);
  bgComingSoon.classList.remove(`hidden`);
  document.body.style.overflowY = `hidden`;
};

// EVENT LISTENERS
for (let btn of btnComingSoon) {
  btn.addEventListener(`click`, openComingSoonModalHandler);
}
btnCloseComingSoon.addEventListener(`click`, closeComingSoonModalHandler);
bgComingSoon.addEventListener(`click`, closeComingSoonModalHandler);
