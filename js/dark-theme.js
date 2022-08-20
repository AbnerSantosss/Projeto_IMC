export const DarkModel = {
  darkAcitive: document.querySelector('.dark-active'),

  containerDark: document.querySelector('.dark-model-teme'),

  btnDay: document.querySelector('.svg-day'),

  btnDark: document.querySelector('.svg-dark')
}

DarkModel.btnDay.addEventListener('click', () => {
  activeHiden()
  mudetheme()
})

DarkModel.btnDark.addEventListener('click', () => {
  activeHiden()
  mudetheme()
})

function activeHiden() {
  DarkModel.btnDark.classList.toggle('hide')
  DarkModel.btnDay.classList.toggle('hide')
}

function mudetheme() {
  DarkModel.darkAcitive.classList.toggle('dark')
}
