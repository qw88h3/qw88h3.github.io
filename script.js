// API adatbetöltés randomuser.me-ről (pl. bemutatkozó szöveghez)
document.addEventListener('DOMContentLoaded', () => {
    const bioElement = document.querySelector('.about-section p');

    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const name = `${user.name.first} ${user.name.last}`;
            bioElement.innerHTML = `Üdvözöllek! A nevem ${name}, webfejlesztő vagyok...`;
        })
        .catch(error => {
            console.error("API hiba:", error);
        });
});
