// 11. Crie uma lógica para calcular a idade de uma pessoa. Essa lógica deverá receber um valor de ano de nascimento no formato “yyyy-MM-dd” e deverá retornar o número da idade da pessoa como resultado.
function calcularIdade(dataDeNascimento) {
    let date = new Date(dataDeNascimento);
    let monthDifference = Date.now() - date.getTime();
    let ageDifferenceFormatted = new Date(monthDifference);
    let year = ageDifferenceFormatted.getUTCFullYear();
    let age = Math.abs(year - 1970);
    return age;
}
calcularIdade("2004-01-04");
