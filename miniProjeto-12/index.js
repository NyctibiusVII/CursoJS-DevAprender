// Encontre a igualdade
/** cria uma obj endereço que contém:
*_________________________________________________
*  rua
*  cidade
*  CEP
*  exibirEndereço(endereço)
**/
const   street_01 = 'Amador lourenço',
        city_01 = 'São Paulo',
        CEP_01 = '04658-120'

const   street_02 = 'Amador lourenço',
        city_02 = 'São Paulo',
        CEP_02 = '04658-120'

function address(street, city, CEP) {
    this.street = street,
    this.city = city,
    this.CEP = CEP
}

const address_01 = new address(street_01, city_01, CEP_01)
const address_02 = new address(street_02, city_02, CEP_02)
const address_03 = address_01

equalAddress(address_01, address_02)

function equalAddress(address_01, address_02) {
    return address_01.street === address_02.street && address_01.city === address_02.city && address_01.CEP === address_02.CEP //result dos itens são iguais
}
console.log(equalAddress(address_01, address_02))

function equalAddressMemory(address_01, address_02, address_03) {
    return address_01 === address_03 //endereço na memória são iguais
}
console.log(equalAddressMemory(address_01, address_02, address_03))