// 10. Desenvolver um programa para contar o número de letras maiúsculas da string abaixo: “LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY”
function capitalLetterCounter(phrase) {
    let counterCapitalLetters = 0
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] >= 'A' && phrase[i] <= 'Z') {
            counterCapitalLetters++;
        }
    }
    return counterCapitalLetters;
}

let phrase = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY"
console.log(capitalLetterCounter(phrase))
