let popup = document.querySelector('.login-popup')
let loginButton = document.querySelector('.header__button')
let loginButtonMobile = document.querySelector('.item_account')
let registerLink = document.querySelector('.register__link')
let loginLink = document.querySelector('.login__link')
let submitButton = document.querySelector('.sign-form__submit')
let email = document.querySelector('.input_email')
let password = document.querySelector('.input_password')

function popupOpen() {
  setTimeout(function () {
    popup.classList.remove('closed')
    popup.classList.add('opened')
    setTimeout(function () {
      popup.classList.remove('login-popup_top-670')
      popup.classList.add('login-popup_top60')
      wrapper.classList.remove('closed')
      wrapper.classList.add('opened')
    }, 300)
  }, 0)
}

function popupClose() {
  setTimeout(function () {
    popup.classList.remove('login-popup_top60')
    popup.classList.add('login-popup_top-670')
    setTimeout(function () {
      popup.classList.remove('opened')
      popup.classList.add('closed')
      wrapper.classList.remove('opened')
      wrapper.classList.add('closed')
    }, 300)
  }, 0)
}

loginButton.addEventListener('click', popupOpen)

loginButtonMobile.addEventListener('click', popupOpen)

registerLink.addEventListener('click', function (event) {
  event.preventDefault()
  popup.style.height = '436px'
  document.querySelector('.login-popup__title').textContent = 'Create account'
  document.querySelector('.login-popup__title').style.marginBottom = '10px'
  document.querySelector('.button_facebook').style.display = 'none'
  document.querySelector('.button_google').style.display = 'none'
  document.querySelector('.or-wrapper').style.display = 'none'
  document.querySelector('.sign-form__submit').value = 'Sign Up'
  document.querySelector('.sign-form__submit').style.marginBottom = '25px'
  document.querySelector('.forgot-password').style.display = 'none'
  document.querySelector('.login-popup__register').style.display = 'none'
  document.querySelector('.login-popup__login').style.display = 'block'
})

loginLink.addEventListener('click', function (event) {
  event.preventDefault()
  popup.style.height = '660px'
  document.querySelector('.login-popup__title').textContent = 'Log in to your account'
  document.querySelector('.login-popup__title').style.marginBottom = '30px'
  document.querySelector('.button_facebook').style.display = 'flex'
  document.querySelector('.button_google').style.display = 'flex'
  document.querySelector('.or-wrapper').style.display = 'block'
  document.querySelector('.sign-form__submit').value = 'Sign In'
  document.querySelector('.sign-form__submit').style.marginBottom = '10px'
  document.querySelector('.forgot-password').style.display = 'block'
  document.querySelector('.login-popup__login').style.display = 'none'
  document.querySelector('.login-popup__register').style.display = 'block'
})

submitButton.addEventListener('click', (event) => {
  event.preventDefault()
  if (email.value === '' || password.value === '') {
    alert("Each input field must be completed. Let's share your data with me.")
  } else {
    alert(`Email: ${email.value}\nPassword: ${password.value}`)
  }
})

wrapper.addEventListener('click', function (event) {
  if (event.target.classList.contains('wrapper')) {
    popupClose()
  }
})
