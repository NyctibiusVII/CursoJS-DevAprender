// Factory Function
function createCell(brand, screenSize, battery) {
    return {
        brand,
        screenSize,
        battery,
        call() {
            console.log('Alo? João?\n OoOi... tudo bom!\n Eu vim falar de uma fatur@......\n Ô-o-oi?\n João?...\n Ainda está ai?\n\n tu-tu-tu-tu...')
        }
    }
} 

////////// ou ////////////// #fazem_a_mesma_coisa_______________

// Constructor Function
class Phone {
    constructor(brand, screenSize, battery) {
        this.brand = brand,
            this.screenSize = screenSize,
            this.battery = battery,
            this.call = function () {
                console.log("Ligando...")
            }
    }
}

/**function Phone(brand, screenSize, battery) {
*    this.brand = brand,
*    this.screenSize = screenSize,
*    this.battery = battery,
*    this.call = function(){
*        console.log("Ligando...")
*    }
*}
**/
 
const brandUser = 'Motorola'
const screenSizeUser = 7.7
const batteryUser = 5500

const phoneUser = new Phone(brandUser, screenSizeUser, batteryUser)
//console.log(phoneUser)


//________________________________________________________________

// Dinâmica de obj
const mouse = {
    color: 'red',
    brand: 'T-Dagger'
}
mouse.DPI = 3000   // adiciona item
delete mouse.color // deleta item
//console.log(mouse) // show = brand e DPI


//________________________________________________________________

// Clone de obj
const cloneMouse = Object.assign({}, mouse)
//console.log(cloneMouse)

const cloneMouse2 = Object.assign({
    button_3 : true
}, mouse)
//console.log(cloneMouse2)

//spread ou 3 pontos
const cloneMouse3 = {...mouse}
//console.log(cloneMouse3)


//________________________________________________________________

// Arrays
/**
add new elementos
search elementos
delete elementos
esvaziar array
combinar array
dividir array
clonar array
*/
const numbers = [1,2,3]

// --- ADD --- //
//inicio
numbers.unshift(0)//[0,1,2,3]
//meio
numbers.slice(1,0,'01')//[0,"01",1,2,3] Ex: insere no index 1, não deleta nada por conta do 0 e add '01'
//final
numbers.push(2)//[0,"01",1,2,3,2]

// --- SEARCH --- //
numbers.indexOf(2)//retorna o índice encontrado do numero 2  >(3)
numbers.lastIndexOf(2)//retorna o ultimo índice encontrado no numero 2 >(5)
//retorna -1 se não achar nada!
numbers.includes(2)//retorna true se achar e false se não achar
// --- SEARCH | REFERÊNCIA --- //
const numbersObject = [{
    id: 1,
    idade: 18
},
{
    id: 2,
    idade: 23
},
{
    id: 3,
    idade: 2
}]
const whatIdade = numbersObject.find((numbersIdade) =>{
    return numbersIdade.idade === 18
})
//console.log(whatIdade)//mostra o primeiro bloco de referência (id: 1, idade: 18)

// --- DELETE --- //
//inicio
numbers.shift()//deleta o 1° elemento ["01",1,2,3,2]
//meio
numbers.splice(2,1)//deleta '1 uma' vez no índice 2 ["01",2,3,2]
//final
numbers.pop()//deleta o ultimo elemento ["01",2,3]

// --- ESVAZIAR ARRAY --- //
let outroNumbers = numbers
//-1
//numbers = [] //'re-instânciar' - mas numbers tem que ser 'let'
//-2 - BEST
//numbers.length = 0 //APAGANDO TODAS as referências existentes (reduzido a NADA)
//-3
//numbers.splice(0,numbers.length) //msm coisa
//-4
//while (numbers.length > 0) {
//    numbers.pop()
//}

// --- COMBINAR ARRAY --- //
const primary = [1,2,3]
const secondary = [4,5,6]

const combinado_01 = primary.concat(secondary)// concatena 1 array no outro
const combinado_02 = [...primary,'meio',...secondary]// msm coisa - BEST

// --- DIVIDIR ARRAY --- //
const dividido_01 = combinado.slice(0,3)//pega itens a partir do índice 0 ao (3 (-1)), ou seja até índice 2
const dividido_02 = combinado.slice(1)//pega todos os itens a partir do índice 1 ao final do array
const dividido_03 = combinado.slice()//pega todos os itens e passa para a nova variável
//também copia TODAS as referências de um objeto (CUIDADO)

// --- CLONE ARRAY --- //
const clonado = [...primary]//spread

// --- JOIN --- //
const comb = primary.join('.')//adiciona '.' no meio de todos os itens
const oi = ',o,i,'
const comb = oi.split(',')//separa frase por ',' e guarda num array