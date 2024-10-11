let vida = 100;
let forca = 10;
let pontosNoAnoLetivo = 0;
const maxPontos = [30, 35, 35]; // Pontos máximos para cada trimestre
const mediaTrimestre = [18, 21, 21]; // Médias necessárias para passar
const totalRodadasPorTrimestre = 10; // Total de rodadas por trimestre
let rodadaAtual = 0;
let faseAtual = 0; // Para acompanhar o trimestre
let nomePersonagem = '';

function start() {
    nomePersonagem = prompt("Qual é o seu nome, estudante do IFNMG?");
    if (nomePersonagem) {
        console.log(`Bem-vindo, ${nomePersonagem}! Você é um estudante do IFNMG tentando acumular pontos no ano letivo. Prepare-se para enfrentar desafios em ${maxPontos.length} trimestres!`);
        proximaRodada();
    } else {
        console.log("Você não forneceu um nome. O jogo não pode começar.");
    }
}

function proximaRodada() {
    while (pontosNoAnoLetivo < maxPontos[faseAtual] && vida > 0) {
        console.log(`\nRodada ${rodadaAtual + 1} - Trimestre ${faseAtual + 1}`);
        console.log(`Vida: ${vida}, Força: ${forca}, Pontos no ano letivo: ${pontosNoAnoLetivo}`);

        let desafio = Math.floor(Math.random() * 7);
        enfrentarDesafio(desafio);

        if (vida <= 0) {
            console.log("Você foi derrotado durante o ano letivo! Jogo terminado.");
            return; // Termina o jogo se a vida chegar a zero
        }

        if (pontosNoAnoLetivo < maxPontos[faseAtual]) {
            const continuar = prompt("Você quer enfrentar o próximo desafio? (s/n)");
            if (continuar && continuar.toLowerCase() === 'n') {
                console.log("Você decidiu sair do jogo. Até mais, estudante!");
                return; // Termina o jogo se o jogador decidir não continuar
            }
            rodadaAtual++;
        }
    }

    verificarMedia(); // Verifica a média ao final do trimestre
}

function verificarMedia() {
    console.log(`\nFase ${faseAtual + 1} concluída! Você acumulou ${pontosNoAnoLetivo} pontos.`);

    if (pontosNoAnoLetivo >= mediaTrimestre[faseAtual]) {
        console.log("Parabéns! Você alcançou a média e passou para o próximo trimestre.");
        if (faseAtual < maxPontos.length - 1) {
            const continuar = prompt("Você quer ir para a próxima fase? (s/n)");
            if (continuar && continuar.toLowerCase() === 's') {
                faseAtual++;
                pontosNoAnoLetivo = 0; // Reinicia os pontos para o próximo trimestre
                rodadaAtual = 0; // Reseta a contagem de rodadas
                proximaRodada();
            } else {
                console.log("Você decidiu desistir. Jogo terminado.");
            }
        } else {
            console.log("Você completou todos os trimestres! Parabéns!");
        }
    } else {
        console.log("Você não alcançou a média. Jogo terminado.");
    }
}

function enfrentarDesafio(desafio) {
    switch (desafio) {
        case 0:
            console.log("Você teve uma prova difícil!");
            const estudar = prompt("Você quer estudar para a prova? (s/n)");
            if (estudar && estudar.toLowerCase() === 's') {
                const chanceDeSucesso = Math.random();
                if (chanceDeSucesso > 0.2) {
                    const pontosGanho = Math.floor(Math.random() * 10) + 1;
                    pontosNoAnoLetivo = Math.min(pontosNoAnoLetivo + pontosGanho, maxPontos[faseAtual]);
                    console.log(`Você estudou e ganhou ${pontosGanho} pontos!`);
                } else {
                    const dano = Math.floor(Math.random() * 10);
                    vida -= dano;
                    console.log(`Você se distraiu e perdeu ${dano} de vida.`);
                }
            } else {
                console.log("Você esqueceu a matéria e decidiu tentar colar na prova.");
                const colar = prompt("Você quer tentar colar? (s/n)");
                if (colar && colar.toLowerCase() === 's') {
                    const chanceDeColar = Math.random();
                    if (chanceDeColar > 0.5) {
                        const pontosGanho = Math.floor(Math.random() * 10) + 1;
                        pontosNoAnoLetivo = Math.min(pontosNoAnoLetivo + pontosGanho, maxPontos[faseAtual]);
                        console.log(`Você conseguiu colar e ganhou ${pontosGanho} pontos!`);
                    } else {
                        const penalidade = Math.floor(Math.random() * 30);
                        vida -= penalidade;
                        console.log(`O professor te pegou! Você zerou a prova e perdeu ${penalidade} de vida.`);
                    }
                } else {
                    let dano = Math.floor(Math.random() * 30);
                    vida -= dano;
                    console.log("Você perdeu " + dano + " de vida após a prova.");
                }
            }
            break;
        case 1:
            console.log("Você tem a oportunidade de participar de um trabalho!");
            const participarTrabalho = prompt("Você quer participar do trabalho? (s/n)");
            if (participarTrabalho && participarTrabalho.toLowerCase() === 's') {
                const chanceDeSucesso = Math.random();
                if (chanceDeSucesso > 0.3) {
                    const ganho = 7; // Pontos fixos para trabalho
                    pontosNoAnoLetivo = Math.min(pontosNoAnoLetivo + ganho, maxPontos[faseAtual]);
                    console.log(`Você participou do trabalho e ganhou ${ganho} pontos!`);
                } else {
                    const penalidade = Math.floor(Math.random() * 15);
                    vida -= penalidade;
                    console.log(`Você teve dificuldades e perdeu ${penalidade} de vida.`);
                }
            } else {
                const penalidade = Math.floor(Math.random() * 15);
                vida -= penalidade;
                console.log(`Você decidiu não participar e perdeu ${penalidade} de vida.`);
            }
            break;
        case 2:
            console.log("Você dormiu muito tarde e ficou com sono!");
            const danoSono = Math.floor(Math.random() * 20);
            vida -= danoSono;
            console.log(`Você perdeu ${danoSono} de vida por estar cansado.`);
            break;
        case 3:
            console.log("Você ajudou um amigo com a lição de casa!");
            const ajudarAmigo = prompt("Você quer ajudar seu amigo? (s/n)");
            if (ajudarAmigo && ajudarAmigo.toLowerCase() === 's') {
                const chanceDeSucesso = Math.random();
                if (chanceDeSucesso > 0.5) {
                    const aumento = Math.floor(Math.random() * 5);
                    forca += aumento;
                    console.log(`Sua força aumentou em ${aumento}!`);
                } else {
                    const dano = Math.floor(Math.random() * 15);
                    vida -= dano;
                    console.log(`Seu amigo teve problemas e você perdeu ${dano} de vida.`);
                }
            } else {
                console.log("Você decidiu não ajudar.");
            }
            break;

        case 5:
            console.log("Você se distraiu jogando videogame e perdeu tempo!");
            const perdaDeTempo = Math.floor(Math.random() * 20);
            vida -= perdaDeTempo;
            console.log(`Você perdeu ${perdaDeTempo} de vida por se distrair.`);
            break;
        case 6:
            console.log("Você encontrou um livro de dicas para os estudos!");
            const lerLivro = prompt("Você quer estudar o livro? (s/n)");
            if (lerLivro && lerLivro.toLowerCase() === 's') {
                const pontosGanho = Math.floor(Math.random() * 10) + 1;
                pontosNoAnoLetivo = Math.min(pontosNoAnoLetivo + pontosGanho, maxPontos[faseAtual]);
                console.log(`Você estudou o livro e ganhou ${pontosGanho} pontos!`);
            } else {
                console.log("Você decidiu não estudar o livro.");
            }
            break;
    }

    if (vida <= 0) {
        console.log("Você não conseguiu sobreviver ao ano letivo...");
    }
}

// Para iniciar o jogo, digite start() no console
