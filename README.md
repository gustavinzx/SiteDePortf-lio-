# Portfólio de Fotografia - Giovanna Lobo 📸

Um portfólio web premium, minimalista e de alta performance desenvolvido para destacar o trabalho fotográfico em ensaios de casamento, intervenções culturais e eventos esportivos.

## 🚀 Tecnologias e Arquitetura

Este projeto foi construído com foco em leveza, performance e design de ponta, utilizando uma stack estática moderna sem dependências pesadas de backend:

- **HTML5 Semântico:** Estrutura organizada para SEO e acessibilidade.
- **Tailwind CSS (via CDN):** Para um estilo altamente responsivo, rápido e configurado com tokens personalizados.
- **Vanilla JavaScript:** Gerenciamento de rotas e transições de página fluidas (SPA-like experience), além de Lightbox para exibição das fotos.
- **Otimização de Imagens (WebP):** Utilização da tag `<picture>` para servir fotos nativas de altíssima qualidade compactadas em formato WebP, com fallback seguro para JPG.

## ✨ Destaques do Projeto

1. **Estética Premium:** Paleta escura (Deep Violet / Bordeaux) contrastada com acentos rosa bebê (`#ffb3c6`), transmitindo sofisticação e elegância.
2. **Micro-interações:** Animações de `fade-on-scroll` (elementos revelando-se durante a rolagem) e `hover effects` (sombras fluidas e zooms) que criam uma experiência imersiva para o usuário.
3. **Transições de Página Fluidas:** Um script customizado evita o recarregamento "duro" das páginas, simulando uma aplicação de página única (SPA) por meio de crossfades na opacidade do corpo do site.
4. **Design 100% Responsivo:** A grade de imagens tipo *Masonry* e as tipografias fluidas garantem que a arte seja o foco principal, quer o usuário acesse de um monitor Ultrawide ou de um iPhone.

## 📁 Estrutura de Pastas

```text
├── assets/
│   ├── css/       # Estilos globais e componentes (galeria, lightbox)
│   ├── img/       # Imagens originais e webp (casamento, redbull, meskla...)
│   └── js/        # Lógica de interface (transições, menus, lightbox)
├── *.html         # Páginas do site (Index, Galerias, Sobre Mim, 404)
└── robots.txt     # Regras de indexação para motores de busca
```

## 🌐 Como Executar (Localmente)

Por ser um projeto puramente estático (`Vanilla`), nenhuma etapa de *build* (Node/NPM) é exigida!

Basta clonar o repositório e abrir o arquivo `index.html` em qualquer navegador:
```bash
git clone https://github.com/gustavinzx/SiteDePortf-lio-.git
cd SiteDePortf-lio-
# Abra o index.html no navegador, ou use o Live Server do VS Code.
```

---
*© 2026 Giovanna Lobo. Todos os direitos reservados.*
