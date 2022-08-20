//Funções da aplicação

//Função para validar os campos, para aceitar só números
export function notAumber(value) {
  return isNaN(value) || value == ''
  //Função isNan nativa do js, ela analisa um valor se ele é um número ou não, no caso se for um número ele retorna falso//
  //Temos que usar a condição || value == '' pq a função se não tiver essa validação e for vazia ele retorna falso mesmo não tendo nada, no caso ele considara um número um campo vazio.//
}

//Função para calcular IMC
export function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
