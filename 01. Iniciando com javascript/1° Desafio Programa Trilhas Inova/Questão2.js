// 2. Tais está participando de um sorteio na Loteria e recebeu uma lista de números aleatórios para poder apostar. Os números foram: 15, 8, 90, 75, 102, 6 e 2. Por ser bastante cautelosa, ela gostaria de saber qual é o menor número e qual é o maior número.
// **Ajude Tais e escreva um programa que faça a lógica de programação para organização dos números, receba os números da lista e imprima na tela o menor número digitado e o maior número digitado.**
let lista = [15, 8, 90, 75, 102, 6, 2];
let menorNumero = lista[0];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] < menorNumero) {
        menorNumero = lista[i];
    };
}

console.log(`O menor número é ${menorNumero}`)