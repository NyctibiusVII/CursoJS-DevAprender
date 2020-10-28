// Média de nota escolar
/** obter média a partir de um array
*________________________________________
* 0 - 5.9: I = insatisfatório
* 6 - 7.9: R = regular
* 8 - 9.9: B = bom
* 9 - 10: MB = muito bom
**/
const  mI = 5.9
const  mR = 7.9
const  mB = 9.9
const mMB = 10

const noteName = "Nota:"
const noteNameClean = "Nota limpa:"
const aprovadoName = '~~~~~~~APROVADO~~~~~~~'
const reprovadoName = '~~~~~~~REPROVADO~~~~~~~'
const errorName = '#######-ERROR-#######'
const warnName = 'Possível entrada de dados INCORRETA! \n Verifique se a entrada de dados das notas do(a) aluno(a) está correta.'

const I  = '\n (I) - Insatisfatório'
const R  = '\n (R) - Regular'
const B  = '\n (B) - Bom'
const MB = '\n (MB) - Muito Bom'
const errorNote = '\n (?) - ?'

const aluno30 = 'Matheus Vidigal'
let primaryNote = 10
let secondaryNote = 10
let thirdNote = 10

const notes = [primaryNote, secondaryNote, thirdNote]

studentAverage(notes)

function studentAverage(studentNotes) {
    const mean = calculateSchoolAverage(studentNotes)

    // Arredondando
    const meanClean = Math.floor(mean)

    if(mean < mI){
        console.log(aluno30 + '\n '+ noteName + ' ' + mean + '\n '+ noteNameClean + ' ' + meanClean + I)
        console.log(reprovadoName)
    }else if (mean > mI && mean < mR) {
        console.log(aluno30 + '\n '+ noteName + ' ' + mean + '\n '+ noteNameClean + ' ' + meanClean + R)
        console.log(aprovadoName)
    }else if (mean > mR && mean < mB) {
        console.log(aluno30 + '\n '+ noteName + ' ' + mean + '\n '+ noteNameClean + ' ' + meanClean + B)
        console.log(aprovadoName)
    }else if (mean > mB && mean <= mMB) {
        console.log(aluno30 + '\n '+ noteName + ' ' + mean + '\n '+ noteNameClean + ' ' + meanClean + MB)
        console.log(aprovadoName)
    }else {
        console.error(aluno30 + '\n '+ noteName + ' ' + mean + '\n '+ noteNameClean + ' ' + meanClean + errorNote)
        console.error(errorName)
        console.warn(warnName)
    }
}

function calculateSchoolAverage(array) {
    let soma = 0
    for (const note of array) {
        soma += note
    }
    const mean = soma / (array.length)

    return mean
}