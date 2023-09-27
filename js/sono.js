"use strict";

const btnAlerhand = document.querySelector(
  `.section-sono-info__faculty--card-1`
);
const btnIlya = document.querySelector(`.section-sono-info__faculty--card-2`);
const btnAnnette = document.querySelector(
  `.section-sono-info__faculty--card-3`
);
const btnClose = document.querySelector(`.close-modal`);

const modalBG = document.querySelector(`.general-modal__bg`);
const modalAlerhand = document.querySelector(`.section-sono-modal__doc--1`);
const modalIlya = document.querySelector(`.section-sono-modal__doc--2`);
const modalAnnette = document.querySelector(`.section-sono-modal__doc--3`);

const openModalHandler = () => {
  modalBG.classList.remove(`hidden`);
  btnClose.classList.remove(`hidden`);
  document.body.style.overflowY = `hidden`;
};

const openAlerhandHandler = () => {
  modalAlerhand.classList.remove(`hidden`);
  openModalHandler();
};

const openIlyaHandler = () => {
  modalIlya.classList.remove(`hidden`);
  openModalHandler();
};

const openAnnetteHandler = () => {
  modalAnnette.classList.remove(`hidden`);
  openModalHandler();
};

const closeModalHandler = () => {
  modalBG.classList.add(`hidden`);
  btnClose.classList.add(`hidden`);
  document.body.style.overflowY = `scroll`;
  modalAlerhand.classList.add(`hidden`);
  modalIlya.classList.add(`hidden`);
  modalAnnette.classList.add(`hidden`);
};

btnAlerhand.addEventListener(`click`, openAlerhandHandler);
btnIlya.addEventListener(`click`, openIlyaHandler);
btnAnnette.addEventListener(`click`, openAnnetteHandler);
modalBG.addEventListener(`click`, closeModalHandler);
btnClose.addEventListener(`click`, closeModalHandler);
