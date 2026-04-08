document.addEventListener('DOMContentLoaded', () => {
    const btnPortfolio = document.getElementById('btn-portfolio');
    const btnResume = document.getElementById('btn-resume');
    const viewPortfolio = document.getElementById('view-portfolio');
    const viewResume = document.getElementById('view-resume');

    function switchView(activeBtn, activeView, inactiveBtn, inactiveView) {
        // Atualiza Botões
        activeBtn.classList.add('active');
        inactiveBtn.classList.remove('active');

        // Atualiza Views
        activeView.classList.add('active');
        inactiveView.classList.remove('active');
        
        // Scroll para o topo ao trocar
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    btnPortfolio.addEventListener('click', () => {
        switchView(btnPortfolio, viewPortfolio, btnResume, viewResume);
    });

    btnResume.addEventListener('click', () => {
        switchView(btnResume, viewResume, btnPortfolio, viewPortfolio);
    });
});