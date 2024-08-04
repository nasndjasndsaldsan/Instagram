document.addEventListener('DOMContentLoaded', () => {
    const confettiContainer = document.getElementById('confetti');
    const confettiCount = 100; // Número total de piezas de confeti

    for (let i = 0; i < confettiCount; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti');
        confettiPiece.style.width = `${Math.random() * 10 + 5}px`;
        confettiPiece.style.height = confettiPiece.style.width;
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duración aleatoria
        confettiPiece.style.animationDelay = `${Math.random() * 5}s`; // Retardo aleatorio
        confettiContainer.appendChild(confettiPiece);
    }
});
