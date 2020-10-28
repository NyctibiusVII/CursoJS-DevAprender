// Números primos
/** cria uma função para mostrar os números primos
*_________________________________________________
*  primos = divisível por 1 ou por ele mesmo
*  compostos
**/

const numberOfNumbers = 15

showPrimeNumbers(numberOfNumbers)

function showPrimeNumbers(limit) {
    for (let numberI = 2; numberI < limit; numberI++) {
        if (isPrime(numberI)) {
            console.log(numberI)
        }
    }
}

function isPrime(numberI) {   
    for (let  dividerJ = 2;  dividerJ < numberI;  dividerJ++) {
        if (numberI %  dividerJ === 0) {
            return false
        } 
    }
    return true
}
