// Múltiplos de 3 e 5
/** criar função somar que retorna a
/*  soma de todos os múltiplos de 3 e 5  
**/

const numberOfNumbers  = 10

addMultipleNumbers(numberOfNumbers)

function addMultipleNumbers(numberOfNumbersUser) {
    const mPlyOne = 3
    const mPlyTwo = 5

    let mPlyOneTOTAL = 0
    let mPlyTwoTOTAL = 0
    let total = 0

    for (let i = 0; i <= numberOfNumbersUser; i++) {
        if (i != 0) {
            if (i%mPlyOne === 0 || i === mPlyOne) {
                mPlyOneTOTAL += i
                console.log('Múltiplos de '+ mPlyOne + ': ' + mPlyOneTOTAL)
            }
            if (i%mPlyTwo === 0 || i === mPlyTwo) {
                mPlyTwoTOTAL += i
                console.log('Múltiplos de '+ mPlyTwo + ': ' + mPlyTwoTOTAL)
            }  
        }
    }

    total = mPlyOneTOTAL + mPlyTwoTOTAL
    if (total != 0) {
        return console.log(total)  
    }else {
        return console.log('Sem múltiplos para somar... \n Resultado: ' + total) 
    }
    
}