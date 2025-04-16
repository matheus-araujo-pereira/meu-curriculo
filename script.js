document.addEventListener('DOMContentLoaded', () => {
    console.log('Página carregada com sucesso!');
    // Adicione interatividade futura aqui
});

// Interatividade para animação das barras de progresso
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const value = bar.getAttribute('aria-valuenow');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.transition = 'width 3.5s ease-in-out';
            bar.style.width = `${value}%`;
        }, 300);
    });
});
