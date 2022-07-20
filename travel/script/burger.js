const burgerBtn = document.querySelector('.header__burger-button')
const burgerCancel = document.querySelector('.burger-menu__cancel')
const burgerMenu = document.querySelector('.burger-menu')
const wrapper = document.querySelector('.wrapper')
const burgerItem = document.querySelectorAll('.burger-menu__item')

function close() {
  setTimeout(function () {
    burgerMenu.classList.remove('burger-menu_right0')
    burgerMenu.classList.add('burger-menu_right170')
    setTimeout(function () {
      burgerMenu.classList.remove('burger-menu_opened')
      burgerMenu.classList.add('closed')
      wrapper.classList.remove('wrapper_opened')
      wrapper.classList.add('wrapper_closed')
    }, 300)
  }, 0)
}

function open() {
  setTimeout(function () {
    burgerMenu.classList.remove('burger-menu_closed')
    burgerMenu.classList.add('burger-menu_opened')
    setTimeout(function () {
      burgerMenu.classList.remove('burger-menu_right170')
      burgerMenu.classList.add('burger-menu_right0')
      wrapper.classList.remove('wrapper_closed')
      wrapper.classList.add('wrapper_opened')
    }, 300)
  }, 0)
}

burgerBtn.addEventListener('click', open)

burgerCancel.addEventListener('click', close)

burgerItem.forEach((el) => {
  el.addEventListener('click', close)
})
