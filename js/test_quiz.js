// Test script to verify quiz functionality after removing Jaguar answers

// Load the quiz data
const quizData = require('./js/quizData.js');
const { calculateAnimalResult } = require('./js/animalData.js');

console.log('Testing quiz data...');

// Check that no question has Jaguar answers
let hasJaguar = false;
quizData.questions.forEach((question, qIndex) => {
    question.answers.forEach((answer, aIndex) => {
        if (answer.type === 'Jaguar') {
            console.log(`Found Jaguar in question ${qIndex + 1}, answer ${String.fromCharCode(65 + aIndex)}`);
            hasJaguar = true;
        }
    });
});

if (!hasJaguar) {
    console.log('✓ No Jaguar answers found in quiz data.');
} else {
    console.log('✗ Jaguar answers still present.');
}

// Check that each question has exactly 10 answers
let allHave10 = true;
quizData.questions.forEach((question, qIndex) => {
    if (question.answers.length !== 10) {
        console.log(`Question ${qIndex + 1} has ${question.answers.length} answers, expected 10.`);
        allHave10 = false;
    }
});

if (allHave10) {
    console.log('✓ All questions have exactly 10 answers.');
} else {
    console.log('✗ Some questions do not have 10 answers.');
}

// Simulate quiz completion with random answers
console.log('\nSimulating quiz completion...');
let simulatedAnswers = [];
quizData.questions.forEach(question => {
    const randomIndex = Math.floor(Math.random() * question.answers.length);
    simulatedAnswers.push(question.answers[randomIndex]);
});

console.log(`Simulated ${simulatedAnswers.length} answers.`);

// Calculate result
const resultAnimal = calculateAnimalResult(simulatedAnswers);
console.log(`Calculated result animal: ${resultAnimal}`);

// Check if result is valid
const validAnimals = Object.keys(require('./js/animalData.js').animalProfiles);
if (validAnimals.includes(resultAnimal)) {
    console.log('✓ Result animal is valid.');
} else {
    console.log('✗ Result animal is invalid.');
}

console.log('Test completed.');
