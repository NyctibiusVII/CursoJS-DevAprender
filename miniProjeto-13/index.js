// Montador de postagem de blog
/** cria uma obj postagem de blog que contém:
*_________________________________________________
*  titulo
*  mensagem
*  autor
*  visualizações
*  comentários [{autor, mensagem}]
*  estaAoVivo
**/
const title = 'Primary post',
    message = 'hi!',
    author = 'Matheus Vidigal',
    views = 475,
    isLive = true,
    authorComments_01 = 'Kesia Cristine',
    messageComments_01 = 'hi there!',
    authorComments_02 = 'Camila Olga',
    messageComments_02 = 'hello'

let blogItems = {
    title : title,
    message : message,
    author : author,
    views : views,
    comments : [{
        author : authorComments_01,
        message : messageComments_01
    },
    {
        author : authorComments_02, 
        message : messageComments_02
    }],
    isLive : isLive
}

console.log(blogItems)