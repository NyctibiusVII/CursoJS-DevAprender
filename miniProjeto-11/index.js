// Montador de endereço
/** cria uma obj endereço que contém:
*_________________________________________________
*  rua
*  cidade
*  CEP
*  exibirEndereço(endereço)
**/
const   street = 'Amador lourenço',
        city   = 'São Paulo',
        CEP    = '04658-120'

function createAddress(street, city, CEP) {
    return {
        street,
        city,
        CEP 
    }
}

function showAddress(address) {
    for (const key in address) {
        if (address.hasOwnProperty(key)) {
            const element = address[key];
            console.log(key + ' = ' + element)
        }
    }
}
showAddress(createAddress(street, city, CEP))