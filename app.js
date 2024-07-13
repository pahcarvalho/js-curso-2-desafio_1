let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function clicarBotao() {
    alert('O botão foi clicado!');
}

function amarJS() {
    alert('Eu amo JS!');
}

function nomeCidade() {
    let cidade = prompt('Qual o nome da cidade do Brasil?');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function somarNumero() {
    let numero1 = prompt('Qual o primeiro número?');
    let numero2 = prompt('Qual o segundo número?');

    let soma = parseInt(numero1)+ parseInt(numero2);

    alert(`A soma dos números ${numero1} e ${numero2} é: ${soma} .`);
}