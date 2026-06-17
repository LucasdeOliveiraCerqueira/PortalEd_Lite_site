// URL do APK nas Releases do GitHub. Altere para o link correto do seu repositório.
const APK_DOWNLOAD_URL = 'https://raw.githubusercontent.com/LucasdeOliveiraCerqueira/PortalEd_Lite_site/main/assets/app-debug.apk';

// Aguarda o carregamento do DOM antes de acessar elementos da página.
window.addEventListener('DOMContentLoaded', () => {
  const downloadButton = document.getElementById('downloadButton');

  // Verificar se o botão existe antes de aplicar comportamento.
  if (!downloadButton) {
    return;
  }

  // Atualiza o link do botão para o APK.
  downloadButton.setAttribute('href', APK_DOWNLOAD_URL);

  // Adiciona uma classe no clique para efeito visual opcional.
  downloadButton.addEventListener('click', () => {
    downloadButton.classList.add('button-clicked');
  });
});
