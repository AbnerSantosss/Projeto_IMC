//----Variaveis---//

const form = document.querySelector('form')
const inputweight = document.querySelector('#weight')
const inputHeinght = document.querySelector('#height')

//Função em forma de objeto onde podemos colocar dentro de uma variavel

const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  menssage: document.querySelector('.title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

form.onsubmit = function (event) {
  event.preventDefault() //removendo o padrão do formulário, para não recarregar a página ao clicae no  submit//

  const weight = inputweight.value //pegando oq foi digitado no campo
  const height = inputHeinght.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`
  Modal.menssage.innerText = message
  Modal.open()
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
