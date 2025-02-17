let listaDeNumerosSorteados = [];
let numLim = 50;
function gerarNumeroAleatoriio() {
    let numEscolhido = parseInt(Math.random()*numLim+1);
    if (listaDeNumerosSorteados.length == numLim){
        listaDeNumerosSorteados = [];
    }
    while (listaDeNumerosSorteados.includes(numEscolhido)) {
        numEscolhido = parseInt(Math.random()*numLim+1);
    }
    listaDeNumerosSorteados.push(numEscolhido);
    return numEscolhido;
}
function exibirTextoNaTela (tag, texto) {
    let paragrafo = document.querySelector(tag);
    paragrafo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function mensagemInicial() {
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
    exibirTextoNaTela ('p', `Escolha um número entre 1 e ${numLim}`);
}
let numerosecreto = gerarNumeroAleatoriio();
mensagemInicial();
let tentativas = 0;
function verificarChute() {
    let chute = document.querySelector('input').value;
    tentativas++;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    if (chute == numerosecreto) {
        exibirTextoNaTela ('h1', 'Acertou!');
        exibirTextoNaTela ('p', `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numerosecreto) {
            exibirTextoNaTela ('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela ('p', 'O número secreto é maior');
        }
        limpaCampo();
    }
}
function reiniciarJogo() {
    numerosecreto = gerarNumeroAleatoriio();
    limpaCampo();
    tentativas=0;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}