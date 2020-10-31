// Segurança virtual
/** 
*  - Cria função verificar entrada (checkIn)
**/

const can = '- Acesso Liberado!' // - Pode entrar!
const canNot = '- Acesso Negado!' // - Você não pode entrar
const unfilledForm = '- Termine de preencher o formulário'

const spanId = document.getElementById('spanId')
const spanName = document.getElementById('spanName')
const spanEmail = document.getElementById('spanEmail')

const statusPermission = 'entryPermission'
let isEqual = false

function checkIn(event){
    const newGuestId = document.getElementById('id').value
    const newGuestName = document.getElementById('name').value
    const newGuestEmail = document.getElementById('email').value
    
    spanHidden(newGuestId, newGuestName, newGuestEmail)
    if (newGuestId === '' || newGuestName === '' || newGuestEmail === '') {
        event.preventDefault()
        document.getElementById(statusPermission).style.background = "#fffc65" // - Amarelo
        return document.getElementById(statusPermission).innerHTML = unfilledForm
    }
    
    isEqual = checkFields(newGuestId, newGuestName, newGuestEmail)

    if (isEqual) {
        //event.preventDefault()// - Tirar para enviar o formulário (usado para Testes)
        document.getElementById(statusPermission).style.background = "#69f5a3" // - Verde
        document.getElementById(statusPermission).innerHTML = can
        //document.getElementById('theForm').submit() // - 2° opção...
        //console.log(`true: ${isEqual}`)
    } else if (!isEqual){
        event.preventDefault()
        document.getElementById(statusPermission).style.background = "#ff4842d3" // - Vermelho
        return document.getElementById(statusPermission).innerHTML = canNot
        //console.log(`false: ${isEqual}`)
    }
}

function spanHidden(newGuestId, newGuestName, newGuestEmail){ 
    if (newGuestId === '') {
        spanId.hidden = false
    }else{
        spanId.hidden = true
    }
    if (newGuestName === '') {
        spanName.hidden = false
    }else{
        spanName.hidden = true
    }
    if (newGuestEmail === '') {
        spanEmail.hidden = false
    }else{
        spanEmail.hidden = true
    }
}

function checkFields(newGuestId, newGuestName, newGuestEmail) {
    const guestUser = [{
        guestId : 1,
        guestName : 'diogo',
        guestEmail : 'diogo.01@gmail.com'
    },
    {
        guestId : 2,
        guestName : 'sabrina',
        guestEmail : 'sabrina.sab.sab@gmail.com'
    },
    {
        guestId : 3,
        guestName : 'fernando',
        guestEmail : 'fefe.@gmail.com'
    },
    {
        guestId : 4,
        guestName : 'camila',
        guestEmail : 'camis.camis@gmail.com'
    },
    {
        guestId : 5,
        guestName : 'ryan',
        guestEmail : 'ryan.ry2020@gmail.com'
    },
    {
        guestId : 6,
        guestName : 'david',
        guestEmail : 'david1807@gmail.com'
    },
    {
        guestId : 7,
        guestName : 'matheus',
        guestEmail : 'matheus.dev.07@gmail.com'
    }]

    const whoInvitedTheUser = document.getElementById('invitedBy').value
    let isEqualStop = false // - *NÃO altere

    for (let i = 0; i < guestUser.length && isEqualStop == false; i++) {
        let guestUserIndex = guestUser[i]
        const guestUserIndexId = guestUserIndex.guestId
        const guestUserIndexName = guestUserIndex.guestName
        const guestUserIndexEmail = guestUserIndex.guestEmail
    
        // - Para testes...
        //console.log(`\n Registrado: ${guestUserIndexId} ${guestUserIndexName} ${guestUserIndexEmail} \n User______: ${newGuestId} ${newGuestName} ${newGuestEmail} \n index: ${i}`)
        
        if (guestUserIndexId == newGuestId && guestUserIndexName === newGuestName && guestUserIndexEmail === newGuestEmail) {
            // - (guestUserIndexId == newGuestId) - Types diferentes, por isso '==' para só verificar os valores
            if (whoInvitedTheUser !== '') {
                invitedBy(whoInvitedTheUser)
            }

            isEqualStop = true    // - *NÃO altere
            guestUser.splice(i,1) // - Deleta o índice que ja foi verificado

            return true
        }
    }
}

function invitedBy(whoInvitedTheUser) {
    let listInvitedBy = [
    'paloma',
    'mori',
    'davi'
    ]

    //console.log(`who invited the user: ${whoInvitedTheUser}`)
    listInvitedBy.push(whoInvitedTheUser)// - Guardar no banco de dados...
}