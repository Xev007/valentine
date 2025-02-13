const noButton = document.getElementById('noButton');
noButton.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 100));
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

function showDateMessage() {
    document.getElementById('mainContainer').style.display = 'none';
    document.getElementById('dateMessage').style.display = 'block';
}
