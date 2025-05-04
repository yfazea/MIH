 // Mobile menu toggle
 document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Set current prayer time (for demo purposes)
function setPrayerTimes() {
    const prayers = [
        { name: 'Fajr', time: '5:45 AM', Iqama:'6:00 AM', active: false },
        { name: 'Sunrise', time: '7:12 AM', active: false },
        { name: 'Dhuhr', time: '1:30 PM', active: true }, // Current prayer
        { name: 'Asr', time: '4:30 PM', active: false },
        { name: 'Maghrib', time: '7:48 PM', active: false },
        { name: 'Isha', time: '8:45 PM', active: false }
    ];

    const container = document.getElementById('prayer-times');
    container.innerHTML = '';

    prayers.forEach(prayer => {
        const prayerElement = document.createElement('div');
        prayerElement.className = `prayer-time bg-white p-3 rounded-lg text-center ${prayer.active ? 'active' : ''}`;
        prayerElement.innerHTML = `
            <div class="font-bold ${prayer.active ? 'text-white' : 'text-dark'}">${prayer.name}</div>
            <div class="${prayer.active ? 'text-orange-200' : 'text-primary'}">${prayer.time}</div>
        `;
        container.appendChild(prayerElement);
    });
}

// Initialize prayer times
setPrayerTimes();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // more info 
            function toggleDetails(event) {
                event.preventDefault();
                const details = document.getElementById('more-details');
                details.style.display = (details.style.display === 'none' || details.style.display === '') ? 'block' : 'none';
              }

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});