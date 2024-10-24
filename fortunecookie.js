// fortunecookie.js

// Lista de mensagens de sorte
const messages = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de você.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo."
];

// Função para abrir o biscoito e mostrar a mensagem
function openCookie() {
  const cookieImg = document.getElementById('cookie');
  const openedCookieSection = document.querySelector('.fortune-cookie-opened');
  const fortuneText = document.getElementById('fortune-text');
  const title = document.querySelector('.fortune-cookie h1');
  const instruction = document.querySelector('.fortune-cookie p');

  // Gera uma mensagem aleatória
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  // Esconde a imagem do biscoito fechado e mostra o aberto
  cookieImg.style.display = 'none';
  openedCookieSection.style.display = 'block';

  // Esconde o título e o parágrafo
  title.style.display = 'none';
  instruction.style.display = 'none';

  // Exibe a mensagem de sorte abaixo do h2
  fortuneText.innerHTML = randomMessage;
  fortuneText.style.display = 'block';
}

// Função para resetar e abrir outro biscoito
document.getElementById('btnReset').addEventListener('click', function() {
  const cookieImg = document.getElementById('cookie');
  const openedCookieSection = document.querySelector('.fortune-cookie-opened');
  const fortuneText = document.getElementById('fortune-text');
  const title = document.querySelector('.fortune-cookie h1');
  const instruction = document.querySelector('.fortune-cookie p');

  // Reseta a exibição
  cookieImg.style.display = 'block';
  openedCookieSection.style.display = 'none';
  fortuneText.style.display = 'none';

  // Mostra novamente o título e o parágrafo
  title.style.display = 'block';
  instruction.style.display = 'block';
});

  