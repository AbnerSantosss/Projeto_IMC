import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notAumber, calculateIMC } from './functions.js'
import { DarkModel } from './dark-theme.js'

//----Variaveis---//

const form = document.querySelector('form')
const inputweight = document.querySelector('#weight')
const inputHeinght = document.querySelector('#height')

inputHeinght.oninput = event => {
  AlertError.close()
}
inputweight.oninput = event => {
  AlertError.close()
}

//Com o objeto a baixo nós podemos colocar funções ou outro dado no formato chave valor. e acessar tanto a funções quanto variaveis.

form.onsubmit = function (event) {
  event.preventDefault() //removendo o padrão do formulário, para não recarregar a página ao clicae no  submit//

  const weight = inputweight.value //pegando oq foi digitado no campo//
  const height = inputHeinght.value

  const showAlertError = notAumber(weight) || notAumber(height)

  if (showAlertError) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calculateIMC(weight, height)

  const message = `Seu IMC é de ${result}`

  Modal.menssage.innerText = message

  Modal.open()
}

//Aqui estou acessando o input(elemento/dentro dele, ou oq acontece nele) do formulário e setendo o evento como parametro, e se tiver algum evento exercutar a função//
