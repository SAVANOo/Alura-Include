// 6. Escreva um programa para encontrar o fatorial do número 12.
function fatorial(num) {
    let resultFatorial = 1;
    for (let i = 1; i <= num; i++) {
        resultFatorial *= i;
    }
    return resultFatorial;
}
console.log(`O fatorial de 12 é ${fatorial(12)}`)