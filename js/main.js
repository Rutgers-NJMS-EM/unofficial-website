"use strict";

// BUTTONS

const btnMainprocedure1 = document.querySelector(`.procedure-1`);
const btnMainprocedure2 = document.querySelector(`.procedure-2`);
const btnMainprocedure3 = document.querySelector(`.procedure-3`);

const btnClose = document.querySelector(`.close-modal`);

// MODALS

const btnModalBg = document.querySelector(`.general-modal__bg`);
const modalVideo1 = document.querySelector(
  `.section-video-modal__container--1`
);
const modalVideo2 = document.querySelector(
  `.section-video-modal__container--2`
);
const modalVideo3 = document.querySelector(
  `.section-video-modal__container--3`
);
const videos = document.querySelectorAll(`video`);

// FUNCTIONS

const stopVideo = () => {
  for (let video of videos) {
    video.pause();
  }
};

const openModalHandler = () => {
  btnModalBg.classList.remove(`hidden`);
  btnClose.classList.remove(`hidden`);
  document.body.style.overflowY = `hidden`;
};

const closeModalHandler = () => {
  btnModalBg.classList.add(`hidden`);
  btnClose.classList.add(`hidden`);
  modalVideo1.classList.add(`hidden`);
  modalVideo2.classList.add(`hidden`);
  modalVideo3.classList.add(`hidden`);
  document.body.style.overflowY = `visible`;
  stopVideo();
};

//FUNCTIONS

const procedure1ModalHandler = () => {
  modalVideo1.classList.remove(`hidden`);
  openModalHandler();
};
const procedure2ModalHandler = () => {
  modalVideo2.classList.remove(`hidden`);
  openModalHandler();
};
const procedure3ModalHandler = () => {
  modalVideo3.classList.remove(`hidden`);
  openModalHandler();
};

// EVENT LISTENERS

btnClose.addEventListener(`click`, closeModalHandler);
btnModalBg.addEventListener(`click`, closeModalHandler);
btnMainprocedure1.addEventListener(`click`, procedure1ModalHandler);
btnMainprocedure2.addEventListener(`click`, procedure2ModalHandler);
btnMainprocedure3.addEventListener(`click`, procedure3ModalHandler);
