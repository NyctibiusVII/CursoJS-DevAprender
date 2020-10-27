// Par ou Impar
/** recebe valores para avaliar
/*  função exibe se cada valor é par ou impar  
**/

const numberOfNumbers = 5
const par = 'Par'
const impar = 'Impar'
parOuImpar(numberOfNumbers)

function parOuImpar(parImpar) {

    for (let i = 0; i < parImpar; i++) {
        if (i % 2 === 0) {
            console.log(i + ' ' + par)
        } else {
            console.log(i + ' ' + impar)
        }   
    }
    
}
