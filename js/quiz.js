// quiz.js - Quiz page logic

let currentQuestionIndex = 0;
let userAnswers = [];

// Scroll to the question area (accounting for sticky navbar)
function scrollToQuestion() {
    const card = document.querySelector('.question-card');
    if (card) {
        const offset = window.innerWidth < 768 ? 20 : 80;
        const top = card.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', initQuiz);

function initQuiz() {
    displayQuestion();
    updateProgress();
}

function displayQuestion() {
    const questionContainer = document.getElementById('questionContainer');

    if (currentQuestionIndex >= quizData.questions.length) {
        // Quiz completed
        showQuizCompleted();
        return;
    }

    const currentQuestion = quizData.questions[currentQuestionIndex];

    questionContainer.innerHTML = `
        <div class="question-card">
            <h2 class="question-title">${currentQuestion.question}</h2>
            <div class="options-container">
                ${currentQuestion.answers.map((answer, index) => `
                    <button class="option-btn" onclick="selectOption(${index})">
                        <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                        <div class="option-text">${answer.text}</div>
                    </button>
                `).join('')}
            </div>
        </div>
        <div class="navigation-buttons">
            <div class="progress-container">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${(currentQuestionIndex + 1) / quizData.questions.length * 100}%"></div>
                </div>
                <div class="progress-text">Pertanyaan ${currentQuestionIndex + 1} dari ${quizData.questions.length}</div>
            </div>
            <div class="buttons-row">
                <button class="btn-nav" onclick="previousQuestion()" ${currentQuestionIndex === 0 ? 'disabled' : ''}>Sebelumnya</button>
                <button class="btn-nav" id="nextBtn" onclick="nextQuestion()" disabled>Selanjutnya</button>
            </div>
        </div>
    `;

    // Restore previously selected answer if navigating back
    if (userAnswers[currentQuestionIndex]) {
        const savedAnswer = userAnswers[currentQuestionIndex];
        const optionButtons = document.querySelectorAll('.option-btn');
        currentQuestion.answers.forEach((answer, index) => {
            if (answer.text === savedAnswer.text) {
                optionButtons[index].classList.add('selected');
                document.getElementById('nextBtn').disabled = false;
            }
        });
    }

    updateProgress();
    scrollToQuestion();
}

function selectOption(answerIndex) {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    const selectedAnswer = currentQuestion.answers[answerIndex];

    userAnswers[currentQuestionIndex] = selectedAnswer;

    // Highlight selected option
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, index) => {
        if (index === answerIndex) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    // Enable next button
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        completeQuiz();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function updateProgress() {
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        progressFill.style.width = `${(currentQuestionIndex + 1) / quizData.questions.length * 100}%`;
    }
}

function showQuizCompleted() {
    const questionContainer = document.getElementById('questionContainer');

    questionContainer.innerHTML = `
        <div class="quiz-completed">
            <h2>Kuis Selesai!</h2>
            <p>Terima kasih telah mengikuti tes kepribadian. Klik tombol di bawah untuk melihat hasilnya.</p>
            <button class="btn-result" onclick="completeQuiz()">Lihat Hasil</button>
        </div>
    `;
}

function completeQuiz() {
    // Store answers in sessionStorage
    sessionStorage.setItem('quizAnswers', JSON.stringify(userAnswers));

    // Redirect to result page
    window.location.href = 'result.html';
}

// Allow keyboard navigation
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight' && !document.getElementById('nextBtn').disabled) {
        nextQuestion();
    } else if (event.key === 'ArrowLeft' && currentQuestionIndex > 0) {
        previousQuestion();
    }
});
