const noButton = document.getElementById('noButton');
noButton.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 100));
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

function showDateMessage() {
    const mainContainer = document.getElementById('mainContainer');
    const dateMessage = document.getElementById('dateMessage');

    mainContainer.style.opacity = '1';
    mainContainer.style.transition = 'opacity 1s ease';
    mainContainer.style.opacity = '0';

    setTimeout(() => {
        mainContainer.style.display = 'none';
        dateMessage.style.display = 'block';
        dateMessage.style.opacity = '0';

        setTimeout(() => {
            dateMessage.style.transition = 'opacity 1s ease';
            dateMessage.style.opacity = '1';
        }, 50);
    }, 1000);
}

