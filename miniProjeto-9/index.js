// Contador de asteríscos
/** cria uma função que exibe a quantidade de * (asteríscos)
*
**/

let numberOfLines = 10
const asterisk = '*'

showAsterisks_R_to_L(numberOfLines)
showAsterisks_L_to_R(numberOfLines)

function showAsterisks_R_to_L(lines) {
    let standard = ''

    for (let i = 0; i < lines; i++) {
        standard += asterisk
        console.log(standard)
    }
}

function showAsterisks_L_to_R(lines) {
    var space, hash, standardAsterisk

    for (var i = 0; i < lines; i++){
      space = lines - 1 - i
      hash = i + 1
      standardAsterisk = ' '.repeat(space) + asterisk.repeat(hash)
      console.log(standardAsterisk);   
    } 
}