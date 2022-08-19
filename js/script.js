import { Modal } from './modal.js'

//----Variaveis---//

const form = document.querySelector('form')
const inputweight = document.querySelector('#weight')
const inputHeinght = document.querySelector('#height')

//Com o objeto a baixo nós podemos colocar funções ou outro dado no formato chave valor. e acessar tanto a funções quanto variaveis.

form.onsubmit = function (event) {
  event.preventDefault() //removendo o padrão do formulário, para não recarregar a página ao clicae no  submit//

  const weight = inputweight.value //pegando oq foi digitado no campo
  const height = inputHeinght.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`
  Modal.menssage.innerText = message
  Modal.open()
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
