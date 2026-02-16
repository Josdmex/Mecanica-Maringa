// --- CONFIGURAÇÕES ---
// As palavras que vão aparecer rotacionando
const palavras = ["FROTA", "SCANIA", "VOLVO", "CARRETA", "MÁQUINA"];

// Pegando o elemento HTML onde vamos escrever
const elementoTexto = document.querySelector('.digitar-texto');

// Variáveis de controle (não precisa mexer)
let indicePalavra = 0; // Qual palavra do array estamos usando
let indiceLetra = 0; // Qual letra da palavra estamos digitando
let estaApagando = false; // Se estamos escrevendo ou apagando
let velocidadeDigitar = 80; // Velocidade padrão de digitação

// --- A FUNÇÃO QUE FAZ A MÁGICA ---
function digitar() {
    // Pega a palavra atual completa
    const palavraAtual = palavras[indicePalavra];

    if (estaApagando) {
        // SE ESTIVER APAGANDO: Remove uma letra
        elementoTexto.textContent = palavraAtual.substring(0, indiceLetra - 1);
        indiceLetra--;
        velocidadeDigitar = 40; // Apaga mais rápido que digita
    } else {
        // SE ESTIVER DIGITANDO: Adiciona uma letra
        elementoTexto.textContent = palavraAtual.substring(0, indiceLetra + 1);
        indiceLetra++;
        velocidadeDigitar = 80; // Velocidade normal de digitação
    }

    // --- VERIFICAÇÕES ---

    // Se terminou de digitar a palavra inteira
    if (!estaApagando && indiceLetra === palavraAtual.length) {
        estaApagando = true; // Começa a apagar
        velocidadeDigitar = 2000; // PAUSA LONGA (2 segundos) antes de começar a apagar
    }
    
    // Se terminou de apagar a palavra inteira
    else if (estaApagando && indiceLetra === 0) {
        estaApagando = false; // Começa a digitar de novo
        indicePalavra++; // Passa para a próxima palavra da lista
        velocidadeDigitar = 500; // Pausa curta antes de começar a próxima

        // Se chegou na última palavra da lista, volta para a primeira
        if (indicePalavra === palavras.length) {
            indicePalavra = 0;
        }
    }

    // Chama a função de novo depois do tempo definido na 'velocidadeDigitar'
    setTimeout(digitar, velocidadeDigitar);
}

// Inicia o processo quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    // Pequeno delay inicial para começar
    setTimeout(digitar, 1000);
});

// --- PARTE 1: TYPEWRITER (ORIGINAL) ---
// Coloquei dentro de um IF para não dar erro na página de serviços

document.addEventListener('DOMContentLoaded', () => {
    
    // Verifica se existe o elemento de digitação na página
    const elementoTexto = document.querySelector('.digitar-texto');

    if (elementoTexto) {
        const palavras = ["FROTA", "SCANIA", "VOLVO", "CARRETA", "MÁQUINA"];
        let indicePalavra = 0;
        let indiceLetra = 0;
        let estaApagando = false;
        let velocidadeDigitar = 80;

        function digitar() {
            const palavraAtual = palavras[indicePalavra];

            if (estaApagando) {
                elementoTexto.textContent = palavraAtual.substring(0, indiceLetra - 1);
                indiceLetra--;
                velocidadeDigitar = 40;
            } else {
                elementoTexto.textContent = palavraAtual.substring(0, indiceLetra + 1);
                indiceLetra++;
                velocidadeDigitar = 80;
            }

            if (!estaApagando && indiceLetra === palavraAtual.length) {
                estaApagando = true;
                velocidadeDigitar = 2000;
            } else if (estaApagando && indiceLetra === 0) {
                estaApagando = false;
                indicePalavra++;
                velocidadeDigitar = 500;
                if (indicePalavra === palavras.length) {
                    indicePalavra = 0;
                }
            }
            setTimeout(digitar, velocidadeDigitar);
        }
        setTimeout(digitar, 1000);
    }

    // --- PARTE 2: CÓDIGO NOVO (SÓ RODA NA PÁGINA SERVIÇOS) ---
    // Verifica se existe o modal na página
    const modal = document.getElementById('modal-servico');

    if (modal) {
        // --- DADOS DOS SERVIÇOS (ATUALIZADO) ---
    const dadosServicos = {
        'diagnostico': {
            titulo: 'Diagnóstico Avançado',
            descricao: 'Scanner original para leitura de módulos Scania, Volvo e Mercedes. Identificação precisa de falhas em sensores, chicotes e centrais eletrônicas.',
            img: 'https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        'cambio': {
            titulo: 'Câmbio e Transmissão',
            descricao: 'Manutenção especializada em caixas de câmbio manuais e automatizadas (I-Shift, Opticruise). Troca de engrenagens, sincronizados e rolamentos.',
            img: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        'embreagem': {
            titulo: 'Sistema de Embreagem',
            descricao: 'Substituição de kits de embreagem (platô, disco e colar), servo de embreagem e cilindros mestres. Regulagem para garantir trocas suaves.',
            img: 'embreagem_sv.jpeg'
        },
        'alinhamento': {
            titulo: 'Alinhamento Técnico',
            descricao: 'Alinhamento de eixos dianteiros e traseiros. Correção de geometria para evitar desgaste irregular de pneus e melhorar a dirigibilidade.',
            img: 'alinhamento_sv.jpg'
        },
        'suspensao': {
            titulo: 'Suspensão Pesada',
            descricao: 'Troca de molas, bolsas de ar, amortecedores, buchas e tirantes. Manutenção completa para garantir estabilidade e conforto na estrada.',
            img: 'suspensao_sv.jpg'
        },
        'freios': {
            titulo: 'Freios',
            descricao: 'Revisão completa de cuícas, válvulas, lonas, tambores e ajustadores automáticos. Segurança total para o sistema de frenagem da sua frota.',
            img: 'freio_sv.jpg'
        },
        'injecao': {
            titulo: 'Injeção Eletrônica Diesel',
            descricao: 'Limpeza e reparo de bicos injetores, unidades injetoras e bombas de alta pressão. Solução para falhas de potência e excesso de fumaça.',
            img: 'injecao_sv.jpg'
        },
        'correia': {
            titulo: 'Correias e Tensores',
            descricao: 'Troca preventiva de correias de acessórios, ventilador e tensores. Evite paradas inesperadas por rompimento de correia na estrada.',
            img: 'correia_sv.jpeg'
        },
        'oleo': {
            titulo: 'Troca de Óleo',
            descricao: 'Lubrificantes originais e de alta performance para motor, câmbio e diferencial. Atendemos todas as especificações das montadoras.',
            img: 'trocaoleo_sv.jpeg'
        },
        'filtros': {
            titulo: 'Troca de Filtros',
            descricao: 'Substituição de filtros de ar, óleo, combustível (racor), secador de ar e filtro de cabine. Proteção essencial para o motor.',
            img: 'filtro_sv.jpg'
        },
        'higienizacao': {
            titulo: 'Higienização de Cabine',
            descricao: 'Limpeza detalhada interna, higienização de estofados e sistema de ar condicionado. Conforto e saúde para o motorista.',
            img: 'higienizacao_sv.jpg'
        }
    };

        // Funções para abrir e fechar o modal
        window.abrirModal = function(id) {
            const dados = dadosServicos[id];
            document.getElementById('modal-titulo').innerText = dados.titulo;
            document.getElementById('modal-descricao').innerText = dados.descricao;
            document.getElementById('modal-img').src = dados.img;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Trava a rolagem
        };

        window.fecharModal = function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Destrava a rolagem
        };

        // Fecha se clicar fora da janela
        window.onclick = function(event) {
            if (event.target == modal) {
                fecharModal();
            }
        };
    }
});

// --- SLIDER DE FUNDO (CARROSSEL) ---

let slideAtual = 0;
const slides = document.querySelectorAll('.slide');
const track = document.querySelector('.slider-track');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function irParaSlide(index) {
    // Garante que o índice não quebre (loop infinito)
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    // 1. Move o trilho
    track.style.transform = `translateX(-${index * 100}%)`;
    
    // 2. Atualiza as bolinhas
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    // === A MÁGICA DO RESTART (NOVO) ===
    
    // Primeiro: Pausa todos os vídeos dos outros slides
    slides.forEach(slide => {
        const video = slide.querySelector('video');
        if (video) {
            video.pause();
        }
    });

    // Segundo: Pega o slide atual e vê se tem vídeo
    const slideAtivo = slides[index];
    const videoAtivo = slideAtivo.querySelector('video');

    if (videoAtivo) {
        videoAtivo.currentTime = 0; // Volta para o início (0s)
        videoAtivo.play(); // Dá o play
    }

    slideAtual = index;
}

// Passar automático a cada 6 segundos
let intervaloSlider = setInterval(() => {
    irParaSlide(slideAtual + 1);
}, 6000); 

// Pausar o slider (não o vídeo) se o mouse estiver em cima das bolinhas
const navDots = document.querySelector('.slider-dots');
if (navDots) {
    navDots.addEventListener('mouseenter', () => {
        clearInterval(intervaloSlider);
    });
    navDots.addEventListener('mouseleave', () => {
        intervaloSlider = setInterval(() => {
            irParaSlide(slideAtual + 1);
        }, 6000);
    });
}

// --- MENU MOBILE TOGGLE (ATUALIZADO) ---
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('hamburgerBtn');
    
    // Abre/Fecha o Menu Preto
    menu.classList.toggle('active');
    
    // Transforma o Ícone (3 riscos <-> X)
    btn.classList.toggle('active');
}