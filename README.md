# PortalEd_Lite

Landing page estática para apresentação e download do aplicativo Android PortalEd_Lite.

## Estrutura

- `index.html` — página única com layout e link de download
- `css/styles.css` — estilos responsivos e decoração visual
- `js/script.js` — lógica simples para configurar o link do botão
- `assets/logo.png` — logo do aplicativo exibido na página
- `assets/favicon.ico` — ícone do navegador

## Uso

1. Atualize o `href` do botão `BAIXAR APK` em `index.html` com a URL direta do APK nas Releases do GitHub.
2. Se desejar, ajuste `js/script.js` para usar um link diferente ou adicionar comportamentos extras.
3. Publique o site em GitHub Pages ou outro host estático.

## Deploy

- Copie os arquivos para o branch `gh-pages` ou use a pasta `main` no GitHub Pages.
- Abra o site e confirme que o botão `BAIXAR APK` leva ao APK corretamente.

## Observações

- O design é mobile-first, simples e focado no download.
- Não há backend, apenas HTML, CSS e JavaScript puro.
- Comentários foram adicionados nos arquivos para facilitar a manutenção.

Para alterar o apk Basta colocar em assets e alterar isso no codigo:
<a id="downloadButton" class="button primary-button"
   href="https://github.com/SEU_USUARIO/PortalEd_Lite/releases/latest/download/PortalEd_Lite.apk"
   role="button" aria-label="Baixar APK do PortalEd Lite">
  BAIXAR APK
</a>
