    //console.log("Hello World")

    var resultado = document.querySelector("span"); //aqui foi chamado span porque só tem um span   
    var inputSalario =  document.querySelector("#ganho-mes") // aqui foi usado identificador porque tem mais de um
    console.log(inputSalario)

    var inputHoras = document.querySelector("#horas-dia")
    console.log(inputHoras)
    /* essas variaveis estao fora da função por oas praticas, 
    de acordo com a professora */

    function calcularValorHora(){ // função do onclick
    
//var salario = inputSalario.value //precisa haver a conversão da string para numero   
    var salario = inputSalario.valueAsNumber
    var horas = inputHoras.valueAsNumber
//aqui a entrada não é mais letra e sim numeros que podem ser somados
//var horas = inputHoras.value // toda vez que a variavel é declarada e nao é usada ela fica cinza
    var horasMes = horas * 22
    var valorHora = salario / horasMes // aqui o resultado mostra varias casas decimais
    var valorDuasCasas = valorHora.toFixed(2) // o tofixed vai dizer que só quero que mostre duas casas decimais   
//var soma = salario + horas 
    console.log(valorDuasCasas) 

/*Agora falta interagir com a parte do valor R$0,00 que é o id:span
document.querySelector("span")
span#resposta
<span id="resposta">R$ 0,00</span><small>/hora</small>
*/
/* depois de criado a variavel spanHora para ser coletado pelo 
DOM-documentquery
selector assim como inputSalario e inputHoras e depois pego 
o textContent e jogo para o resultado da tela */
    resultado.textContent = "R$ " + valorDuasCasas //textContent pega o conteudo do input e mostra que seria o valorDuasCasas
}

