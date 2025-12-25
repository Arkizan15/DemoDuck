// result.js - Result page logic

// Load and display result
function displayResult() {
    // Get answers from sessionStorage
    const answersJson = sessionStorage.getItem('quizAnswers');
    
    if (!answersJson) {
        // No quiz data, redirect to quiz page
        window.location.href = 'quiz.html';
        return;
    }

    const answers = JSON.parse(answersJson);
    
    // Calculate animal result
    const animalKey = calculateAnimalResult(answers);
    const animalProfile = animalProfiles[animalKey];

    // Update page content
    document.getElementById('resultTitle').textContent = 
        `SELAMAT! ANDA ADALAH....
${animalProfile.fullName.toUpperCase()}`;

    // Display traits
    const traitButtonsContainer = document.getElementById('traitButtons');
    traitButtonsContainer.innerHTML = animalProfile.traits.map((trait, index) => 
        `<button class="trait-btn ${index === 0 ? 'active' : ''}">${trait}</button>`
    ).join('');

    // Display description
    document.getElementById('animalName').textContent = animalProfile.name.toLowerCase();
    document.getElementById('resultDescription').textContent = animalProfile.description;

    // Display compatibility
    const compatibilityContainer = document.getElementById('compatibilityList');
    compatibilityContainer.innerHTML = animalProfile.compatibility.map(comp => {
        let compatClass = 'compatibility-medium';
        if (comp.level === 'high') compatClass = 'compatibility-high';
        if (comp.level === 'low') compatClass = 'compatibility-low';
        
        return `
            <div class="compatibility-item ${compatClass}">
                <div class="compatibility-icon"></div>
                <div class="compatibility-name">${comp.animal}</div>
                <div class="compatibility-percent">${comp.percent}%</div>
            </div>
        `;
    }).join('');

    // Add trait button interactions
    const traitButtons = document.querySelectorAll('.trait-btn');
    traitButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            traitButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Share result function
function shareResult() {
    const answersJson = sessionStorage.getItem('quizAnswers');
    if (!answersJson) return;

    const answers = JSON.parse(answersJson);
    const animalKey = calculateAnimalResult(answers);
    const animalProfile = animalProfiles[animalKey];

    const shareText = `Aku adalah ${animalProfile.fullName}! Coba tes kepribadian hewan kamu di DemoDuck!`;
    
    // Try to use Web Share API if available
    if (navigator.share) {
        navigator.share({
            title: 'DemoDuck - Hasil Tes',
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Hasil telah disalin ke clipboard!');
        }).catch(err => {
            alert('Gagal menyalin hasil. Silakan salin manual.');
        });
    }
}

// Initialize result page
document.addEventListener('DOMContentLoaded', displayResult);