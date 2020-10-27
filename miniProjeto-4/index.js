// Medidor de velocidade
/** Velocidade máxima de 70 km
/*  A cada 5 km acima do limite você ganha 1 ponto na carteira
/*  Se sua carteira tiver mais de 12 pontos ela é suspendida
**/

const velocityUser = 200.3
verifyVelocity(velocityUser)

function verifyVelocity(velocity) {
    const okVelocity = 'OK'
    const walletSuspended = 'Sua carteira foi suspendida!'
    const WalletNewPoints = 'Você tem'
    const maxVelocity = 70
    const kmPassed = 5
    const maxPoints = 12
    let points = 0
    
    // Arredondando
    velocity = Math.floor(velocity)

    if (velocity > maxVelocity) {
        points = ((velocity - maxVelocity) / kmPassed)
        
        if (points > maxPoints) {
            console.log(walletSuspended+'\n '+WalletNewPoints+': '+points+' pontos na carteira')
        }else {
            console.log(WalletNewPoints+': '+points+' pontos na carteira')
        }
    } else {
        console.log(okVelocity+': '+velocity+' km')
    }
}