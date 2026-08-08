document.addEventListener("DOMContentLoaded", () => {
    // Inicializa o body transparente para fade-in
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.3s ease-in-out";
    
    // Força o reflow para garantir a animação de entrada
    requestAnimationFrame(() => {
        document.body.style.opacity = "1";
    });

    // Intercepta os cliques em links internos
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(e) {
            const href = link.getAttribute("href");
            const target = link.getAttribute("target");
            
            // Ignora abas novas, links externos, âncoras e mailto/tel
            if (target === "_blank" || !href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#") || href.includes("javascript")) {
                return;
            }

            e.preventDefault();
            
            // Aplica o fade-out
            document.body.style.opacity = "0";
            
            // Aguarda a transição de 300ms antes de navegar
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    });

    // Animações de Scroll (Fade In Up)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0');
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-on-scroll').forEach(el => {
        el.classList.add('opacity-0'); // starts hidden
        observer.observe(el);
    });
});

// Restaura a opacidade caso o usuário use o botão de Voltar do navegador (BFCache)
window.addEventListener("pageshow", function(e) {
    if (e.persisted) {
        document.body.style.opacity = "1";
    }
});
