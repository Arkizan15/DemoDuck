// Test script for result page image display
// This script simulates the result page loading and checks image display for all animals

// Mock DOM elements
const mockDOM = {
    getElementById: function(id) {
        if (id === 'resultImage') {
            return { innerHTML: '' };
        }
        if (id === 'resultTitle') {
            return { textContent: '' };
        }
        if (id === 'traitButtons') {
            return { innerHTML: '' };
        }
        if (id === 'animalName') {
            return { textContent: '' };
        }
        if (id === 'resultDescription') {
            return { textContent: '' };
        }
        if (id === 'compatibilityList') {
            return { innerHTML: '' };
        }
        return null;
    },
    querySelectorAll: function(selector) {
        return [];
    },
    addEventListener: function(event, callback) {}
};

// Mock sessionStorage
const mockSessionStorage = {
    getItem: function(key) {
        if (key === 'quizAnswers') {
            return JSON.stringify(this.answers);
        }
        return null;
    },
    setItem: function(key, value) {},
    answers: []
};

// Mock window.location
const mockWindow = {
    location: { href: '' }
};

// Set up mocks
global.document = mockDOM;
global.sessionStorage = mockSessionStorage;
global.window = mockWindow;

// Load the required modules
const fs = require('fs');
const path = require('path');

// Load animalData.js as a module
const animalDataPath = path.join(__dirname, 'js', 'animalData.js');
const animalDataContent = fs.readFileSync(animalDataPath, 'utf8');
// Extract the animalProfiles object
const animalProfilesMatch = animalDataContent.match(/const animalProfiles = ({[\s\S]*?});/);
if (!animalProfilesMatch) {
    throw new Error('Could not find animalProfiles in animalData.js');
}
const animalProfilesCode = animalProfilesMatch[1];
const animalProfiles = eval(`(${animalProfilesCode})`);

// Load calculateAnimalResult function
const calculateAnimalResultMatch = animalDataContent.match(/function calculateAnimalResult\([\s\S]*?\) {[\s\S]*?}/);
if (!calculateAnimalResultMatch) {
    throw new Error('Could not find calculateAnimalResult function');
}
const calculateAnimalResultCode = calculateAnimalResultMatch[0];
eval(calculateAnimalResultCode);

// Test function
function testResultPage() {
    console.log('Testing result page image display for all animals...\n');

    const animals = Object.keys(animalProfiles);
    let passedTests = 0;
    let totalTests = animals.length;

    animals.forEach(animal => {
        // Simulate quiz answers that result in this animal
        const answers = Array(10).fill({ type: animal });
        mockSessionStorage.answers = answers;

        // Reset DOM
        mockDOM.getElementById('resultImage').innerHTML = '';

        // Call displayResult
        displayResult();

        // Check if image is set correctly
        const resultImageDiv = mockDOM.getElementById('resultImage');
        const expectedImageName = animal.charAt(0).toUpperCase() + animal.slice(1);
        const expectedSrc = `img/${expectedImageName}.png`;

        if (resultImageDiv.innerHTML.includes(expectedSrc)) {
            console.log(`✓ ${animal}: Image correctly set to ${expectedSrc}`);
            passedTests++;
        } else {
            console.log(`✗ ${animal}: Expected image ${expectedSrc}, but got: ${resultImageDiv.innerHTML}`);
        }
    });

    console.log(`\nTest Results: ${passedTests}/${totalTests} animals have correct image display.`);

    // Check if image files exist
    console.log('\nChecking image file existence...');
    const imgDir = path.join(__dirname, 'img');
    const files = fs.readdirSync(imgDir);
    const pngFiles = files.filter(file => file.endsWith('.png'));

    animals.forEach(animal => {
        const expectedFile = `${animal.charAt(0).toUpperCase() + animal.slice(1)}.png`;
        if (pngFiles.includes(expectedFile)) {
            console.log(`✓ ${expectedFile} exists`);
        } else {
            console.log(`✗ ${expectedFile} missing`);
        }
    });

    return passedTests === totalTests;
}

if (require.main === module) {
    testResultPage();
}

module.exports = { testResultPage };
