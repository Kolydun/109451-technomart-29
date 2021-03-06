'use strict'

const itemsList = document.getElementById('catalog-items-list').getElementsByTagName('li');
const basketModal = document.querySelector('.modal-basket');
const closeBasketModalButton = document.querySelector('.modal-basket-close')
const contShoppingButton = document.querySelector('.basket-buttons-continue')


closeBasketModalButton.addEventListener('click', function () {
  basketModal.classList.add('visual-hidden')
})

contShoppingButton.addEventListener('click', function (evt) {
  evt.preventDefault()
  basketModal.classList.add('visual-hidden')
})
window.addEventListener('keydown', function (evt) {
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
