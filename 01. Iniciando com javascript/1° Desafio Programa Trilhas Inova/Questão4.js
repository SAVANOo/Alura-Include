// 4. Em uma pequena vila, o fazendeiro precisa separar os números primos para determinar quantos novos campos plantar. Ele pede sua ajuda para identificar esses números criando um algoritmos. Os números são: 23, 16, 11, 8, 19, 14, 5, 21.

function isPrime(num) {
    let counter = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            counter++;
            if (counter > 2) {
                return false
            }
        }
    }
    return true
}

numbersList = [23, 16, 11, 8, 19, 14, 5, 21];
for (let i = 0; i < numbersList.length; i++) {
    if (isPrime(numbersList[i]) == true) {
        console.log(`${numbersList[i]} é primo`)
    } else {
        console.log(`${numbersList[i]} não é primo`)
    }
}
