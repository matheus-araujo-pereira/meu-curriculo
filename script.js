document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada com sucesso!');
    // Adicione interatividade futura aqui
});

// Interatividade para animação das barras de progresso ao entrar na visualização
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const value = bar.getAttribute('aria-valuenow');
                bar.style.transition = 'width 3.5s ease-in-out';
                bar.style.width = `${value}%`;
                observer.unobserve(bar); // Para evitar que a animação seja repetida
            }
        });
    }, { threshold: 0.5 }); // 50% da barra precisa estar visível

    progressBars.forEach(bar => {
        bar.style.width = '0%'; // Inicializa as barras com largura 0
        observer.observe(bar);
    });
});
