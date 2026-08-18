const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Atualmente, os filmes fazem parte do cotidiano de muitas pessoas. Você considera os filmes importantes para o entretenimento e para a formação do público?",
        alternativas: [
            {
                texto: "Sim, pois além de proporcionarem entretenimento, os filmes podem transmitir conhecimentos, apresentar diferentes culturas e estimular a reflexão sobre diversos assuntos.",
                afirmacao: "Os filmes possuem grande importância na sociedade, pois além do entretenimento, podem contribuir para o aprendizado, apresentar diferentes perspectivas e estimular o pensamento crítico."
            },
            {
                texto: "Não, pois os filmes servem principalmente como uma forma de entretenimento e não possuem grande influência na formação das pessoas.",
                afirmacao: "Apesar de os filmes serem uma importante forma de entretenimento, eles também podem transmitir mensagens, apresentar diferentes realidades e influenciar a maneira como as pessoas enxergam determinados assuntos."
            }
        ]
    },
    {
        enunciado: "Algumas pessoas têm dificuldade para escolher um filme para assistir. Qual seria uma boa maneira de encontrar filmes interessantes?",
        alternativas: [
            {
                texto: "Escolher filmes de gêneros que sejam do interesse do espectador e procurar recomendações de outras pessoas.",
                afirmacao: "Escolher filmes de acordo com os próprios interesses pode tornar a experiência mais agradável. Além disso, recomendações podem ajudar o espectador a conhecer novas histórias e gêneros."
            },
            {
                texto: "Assistir apenas aos filmes mais populares e conhecidos pelo público.",
                afirmacao: "Apesar de os filmes populares serem uma opção, limitar-se apenas a eles pode impedir que o espectador conheça produções diferentes e descubra novos gêneros e histórias."
            }
        ]
    },
    {
        enunciado: "Com o crescimento dos serviços de streaming, ficou mais fácil assistir a filmes em casa. Essa mudança tornou o acesso aos filmes mais fácil para a população?",
        alternativas: [
            {
                texto: "Sim, pois os serviços de streaming permitem assistir a diversos filmes sem precisar ir ao cinema.",
                afirmacao: "Os serviços de streaming facilitaram o acesso aos filmes, permitindo que as pessoas assistam a diferentes produções em casa, de maneira prática e conveniente."
            },
            {
                texto: "Não, pois o cinema continua sendo a melhor forma de assistir a filmes.",
                afirmacao: "Apesar de o cinema proporcionar uma experiência diferenciada, os serviços de streaming também são importantes, pois oferecem praticidade e permitem que mais pessoas tenham acesso a diferentes filmes."
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre a leitura...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
