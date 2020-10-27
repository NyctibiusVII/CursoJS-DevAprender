// FizzBuzz
/** Divisível por 3 => Fizz 
/*  Divisível por 5 => Buzz
/*  Divisível por 15 => FizzBuzz
/*  Não divisível por 3 ou 5 => entrada
/*  Não é um número => 'Não é um número'
**/
let dataInputUser = 15
const result = fizzBuzz(dataInputUser)

function fizzBuzz(dataInput) {
    let isNumber = false
    typeof dataInput !== 'number' ? console.log('Não é um número') : isNumber = true
    
    if (isNumber === true) {
        if ((dataInput % 3) === 0 && (dataInput % 5) === 0){
            console.log('FizzBuzz')
        } else if ((dataInput % 3) === 0) {
            console.log('Fizz')
        } else if ((dataInput % 5) === 0) {
            console.log('Buzz')
        }else {
            console.log(dataInput)
        }
    }
}