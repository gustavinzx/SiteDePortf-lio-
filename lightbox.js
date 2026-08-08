(function () {
    // Pega todas as fotos da grade
    const fotos = Array.from(document.querySelectorAll('.foto-item img'));
    let atual = 0;
    let origemFoco = null; // Elemento que ativou o lightbox

    // Torna cada foto acessível via teclado
    fotos.forEach(function (foto, i) {
        foto.setAttribute('tabindex', '0');
        foto.setAttribute('role', 'button');
        foto.setAttribute('aria-label', foto.alt ? 'Abrir foto: ' + foto.alt : 'Abrir foto ' + (i + 1));

        // Ativação por clique
        foto.addEventListener('click', function () {
            origemFoco = foto;
            abrir(i);
        });

        // Ativação por teclado (Enter ou Espaço)
        foto.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                origemFoco = foto;
                abrir(i);
            }
        });
    });

    // Cria o HTML do lightbox dinamicamente
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Visualizador de foto');
    overlay.innerHTML = `
        <div class="lightbox-conteudo">
            <button class="lightbox-fechar" aria-label="Fechar lightbox">&#x2715;</button>
            <button class="lightbox-seta esquerda" aria-label="Foto anterior">&#8592;</button>
            <img class="lightbox-img" src="" alt="">
            <button class="lightbox-seta direita" aria-label="Próxima foto">&#8594;</button>
            <div class="lightbox-contador" aria-live="polite"></div>
        </div>
    `;
    document.body.appendChild(overlay);

    const img        = overlay.querySelector('.lightbox-img');
    const contador   = overlay.querySelector('.lightbox-contador');
    const btnFechar  = overlay.querySelector('.lightbox-fechar');
    const btnEsq     = overlay.querySelector('.lightbox-seta.esquerda');
    const btnDir     = overlay.querySelector('.lightbox-seta.direita');

    function abrir(index) {
        atual = index;
        img.src = fotos[atual].src;
        img.alt = fotos[atual].alt;
        contador.textContent = (atual + 1) + ' / ' + fotos.length;
        overlay.classList.add('ativo');
        document.body.style.overflow = 'hidden';
        // Foco automático no botão de fechar ao abrir
        btnFechar.focus();
    }

    function fechar() {
        overlay.classList.remove('ativo');
        document.body.style.overflow = '';
        // Devolve o foco ao elemento de origem
        if (origemFoco) {
            origemFoco.focus();
            origemFoco = null;
        }
    }

    function anterior() {
        atual = (atual - 1 + fotos.length) % fotos.length;
        img.src = fotos[atual].src;
        img.alt = fotos[atual].alt;
        contador.textContent = (atual + 1) + ' / ' + fotos.length;
    }

    function proximo() {
        atual = (atual + 1) % fotos.length;
        img.src = fotos[atual].src;
        img.alt = fotos[atual].alt;
        contador.textContent = (atual + 1) + ' / ' + fotos.length;
    }

    // Botões
    btnFechar.addEventListener('click', fechar);
    btnEsq.addEventListener('click', anterior);
    btnDir.addEventListener('click', proximo);

    // Clica fora da imagem pra fechar
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay || e.target === overlay.querySelector('.lightbox-conteudo')) {
            fechar();
        }
    });

    // Teclado: setas, ESC e Tab trap dentro do lightbox
    document.addEventListener('keydown', function (e) {
        if (!overlay.classList.contains('ativo')) return;
        if (e.key === 'ArrowLeft')  anterior();
        if (e.key === 'ArrowRight') proximo();
        if (e.key === 'Escape')     fechar();

        // Trap de foco: mantém Tab circulando dentro do lightbox
        if (e.key === 'Tab') {
            const focaveis = overlay.querySelectorAll('button');
            const primeiro = focaveis[0];
            const ultimo   = focaveis[focaveis.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === primeiro) {
                    e.preventDefault();
                    ultimo.focus();
                }
            } else {
                if (document.activeElement === ultimo) {
                    e.preventDefault();
                    primeiro.focus();
                }
            }
        }
    });
})();