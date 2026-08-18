const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Atualmente, o hábito da leitura não é tão comum entre os jovens. Você considera a leitura importante para a formação desses jovens?",
        alternativas: [
            {
                texto: "Sim, pois a leitura contribui para o desenvolvimento do conhecimento, amplia o vocabulário e ajuda na formação do pensamento crítico.",
                afirmacao: "A leitura possui grande importância na formação dos jovens, pois permite adquirir novos conhecimentos, desenvolver o pensamento crítico e compreender melhor diferentes assuntos e realidades."
            },
            {
                texto: "Não, pois atualmente existem outras formas de obter informações e conhecimentos, principalmente por meio da internet e das redes sociais.",
                afirmacao: "Apesar de a internet e as redes sociais facilitarem o acesso à informação, a leitura continua sendo importante para desenvolver a concentração, o conhecimento e a capacidade de interpretar diferentes conteúdos."
            }
        ]
    },
    {
        enunciado: "Algumas pessoas têm dificuldade para começar a ler. Qual seria uma boa maneira de desenvolver o hábito da leitura?",
        alternativas: [
            {
                texto: "Começar com livros curtos, de fácil compreensão e que abordem assuntos de interesse do leitor.",
                afirmacao: "Para quem ainda não possui o hábito de ler, começar por livros curtos e relacionados aos seus interesses pode tornar a leitura mais agradável e ajudar a transformá-la em um hábito."
            },
            {
                texto: "Começar diretamente por livros clássicos e obras mais complexas.",
                afirmacao: "Começar por obras muito complexas pode tornar a leitura cansativa para quem ainda não possui o hábito. Por isso, é importante escolher livros adequados ao nível de leitura e aos interesses de cada pessoa."
            }
        ]
    },
    {
        enunciado: "Os livros físicos podem ter preços elevados, enquanto a leitura digital oferece opções mais acessíveis. Os livros digitais podem ajudar a tornar a leitura mais acessível?",
        alternativas: [
            {
                texto: "Sim, pois os livros digitais podem ser encontrados por preços menores e também existem diversas opções gratuitas.",
                afirmacao: "Os livros digitais podem facilitar o acesso à leitura, principalmente para pessoas que não possuem condições de comprar livros físicos, oferecendo alternativas gratuitas ou com preços mais acessíveis."
            },
            {
                texto: "Não, pois os livros físicos continuam sendo a principal forma de leitura para muitas pessoas.",
                afirmacao: "Mesmo que muitas pessoas ainda prefiram os livros físicos, a leitura digital é uma alternativa importante, pois permite que mais pessoas tenham acesso aos livros e ao conhecimento."
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
