SKAI — LANDING PAGE / CATÁLOGO

Arquivos:
- index.html
- css/style.css
- js/script.js
- assets/logo.png

COMO USAR
1. Extraia a pasta.
2. Abra o index.html no navegador.
3. Para publicar, envie a pasta para uma hospedagem estática (GitHub Pages, Netlify, Vercel, Hostinger etc.).

ALTERAR WHATSAPP
Abra js/script.js e altere:
const WHATSAPP_NUMBER = "5511999999999";
Use somente números: 55 + DDD + número.

ALTERAR FOTOS
A estrutura já está pronta para trocar os placeholders pelas fotos reais.
No index.html, procure os elementos com classes:
image-workshop
image-car
image-project
image-car-2
image-shop-2
image-project-2

Você pode trocar o fundo de cada card no CSS por:
background-image: url('../assets/nome-da-foto.jpg');

ADICIONAR PRODUTO/CARRO/PROJETO
Duplique um bloco <article class="catalog-card"> no index.html e altere:
- data-category="ambiente" / "carros" / "projetos"
- data-title
- data-description
- nome e categoria exibidos no card

A página já possui:
- menu responsivo
- hero
- apresentação da oficina
- serviços
- catálogo com filtros
- modal de detalhes
- botão WhatsApp
- layout responsivo para celular
