// API adatbetöltés randomuser.me-ről (pl. bemutatkozó szöveghez és egyéb adatokhoz)
document.addEventListener('DOMContentLoaded', () => {
    const bioElement = document.querySelector('.about-section p');
    const profileImage = document.querySelector('.about-image img');
    const contactSection = document.getElementById('contact');
    
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            
            // Felhasználói adatok kinyerése az API válaszból
            const name = `${user.name.first} ${user.name.last}`;
            const address = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.country}`;
            const email = user.email;
            const profilePicture = user.picture.large;
            const phone = user.phone;
            const age = user.registered.age;

            // Adatok megjelenítése az oldalon
            bioElement.innerHTML = `Üdvözöllek! A nevem ${name}, ${age} éves vagyok, Magyarországról származom és Web fejlesztéssel foglalkozom. Életcélom, hogy bejárjam a világ összes országát, ezért gyakran változtatom lakóhelyem. Jelenleg ${user.location.city}-ben élek, és munkám mellett online kurzust végzek a Budapesti Műszaki Egyetemen.`;
            
            // Profilkép megjelenítése
            profileImage.src = profilePicture;

            // Kapcsolati adatok megjelenítése a Kapcsolat szekcióban
            contactSection.innerHTML = `
                <h2>Kapcsolat</h2>
                <p><strong>Cím:</strong> ${address}</p>
                <p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Telefon:</strong> ${phone}</p>
            `;
        })
        .catch(error => {
            console.error("API hiba:", error);
        });
});
