// Seleciona o botão de clique no HTML
const botao = document.getElementById('button');
// Inicializa o contador com o valor salvo no localStorage ou define como 0 se ainda não houver valor salvo
let contador = parseInt(localStorage.getItem('contador')) || 0; 

// Inicializa uma variável de controle para contar cliques no botão
let cliques = 0;

// Exibe o valor inicial do contador na tela
document.getElementById('contador_front').innerHTML = contador;

// Seleciona o contêiner do evento e o oculta inicialmente
const eventContainer = document.querySelector('.event');
eventContainer.style.display = 'none'; 

// Função que incrementa o contador ao clicar e controla a exibição de mensagens e animações
function clique_contador() {
  const view_contador = document.getElementById('contador_front');
  const aviso = document.getElementById('Aviso');
  cliques++; // Incrementa o número de cliques

  // Limita a 1 clique por usuário até que a página seja atualizada
  if (cliques <= 1) {
    contador++;  // Incrementa o valor do contador
    view_contador.innerHTML = contador;  // Atualiza o valor no elemento HTML
    localStorage.setItem('contador', contador);  // Salva o valor atualizado do contador no localStorage

    // Adiciona uma animação ao contador
    view_contador.classList.add('animate__animated', 'animate__backInDown'); 
    setTimeout(() => {
      view_contador.classList.remove('animate__backInDown'); // Remove a animação para permitir novas execuções futuras
    }, 1000); // Duração da animação em milissegundos

    // Verifica metas predefinidas e exibe uma mensagem e uma mídia específica para cada uma
    if (contador === 1) {
      mostrarMensagem("Parabéns! Você é o primeiro a clicar!", "https://pa1.aminoapps.com/7790/f8fb0f700a473aec65540430eaffdf55358af64fr1-500-258_hq.gif", 5000);
    } else if (contador === 10) {
      mostrarMensagem("Parabéns! Você é o 10º a clicar!", "https://media.tenor.com/OmEvYalz8AkAAAAM/sml-t-rex.gif", 5000);
    } else if (contador === 100) {
      mostrarMensagem("Parabéns! Você é o 100º a clicar!", "https://media.tenor.com/hmDMrE1yMAkAAAAM/when-the-coding-when-the.gif", 5000);
    } else if (contador === 1000) {
      mostrarMensagem("Parabéns! Você é o 1000º a clicar!", "https://i.pinimg.com/originals/56/a6/14/56a614261d423da1825452363174c685.gif", 5000);
    } else if (contador === 10000) {
      mostrarMensagem("Parabéns! Você é o 10000º a clicar!", "https://media2.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif", 5000);
    } else if (contador === 100000) {
      mostrarMensagem("Parabéns! Você é o 100000º a clicar!", "https://gifdb.com/images/high/pokemon-pikachu-shocked-meme-opened-mouth-f0bdaotih5j4cmjb.gif", 5000);
    } else if (contador === 1000000) {
      mostrarMensagem("Parabéns! Você é o 1000000º a clicar!", "https://images.squarespace-cdn.com/content/v1/594974c0e58c62484cbd42f9/1602018534188-YBAICQDPYHIBA8773I3G/funny+pug+meme+gif+stroller+baby", 5000);
    }
  } else {
    // Exibe aviso caso o usuário já tenha clicado uma vez
    aviso.innerHTML = 'Você já alcançou o máximo de cliques, atualize a página para continuar clicando...';
  }
}

// Função para exibir uma mensagem personalizada e mídia associada ao contador
function mostrarMensagem(mensagem, mediaURL, tempo) {
  // Exibe o contêiner do evento
  eventContainer.style.display = 'flex'; 

  // Limpa o conteúdo anterior do contêiner
  eventContainer.innerHTML = '';

  // Define a mídia de fundo no contêiner dependendo do tipo (imagem ou vídeo)
  eventContainer.style.backgroundImage = `url(${mediaURL})`;
  eventContainer.style.backgroundSize = 'cover'; // Faz com que a imagem ocupe todo o contêiner
  eventContainer.style.backgroundPosition = 'center'; // Centraliza a imagem de fundo
  eventContainer.style.backgroundRepeat = 'no-repeat'; // Evita repetição da imagem

  // Cria um overlay para escurecer a imagem de fundo e aplicar um filtro de brilho
  const overlay = document.createElement('div');
  overlay.style.position = 'absolute';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Fundo escuro semitransparente
  overlay.style.filter = 'brightness(0.5)'; // Aplica filtro de brilho
  overlay.style.zIndex = '1'; // Camada inferior ao texto
  eventContainer.appendChild(overlay);

  // Cria um elemento para a mensagem e personaliza o estilo
  const novaMensagem = document.createElement('div');
  novaMensagem.textContent = mensagem; // Define o texto da mensagem
  novaMensagem.style.color = '#e0e0e0'; // Cor do texto
  novaMensagem.style.fontSize = '40px'; // Tamanho da fonte
  novaMensagem.style.textAlign = 'center'; // Centraliza o texto
  novaMensagem.style.position = 'absolute'; // Posicionamento relativo
  novaMensagem.style.top = '50%'; // Centraliza verticalmente
  novaMensagem.style.left = '50%'; // Centraliza horizontalmente
  novaMensagem.style.transform = 'translate(-50%, -50%)'; // Ajuste fino para centralização
  novaMensagem.style.padding = '20px'; // Padding adicional
  novaMensagem.style.zIndex = '2'; // Camada superior ao overlay
  eventContainer.appendChild(novaMensagem); 

  // Oculta a mensagem após o tempo especificado
  setTimeout(() => {
    eventContainer.style.display = 'none'; // Oculta o contêiner
    eventContainer.style.backgroundImage = 'none'; // Remove a imagem de fundo
  }, tempo); // Tempo em milissegundos para ocultação
}
