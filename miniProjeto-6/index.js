// Encontre o String
/** criar um método para ler propriedades de um objeto
/*  exibir somente as propriedades do tipo String do objeto  
**/

const nome  = 'Matheus',
sobrenome   = 'Vidigal',
idade       = 18,
sexo        = 'Masculino',
altura      = 1.81,
tipoCapilar = 'Grande & Ondulado'

const myObj = {
    nome        : nome        , 
    sobrenome   : sobrenome   , 
    idade       : idade       , 
    sexo        : sexo        , 
    altura      : altura      , 
    tipoCapilar : tipoCapilar ,
    programador : true
}
showStringProperty(myObj)

function showStringProperty(obj) {

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key]

            if (typeof(element) === 'string') {
                console.log('string: ' + element)
            }
            if (typeof(element) === 'number') {
                console.log('number: ' + element)
            }
            if (typeof(element) === 'boolean') {
                console.log('boolean: ' + element)
            }
        }
    }   
}
