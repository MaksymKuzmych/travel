const burgerBtn = document.querySelector('.header__burger-button')
const burgerCancel = document.querySelector('.burger-menu__cancel')
const burgerMenu = document.querySelector('.burger-menu')
const burgerItem = document.querySelectorAll('.burger-menu__item')
const wrapper = document.querySelector('.wrapper')

function burgerOpen() {
  setTimeout(function () {
    burgerMenu.classList.remove('closed')
    burgerMenu.classList.add('opened')
    setTimeout(function () {
      burgerMenu.classList.remove('burger-menu_right170')
      burgerMenu.classList.add('burger-menu_right0')
      wrapper.classList.remove('closed')
      wrapper.classList.add('opened')
    }, 300)
  }, 0)
}

function burgerClose() {
  setTimeout(function () {
    burgerMenu.classList.remove('burger-menu_right0')
    burgerMenu.classList.add('burger-menu_right170')
    setTimeout(function () {
      burgerMenu.classList.remove('opened')
      burgerMenu.classList.add('closed')
      wrapper.classList.remove('opened')
      wrapper.classList.add('closed')
    }, 300)
  }, 0)
}

burgerBtn.addEventListener('click', burgerOpen)

burgerCancel.addEventListener('click', burgerClose)

burgerItem.forEach((el) => {
  el.addEventListener('click', burgerClose)
})

wrapper.addEventListener('click', (event) => {
  if (event.target.classList.contains('wrapper')) {
    burgerClose()
  }
})
