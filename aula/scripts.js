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

////////// ou ////////////// #fazem_a_mesma_coisa

// Constructor Function

function Phone(brand, screenSize, battery) {
    this.brand = brand,
    this.screenSize = screenSize,
    this.battery = battery,
    this.call = function(){
        console.log("Ligando...")
    }
}

const brandUser = 'Motorola'
const screenSizeUser = 7.7
const batteryUser = 5500

const phoneUser = new Phone(brandUser, screenSizeUser, batteryUser)
console.log(phoneUser)