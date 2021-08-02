   //Declarar as variáveis que vou trabalhar 
    var inputValor = document.querySelector('#valor-hora') // aqui é a linha do codigo que puxa do id a interação da primeira caixinha no site
    var inputHoras = document.querySelector('#horas-projeto') // aqui é a linha do codigo que puxa do id a interação da segunda caixinha no site
    var resultado = document.querySelector('span') // aqui não usou id porque só tem um span, de acordo com o que a professora descreveu e criamos essa variavel pra armazenar um resultado e mostrar na tela

function calcular(){ //a funcao do botao calcular
    
    var valor = inputValor.valueAsNumber
    var horas = inputHoras.valueAsNumber

    var total = valor * horas
    var valorDuasCasas = total.toFixed(2)

    resultado.textContent = "O valor total do seu projeto é R$ "+ valorDuasCasas+" reais."
    
}
  