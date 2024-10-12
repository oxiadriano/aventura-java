let vida = 100;
let forca = 10;
let pontosNoAnoLetivo = 0;
const maxPontos = [40, 40, 40];
const mediaTrimestre = [30, 35, 35];
const totalRodadasPorTrimestre = 10; 
let rodadaAtual = 0;
let faseAtual = 0;
let nomePersonagem = '';
let pontosExtras = 0;

function start() {
    nomePersonagem = prompt("Qual é o seu nome, estudante do IFNMG?");
    if (nomePersonagem === null) {
        console.log("Você decidiu sair do jogo. Até mais, estudante!");
        return;
    }
    console.log(`Bem-vindo, ${nomePersonagem}! Você é um estudante do IFNMG tentando acumular pontos no ano letivo. Prepare-se para enfrentar desafios em ${maxPontos.length} trimestres!`);
    proximaRodada();
}

function proximaRodada() {
    while (vida > 0) {
        console.log(`\nRodada ${rodadaAtual + 1} - Trimestre ${faseAtual + 1}`);
        console.log(`Vida: ${vida}, Força: ${forca}, Pontos no ano letivo: ${pontosNoAnoLetivo}, Pontos extras: ${pontosExtras}`);

        if (pontosNoAnoLetivo < maxPontos[faseAtual]) {
            let desafio = Math.floor(Math.random() * 7);
            enfrentarDesafio(desafio);

            if (vida <= 0) {
                console.log("Você foi derrotado durante o ano letivo! Jogo terminado.");
                return;
            }

            const continuar = prompt("Você quer enfrentar o próximo desafio? (s/n)");
            if (continuar === null) {
                console.log("Você decidiu sair do jogo. Até mais, estudante!");
                return;
            }
            if (continuar && continuar.toLowerCase() === 'n') {
                console.log("Você decidiu sair do jogo. Até mais, estudante!");
                return;
            }
            rodadaAtual++;
        }

        
        if (pontosNoAnoLetivo >= mediaTrimestre[faseAtual]) {
            enfrentarBoss();
            return; 
        }
    }
}

function enfrentarBoss() {
    console.log(`\nVocê enfrentou o Boss Jamerson do Trimestre ${faseAtual + 1}!`);
    const vidaBoss = 50;
    let vidaDoBoss = vidaBoss;

    while (vidaDoBoss > 0 && vida > 0) {
        console.log(`Vida do Boss: ${vidaDoBoss}, Sua vida: ${vida}`);
        const acao = prompt("Você quer atacar ou se defender? (a/d)");

        if (acao === null) {
            console.log("Você decidiu sair do jogo. Até mais, estudante!");
            return; 
        }

        if (acao && acao.toLowerCase() === 'a') {
            const dano = Math.floor(Math.random() * forca) + 1;
            vidaDoBoss -= dano;
            console.log(`Você atacou o boss e causou ${dano} de dano!`);
        } else if (acao && acao.toLowerCase() === 'd') {
            console.log("Você se defendeu e reduziu o dano do próximo ataque.");
            continue;
        } else {
            console.log("Ação inválida, você perdeu a vez.");
        }

        
        const danoBoss = Math.floor(Math.random() * 20) + 1;
        vida -= danoBoss;
        console.log(`O boss atacou e causou ${danoBoss} de dano!`);
    }

    if (vida <= 0) {
        console.log("Você foi derrotado pelo boss! Jogo terminado.");
    } else {
        console.log("Você derrotou o boss! Parabéns!");
        
        trocarPontosExtras();
        faseAtual++;
        pontosNoAnoLetivo = 0;
        rodadaAtual = 0;
        proximaRodada();
    }
}

function trocarPontosExtras() {
    console.log(`Você ganhou ${pontosExtras} pontos extras!`);
    while (pontosExtras > 0) {
        const acao = prompt("Você quer gastar seus pontos extras em vida ou força? (v/f) ou digite 'sair' para continuar sem gastar");
        
        if (acao === null || acao.toLowerCase() === 'sair') {
            break;
        }

        if (acao.toLowerCase() === 'v') {
            const vidaGasta = Math.min(pontosExtras * 5, 100 - vida);
            vida += vidaGasta;
            pontosExtras -= vidaGasta / 5;
            console.log(`Você gastou pontos extras e recuperou ${vidaGasta} de vida! Sua vida agora é ${vida}.`);
        } else if (acao.toLowerCase() === 'f') {
            const forcaGasta = Math.min(pontosExtras, 10);
            forca += forcaGasta;
            pontosExtras -= forcaGasta;
            console.log(`Você gastou pontos extras e aumentou sua força em ${forcaGasta}! Sua força agora é ${forca}.`);
        } else {
            console.log("Ação inválida, tente novamente.");
        }
    }
}

function enfrentarDesafio(desafio) {
    let pontosGanho = 0;
    switch (desafio) {
        case 0:
            console.log("Você teve uma prova difícil!");
            const estudar = prompt("Você quer estudar para a prova? (s/n)");
            if (estudar === null) {
                console.log("Você decidiu sair do jogo. Até mais, estudante!");
                return;
            }

            if (estudar && estudar.toLowerCase() === 's') {
                const chanceDeSucesso = Math.random();
                if (chanceDeSucesso > 0.2) {
                    pontosGanho = Math.floor(Math.random() * 6) + 5;
                    console.log(`Você estudou e ganhou ${pontosGanho} pontos!`);
                } else {
                    const dano = Math.floor(Math.random() * 10);
                    vida -= dano;
                    console.log(`Você se distraiu e perdeu ${dano} de vida.`);
                }
            } else {
                console.log("Você esqueceu a matéria e decidiu tentar colar na prova.");
                const colar = prompt("Você quer tentar colar? (s/n)");
                if (colar === null) {
                    console.log("Você decidiu sair do jogo. Até mais, estudante!");
                    return; 
                }

                if (colar && colar.toLowerCase() === 's') {
                    const chanceDeColar = Math.random();
                    if (chanceDeColar > 0.5) {
                        pontosGanho = Math.floor(Math.random() * 6) + 5;
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
            if (participarTrabalho === null) {
                console.log("Você decidiu sair do jogo. Até mais, estudante!");
                return; 
            }

            if (participarTrabalho && participarTrabalho.toLowerCase() === 's') {
                const chanceDeSucesso = Math.random();
                if (chanceDeSucesso > 0.3) {
                    pontosGanho = Math.floor(Math.random() * 6) + 5;
                    console.log(`Você participou do trabalho e ganhou ${pontosGanho} pontos!`);
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
            if (ajudarAmigo === null) {
                console.log("Você decidiu sair do jogo. Até mais, estudante!");
                return; 
            }

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
        case 4:
            console.log("Você se distraiu jogando videogame e perdeu tempo!");
            const perdaDeTempo = Math.floor(Math.random() * 10);
            vida -= perdaDeTempo;
            console.log(`Você perdeu ${perdaDeTempo} de vida por se distrair.`);
            break;
        case 5:
            console.log("Você encontrou um livro de dicas para os estudos!");
            const lerLivro = prompt("Você quer estudar o livro? (s/n)");
            if (lerLivro === null) {
                console.log("Você decidiu sair do jogo. Até mais, estudante!");
                return; // Termina o jogo se o jogador pressionar cancelar
            }

            if (lerLivro && lerLivro.toLowerCase() === 's') {
                pontosGanho = Math.floor(Math.random() * 6) + 5; // Ganha entre 5 e 10 pontos
                console.log(`Você estudou o livro e ganhou ${pontosGanho} pontos!`);
            } else {
                console.log("Você decidiu não estudar o livro.");
            }
            break;
    }

    pontosNoAnoLetivo = Math.min(pontosNoAnoLetivo + pontosGanho, maxPontos[faseAtual]); // Limita os pontos acumulados
    pontosExtras += Math.floor(Math.random() * 3); // Ganha pontos extras aleatórios

    if (vida <= 0) {
        console.log("Você não conseguiu sobreviver ao ano letivo...");
    }
}


