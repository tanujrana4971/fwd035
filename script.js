// 1. Dynamic Greeting: Changes based on the user's local time
const greetingElement = document.querySelector('.capital');

if (greetingElement) {
    const currentHour = new Date().getHours();
    let greetingText = 'Good Evening';

    if (currentHour < 12) {
        greetingText = 'Good Morning';
    } else if (currentHour < 18) {
        greetingText = 'Good Afternoon';
    }

    // Updates the text while keeping your styled <span> intact
    greetingElement.innerHTML = `${greetingText}, <span>Tanuj!</span>`;
}


// 2. Live Search Filter: Hides/shows featured notes as you type
const searchBar = document.querySelector('.searchbar');
const noteCards = document.querySelectorAll('.f-card');

if (searchBar) {
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        noteCards.forEach(card => {
            // Checks all the text inside the card (title, author, subject)
            const cardText = card.innerText.toLowerCase();
            if (cardText.includes(searchTerm)) {
                card.style.display = 'flex'; // Keep visible
            } else {
                card.style.display = 'none'; // Hide if it doesn't match
            }
        });
    });
}


// 3. Interactive Star Toggle: Click the star to favorite/unfavorite a note
const stars = document.querySelectorAll('.star');

stars.forEach(star => {
    star.style.cursor = 'pointer'; // Changes mouse to a pointer on hover
    star.style.transition = 'color 0.2s';
    
    star.addEventListener('click', function() {
        // Toggles the color between light gray and your #f59e0b gold
        if (this.style.color === 'rgb(203, 213, 225)') { // Tailwind slate-300
            this.style.color = '#f59e0b';
        } else {
            this.style.color = '#cbd5e1'; 
        }
    });
});