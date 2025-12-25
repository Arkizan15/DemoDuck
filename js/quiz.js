// quiz.js - Quiz page logic

let currentQuestionIndex = 0;
let userAnswers = [];

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', initQuiz);

function initQuiz() {
    displayQuestion();
    updateProgress();
}

function displayQuestion() {
    const questionContainer = document.getElementById('questionContainer');

    if (currentQuestionIndex >= quizQuestions.length) {
        // Quiz completed
        showQuizCompleted();
        return;
    }

    const currentQuestion = quizQuestions[currentQuestionIndex];

    questionContainer.innerHTML = `
        <div class="question-card">
            <h2 class="question-title">${currentQuestion.question}</h2>
            <div class="options-container">
                ${currentQuestion.options.map((option, index) => `
                    <button class="option-btn" onclick="selectOption('${String.fromCharCode(65 + index)}')">
                        <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                        <div class="option-text">${option}</div>
                    </button>
                `).join('')}
            </div>
        </div>
        <div class="navigation-buttons">
            <button class="btn-nav" onclick="previousQuestion()" ${currentQuestionIndex === 0 ? 'disabled' : ''}>Sebelumnya</button>
            <div class="progress-container">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${(currentQuestionIndex + 1) / quizQuestions.length * 100}%"></div>
                </div>
                <div class="progress-text">Pertanyaan ${currentQuestionIndex + 1} dari ${quizQuestions.length}</div>
            </div>
            <button class="btn-nav" id="nextBtn" onclick="nextQuestion()" disabled>Selanjutnya</button>
        </div>
    `;

    updateProgress();
}

function selectOption(answer) {
    userAnswers[currentQuestionIndex] = answer;

    // Highlight selected option
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, index) => {
        if (String.fromCharCode(65 + index) === answer) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    // Enable next button
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
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
        progressFill.style.width = `${(currentQuestionIndex + 1) / quizQuestions.length * 100}%`;
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
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight' && !document.getElementById('nextBtn').disabled) {
        nextQuestion();
    } else if (event.key === 'ArrowLeft' && currentQuestionIndex > 0) {
        previousQuestion();
    }
});
