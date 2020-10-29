// Segurança virtual
/** cria função verificar entrada:
*
**/

function verificarEntrada(params) {
    nomeConvidado = document.getElementById('nome').value

    convidados = ['Matheus','Diogo','Samanta']

    if (convidados.includes(nomeConvidado)) {
        document.getElementById('permissaoEntrada').innerHTML = 'Pode entrar!'
    } else {
        document.getElementById('permissaoEntrada').innerHTML = 'Você não pode entrar.'
    }
}