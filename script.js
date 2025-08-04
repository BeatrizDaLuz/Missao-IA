const caixaPrincipal = document.querySelector('caixa-principal');

const caixaPerguntas = document.querySelector('caixa-perguntas');

const caixaAlternativas = document.querySelector('caixa-alternativas');

const caixaResultado = document.querySelector('caixa-resultado');

const textoResultado = document.querySelector('.texto-resultado');

const lista = [ ];

const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "Alternativa 1",
            "Alternativas 2",
        ]
    } //fecha objeto pergunta
]; //fecha lista