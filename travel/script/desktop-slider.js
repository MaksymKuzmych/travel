let slider = document.querySelector('.destinations__slider')
let arrowLeft = document.querySelector('.slider__arrow_left')
let arrowRight = document.querySelector('.slider__arrow_right')
let dots = document.querySelectorAll('.dots__item')
let activeDot = document.querySelector('.dots__item_active')
let position = 0
let width = +document.documentElement.clientWidth

arrowLeft.addEventListener('click', function () {
  if (+document.documentElement.clientWidth > 1440) {
    width = 1440
  }

  if (position < (width * 59.75) / 100) {
    position += (width * 59.75) / 100
    slider.style.transform = `translateX(${position}px)`
  }
  if (dots[1].classList.contains('dots__item_active')) {
    dots[1].classList.toggle('dots__item_active')
    dots[0].classList.toggle('dots__item_active')
  } else if (dots[2].classList.contains('dots__item_active')) {
    dots[2].classList.toggle('dots__item_active')
    dots[1].classList.toggle('dots__item_active')
  }
})

arrowRight.addEventListener('click', function () {
  if (+document.documentElement.clientWidth > 1440) {
    width = 1440
  }

  if (position > (-width * 59.75) / 100) {
    position -= (width * 59.75) / 100
    slider.style.transform = `translateX(${position}px)`
  }
  if (dots[0].classList.contains('dots__item_active')) {
    dots[0].classList.toggle('dots__item_active')
    dots[1].classList.toggle('dots__item_active')
  } else if (dots[1].classList.contains('dots__item_active')) {
    dots[1].classList.toggle('dots__item_active')
    dots[2].classList.toggle('dots__item_active')
  }
})

window.addEventListener('resize', function () {
  width = +document.documentElement.clientWidth
  position = 0
  slider.style.transform = `translateX(${position}px)`
  if (dots[0].classList.contains('dots__item_active') || dots[2].classList.contains('dots__item_active')) {
    dots[0].classList.remove('dots__item_active')
    dots[1].classList.add('dots__item_active')
    dots[2].classList.remove('dots__item_active')
  }
})
