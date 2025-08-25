const caixaPrincipal = document.querySelector('.caixa-principal');

const caixaPerguntas = document.querySelector('.caixa-perguntas');

const caixaAlternativas = document.querySelector('.caixa-alternativas');

const caixaResultado = document.querySelector('.caixa-resultado');

const textoResultado = document.querySelector('.texto-Resultado');

const lista = [];

const perguntas = [
{
  enunciado: "Pergunta 1",
alternativas: ["Alternativa 1","Alternativa 2"]
},
{
enunciado: "Pergunta 2",
alternativas: ["Alternativa 1","Alternativa 2" ]
},
{
enunciado: "Pergunta 3",
alternativas: ["Alternativa 1","Alternativa 2" ]
},
{
enunciado: "Pergunta 4",
alternativas: ["Alternativa 1","Alternativa 2"]
},
{
enunciado: "Pergunta 5",
alternativas: ["Alternativa 1","Alternativa 2"]
}
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativa();
}
function mostraAlternativas();{
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativas;
        caixaAlternativa.appendChild(botaoAlternativa);
    }
}

mostraPergunta();.






































function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas
    }
}








function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent ="Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();