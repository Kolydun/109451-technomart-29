'use strict'

const writeUsButton = document.querySelector('.red-button-contact-us');
const writeUsForm = document.querySelector('.write-us');
const writeUsClose = document.querySelector('.modal-close');
const itemsList = document.getElementById('catalog-items-list').getElementsByTagName('li');
const basketModal = document.querySelector('.modal-basket');
const closeBasketModalButton = document.querySelector('.modal-basket-close')
const contShoppingButton = document.querySelector('.basket-buttons-continue')
const userName = document.querySelector('#user-name');
const userEmail = document.querySelector('#user-email');
const userMessage = document.querySelector('#user-text');
let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('Имя пользователя');
  storage = localStorage.getItem('E-mail пользователя');
  storage = localStorage.getItem('Текст письма');
} catch (err) {
  isStorageSupport = false;
}

writeUsClose.addEventListener('click', function () {
  writeUsForm.classList.add('visual-hidden');
  writeUsForm.classList.remove('modal-show');
})

writeUsButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  writeUsForm.classList.remove('visual-hidden');
  writeUsForm.classList.add('modal-show');
})

closeBasketModalButton.addEventListener('click', function () {
  basketModal.classList.add('visual-hidden')
})

contShoppingButton.addEventListener('click', function (evt) {
  evt.preventDefault()
  basketModal.classList.add('visual-hidden')
})

writeUsForm.addEventListener('submit', function (evt) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault()
  } else {
    if (isStorageSupport) {
      localStorage.setItem('Имя пользователя', userName.value);
      localStorage.setItem('E-mail пользователя', userEmail.value);
      localStorage.setItem('Текст письма', userMessage.value);
    }
  }
})

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && !writeUsForm.classList.contains('visual-hidden')) {
    evt.preventDefault();
    writeUsForm.classList.add('visual-hidden');
  }
  if (evt.keyCode === 27 && !basketModal.classList.contains('visual-hidden')) {
    evt.preventDefault();
    basketModal.classList.add('visual-hidden');
  }
})

function showItemMenu() {
  for (let i = 0; i < itemsList.length; i++) {
    itemsList[i].addEventListener('mouseover', function () {
      const itemImage = itemsList[i].querySelector('.img-item');
      const itemMenu = itemsList[i].querySelector('.item-hoover-buttons');
      itemImage.classList.add('visual-hidden');
      itemMenu.classList.remove('visual-hidden');
    })
  }
}

function hideItemMenu() {
  for (let i = 0; i < itemsList.length; i++) {
    itemsList[i].addEventListener('mouseout', function () {
      const itemImage = itemsList[i].querySelector('.img-item');
      const itemMenu = itemsList[i].querySelector('.item-hoover-buttons');
      itemImage.classList.remove('visual-hidden');
      itemMenu.classList.add('visual-hidden');
    })
  }
}

function addToCart() {
  for (let i = 0; i < itemsList.length; i++) {
    itemsList[i].addEventListener('mouseover', function () {
      const addToCartButton = itemsList[i].querySelector('.to-basket');
      addToCartButton.addEventListener('click', function (evt) {
        evt.preventDefault()
        basketModal.classList.remove('visual-hidden')
      })
    })
  }
}

showItemMenu()
hideItemMenu()
addToCart()

