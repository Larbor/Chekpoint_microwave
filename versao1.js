/*......................................................................................................
...................CALIBRAÇÃO DOS TEMPOS PADRÕES DO NOSSO MICROONDAS - INSIRA EM SEGUNDOS...............
.......................................................................................................*/

let tempPadraoPipoca = 10
let tempPadraoMacarrao = 8
let tempPadraoCarne = 15
let tempPadraoFeijao = 12
let tempPadraoBrigadeiro = 8

/*.....................................................................................................
.......................................................................................................
............................INSIRA O NOME DO PRATO E TEMPO DESEJADO ABAIXO.............................
.......................................................................................................
.....................................................................................................*/

let prato = 'BRIGADEIRO'.toLowerCase() //MAIUSCULO ou minusculo, é possivel identificação 
let tempo = 17

function fazerPrato(prato, tempo){

    // condição de prato pronto e bom apetite
    if (prato == 'pipoca' && tempo >= tempPadraoPipoca && tempo <= 2*tempPadraoPipoca || 
    prato == 'macarrão' && tempo >= tempPadraoMacarrao && tempo <= 2*tempPadraoMacarrao ||
    prato == 'carne' && tempo >= tempPadraoCarne && tempo  <= 2*tempPadraoCarne ||
    prato == 'feijão' && tempo >= tempPadraoFeijao && tempo <= 2*tempPadraoFeijao ||
    prato == 'brigadeiro' && tempo >= tempPadraoBrigadeiro && tempo <= 2*tempPadraoBrigadeiro ) {
        return 'Prato pronto, bom apetite!!!'

    // condição de prato queimado
    } else if (prato == 'pipoca' && tempo > 2*tempPadraoPipoca && tempo < 3*tempPadraoPipoca || 
    prato == 'macarrão' && tempo > 2*tempPadraoMacarrao && tempo < 3*tempPadraoMacarrao ||
    prato == 'carne' && tempo > 2*tempPadraoCarne && tempo < 3*tempPadraoCarne ||
    prato == 'feijão' && tempo > 2*tempPadraoFeijao && tempo < 3*tempPadraoFeijao ||
    prato == 'brigadeiro' && tempo > 2*tempPadraoBrigadeiro && tempo < 3*tempPadraoBrigadeiro ) {
        return 'comida queimou'

    // condição de kabumm!
    } else if (prato == 'pipoca' && tempo >= 3*tempPadraoPipoca || 
    prato == 'macarrão' && tempo >= 3*tempPadraoMacarrao ||
    prato == 'carne' && tempo >= 3*tempPadraoCarne ||
    prato == 'feijão' && tempo >= 3*tempPadraoFeijao ||
    prato == 'brigadeiro' && tempo >= 3*tempPadraoBrigadeiro ) {
        return 'kabumm'
    }

    // condição de tempo insuficiente
    else if (prato == 'pipoca' && tempo < tempPadraoPipoca || 
    prato == 'macarrão' && tempo < tempPadraoMacarrao ||
    prato == 'carne' && tempo < tempPadraoCarne ||
    prato == 'feijão' && tempo < tempPadraoFeijao ||
    prato == 'brigadeiro' && tempo < tempPadraoBrigadeiro ) {
        return 'tempo insuficiente'
    }

    //condição de prato inexistente
    else {
        return 'Prato inexistente'
    }
}

console.log(fazerPrato(prato,tempo))