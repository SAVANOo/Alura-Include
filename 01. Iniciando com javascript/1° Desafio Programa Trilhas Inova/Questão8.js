// 8. Em um sistema de biblioteca, é necessário calcular a multa a ser paga por um usuário que atrasou a devolução de um livro. A multa é de R$ 0,50 por dia de atraso. O usuário atrasou a devolução do livro em 7 dias. Crie um algoritmo que faça o cálculo total que o aluno deverá pagar a biblioteca.
function fineToPay(daysLate) {
    let ratePerDay = 0.50;
    return (ratePerDay * daysLate).toFixed(2);
}
console.log(`A multa a ser paga por 7 dias de atraso é R$${fineToPay(7)}`)