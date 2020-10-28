// Faixa de preço
/** cria uma array de obj faixa de preço que contém:
*_________________________________________________
*  tooltip
*  minimum
*  maximum
**/
const tooltip_01 = 'até R$700',
    minimum_01 = '0',
    maximum_01 = '700'

const tooltip_02 = 'até R$1700',
    minimum_02 = '0',
    maximum_02 = '1700'

const tooltip_03 = 'até R$300',
    minimum_03 = '0',
    maximum_03 = '300'

/**
let fillet = [{
      tooltip : tooltip_01,
      minimum : minimum_01,
      maximum : maximum_01
  },{
      tooltip : tooltip_02,
      minimum : minimum_02,
      maximum : maximum_02
  },{
      tooltip : tooltip_03,
      minimum : minimum_03,
      maximum : maximum_03
  }]

  console.log(fillet)
**/

////////// ou ////////////// #fazem_a_mesma_coisa_______________

// Factory function
function createFillet(tooltip, minimum, maximum) {
    return {
        tooltip,
        minimum,
        maximum
    }
}
let filletFactor = [
    createFillet(tooltip_01, minimum_01, maximum_01),
    createFillet(tooltip_02, minimum_02, maximum_02),
    createFillet(tooltip_03, minimum_03, maximum_03)
]

console.log(filletFactor)

////////// ou ////////////// #fazem_a_mesma_coisa_______________

/** // Constructor function
function filletPriceConstructor(tooltip, minimum, maximum) {
    this.tooltip = tooltip,
    this.minimum = minimum,
    this.maximum = maximum
}
let filletPrice = [
    new filletPriceConstructor(tooltip_01, minimum_01, maximum_01),
    new filletPriceConstructor(tooltip_02, minimum_02, maximum_02),
    new filletPriceConstructor(tooltip_03, minimum_03, maximum_03)
]

console.log(filletPrice)
**/