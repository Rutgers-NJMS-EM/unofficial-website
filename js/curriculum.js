"use strict";

// BUTTONS
const btnApply = document.querySelector(`#apply`);

const btnBlockLearn1 = document.querySelector(
  `.section-blocks__card--button-1`
);
const btnBlockLearn2 = document.querySelector(
  `.section-blocks__card--button-2`
);
const btnBlockLearn3 = document.querySelector(
  `.section-blocks__card--button-3`
);
const btnBlockLearn4 = document.querySelector(
  `.section-blocks__card--button-4`
);

const btnDidacticLearn1 = document.querySelector(
  `.section-didactics__card--btn-1`
);
const btnDidacticLearn2 = document.querySelector(
  `.section-didactics__card--btn-2`
);
const btnDidacticLearn3 = document.querySelector(
  `.section-didactics__card--btn-3`
);
const btnDidacticLearn4 = document.querySelector(
  `.section-simulation-curriculum__box--btn`
);

// MODAL WINDOWS
const bgModal = document.querySelector(`.curriculum-modal__bg`);
const btnCloseModal = document.querySelector(`.close-modal`);

const blockModalEM1 = document.querySelector(`.curriculum-modal__em1`);
const blockModalEM2 = document.querySelector(`.curriculum-modal__em2`);
const blockModalEM3 = document.querySelector(`.curriculum-modal__em3`);
const blockModalEM4 = document.querySelector(`.curriculum-modal__em4`);

const applyModal = document.querySelector(`.curriculum-modal__apply`);

const didacticModal1 = document.querySelector(`.didactics-modal__card--1`);
const didacticModal2 = document.querySelector(`.didactics-modal__card--2`);
const didacticModal3 = document.querySelector(`.didactics-modal__card--3`);
const didacticModal4 = document.querySelector(`.didactics-modal__card--4`);

// FUNCTIONS
const closeBGHandler = () => {
  bgModal.classList.remove(`hidden`);
  btnCloseModal.classList.remove(`hidden`);
};

const applyBtnHandler = () => {
  applyModal.classList.remove(`hidden`);
  closeBGHandler();
  document.body.style.overflowY = `hidden`;
};
const block1BtnHandler = () => {
  blockModalEM1.classList.remove(`hidden`);
  closeBGHandler();
  document.body.style.overflowY = `hidden`;
};
const block2BtnHandler = () => {
  blockModalEM2.classList.remove(`hidden`);
  closeBGHandler();
  document.body.style.overflowY = `hidden`;
};
const block3BtnHandler = () => {
  blockModalEM3.classList.remove(`hidden`);
  closeBGHandler();
  document.body.style.overflowY = `hidden`;
};
const block4BtnHandler = () => {
  blockModalEM4.classList.remove(`hidden`);
  closeBGHandler();
  document.body.style.overflowY = `hidden`;
};
const didactic1BtnHandler = () => {
  didacticModal1.classList.remove(`hidden`);
  closeBGHandler();
  document.body.style.overflowY = `hidden`;
};
const didactic2BtnHandler = () => {
  didacticModal2.classList.remove(`hidden`);
  closeBGHandler();
  document.body.style.overflowY = `hidden`;
};
const didactic3BtnHandler = () => {
  didacticModal3.classList.remove(`hidden`);
  closeBGHandler();
  document.body.style.overflowY = `hidden`;
};
const didactic4BtnHandler = () => {
  didacticModal4.classList.remove(`hidden`);
  closeBGHandler();
  document.body.style.overflowY = `hidden`;
};

// CLOSE MODALs
const closeModalHandler = () => {
  applyModal.classList.add(`hidden`);
  blockModalEM1.classList.add(`hidden`);
  blockModalEM2.classList.add(`hidden`);
  blockModalEM3.classList.add(`hidden`);
  blockModalEM4.classList.add(`hidden`);
  didacticModal1.classList.add(`hidden`);
  didacticModal2.classList.add(`hidden`);
  didacticModal3.classList.add(`hidden`);
  didacticModal4.classList.add(`hidden`);
  bgModal.classList.add(`hidden`);
  btnCloseModal.classList.add(`hidden`);
  document.body.style.overflowY = `visible`;
};

// EVENT LISTENERS
btnApply.addEventListener(`click`, applyBtnHandler);
btnBlockLearn1.addEventListener(`click`, block1BtnHandler);
btnBlockLearn2.addEventListener(`click`, block2BtnHandler);
btnBlockLearn3.addEventListener(`click`, block3BtnHandler);
btnBlockLearn4.addEventListener(`click`, block4BtnHandler);
btnDidacticLearn1.addEventListener(`click`, didactic1BtnHandler);
btnDidacticLearn2.addEventListener(`click`, didactic2BtnHandler);
btnDidacticLearn3.addEventListener(`click`, didactic3BtnHandler);
btnDidacticLearn4.addEventListener(`click`, didactic4BtnHandler);
btnCloseModal.addEventListener(`click`, closeModalHandler);
bgModal.addEventListener(`click`, closeModalHandler);
