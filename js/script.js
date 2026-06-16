const APK_DOWNLOAD_URL = 'https://github.com/USERNAME/PortalEd_Lite/releases/latest/download/PortalEd_Lite.apk';

window.addEventListener('DOMContentLoaded', () => {
  const downloadButton = document.getElementById('downloadButton');
  if (!downloadButton) {
    return;
  }

  downloadButton.setAttribute('href', APK_DOWNLOAD_URL);
  downloadButton.addEventListener('click', () => {
    downloadButton.classList.add('button-clicked');
  });
});
