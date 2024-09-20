let currentQuestion = 0;
let prize = 0;

const questions = [
    {
        question: "When is the Two-pot retirement system effective?",
        answers: {
            A: "01 September 2024",
            B: "01 January 2025",
            C: "31 December 2024",
            D: "01 March 2025"
        },
        correctAnswer: "A"
    },
    {
        question: "What is the minimum amount you are able to withdraw from your savings pot?",
        answers: {
            A: "R250",
            B: "R1 000",
            C: "R2 000",
            D: "R30 000"
        },
        correctAnswer: "C"
    },
    {
        question: "There are three types of 'Pots'. There is a Retirement pot, Vesting pot and ...",
        answers: {
            A: "Curry Pot",
            B: "Savings Pot",
            C: "Spending Pot",
            D: "Smoking Pot"
        },
        correctAnswer: "B"
    },
    {
        question: "What is the maximum amount that gets transferred to the savings pot as seeding capital?",
        answers: {
            A: "R100 000",
            B: "Everything",
            C: "R30 000",
            D: "R0"
        },
        correctAnswer: "C"
    },
    {
        question: "What rate will you be taxed on for withdrawals from your savings pot?",
        answers: {
            A: "CGT Tax rate",
            B: "Retirement Tax rate",
            C: "Marginal tax rate",
            D: "VAT rate"
        },
        correctAnswer: "C"
    },
    {
        question: "Gaynor has R600 000 in her Retirement pot at 31 August 2024. How much will be transferred to her savings pot?",
        answers: {
            A: "R60 000",
            B: "R30 000",
            C: "R600 000",
            D: "R15 000"
        },
        correctAnswer: "B"
    },
    {
        question: "Fabian has two Retirement funds. The first fund has R60 000 in. The second fund has R800 000. What will be transferred to his savings pot?",
        answers: {
            A: "R30 000 and R30 000",
            B: "R6 000 and R30 000",
            C: "R6 000 and R80 000",
            D: "R60 000 and R800 000"
        },
        correctAnswer: "B"
    },
    {
        question: "The two-pot retirement system applies to the following:",
        answers: {
            A: "Preservation Funds",
            B: "Provident Funds",
            C: "Retirement Annuity Funds",
            D: "All Funds"
        },
        correctAnswer: "D"
    },
    {
        question: "Why was the Two-Pot Retirement System created?",
        answers: {
            A: "Because SARS is greedy",
            B: "To make individuals rich",
            C: "To provide cash flow relief to those in need",
            D: "To buy cool new things"
        },
        correctAnswer: "C"
    },
    {
        question: "How often are you allowed to withdraw from your savings pot?",
        answers: {
            A: "Twice a year",
            B: "One withdrawal per tax year",
            C: "Every Quarter",
            D: "As many times as I want"
        },
        correctAnswer: "B"
    },
    {
        question: "Lindsay has R10 000 in her savings pot and R120 000 in her Retirement pot at the end of the 2025 tax year. She wants to do a withdrawal. What is the maximum she can withdraw?",
        answers: {
            A: "R10 000",
            B: "R120 000",
            C: "R130 000",
            D: "R30 000"
        },
        correctAnswer: "A"
    },
    {
        question: "Zuhaa has R13 000 in her savings pot in the 2025 tax year and did not make any withdrawals. She currently contributes R3 000 a month towards her Retirement fund. What is the maximum she can withdraw in the 2026 tax year?",
        answers: {
            A: "R13 000",
            B: "R3 000",
            C: "R25 000",
            D: "R36 000"
        },
        correctAnswer: "C"
    },
    {
        question: "Cassius has withdrawn the full R30 000 in his savings pot in the 2025 tax year. He contributes R5 000 a month towards his retirement. What is the maximum he is able to withdraw at the end of the 2026 tax year?",
        answers: {
            A: "R20 000",
            B: "R60 000",
            C: "R30 000",
            D: "R5 000"
        },
        correctAnswer: "A"
    }
];

function loadQuestion() {
    document.getElementById('question').innerText = questions[currentQuestion].question;
    document.getElementById('answerA').innerText = `A. ${questions[currentQuestion].answers.A}`;
    document.getElementById('answerB').innerText = `B. ${questions[currentQuestion].answers.B}`;
    document.getElementById('answerC').innerText = `C. ${questions[currentQuestion].answers.C}`;
    document.getElementById('answerD').innerText = `D. ${questions[currentQuestion].answers.D}`;
}

function showFireworks() {
    // Create a div for fireworks and style it to be on top of the background
    const fireworksContainer = document.createElement('div');
    fireworksContainer.style.position = 'fixed';
    fireworksContainer.style.top = '0';
    fireworksContainer.style.left = '0';
    fireworksContainer.style.width = '100%';
    fireworksContainer.style.height = '100%';
    fireworksContainer.style.zIndex = '9999';  // Ensure it's on top
    document.body.appendChild(fireworksContainer);

    const fireworks = new Fireworks(fireworksContainer, {
        speed: 2,
        particles: 200,
        traceLength: 3,
        explosion: 4,
        intensity: 30,
        flickering: 50,
        sound: {
            enabled: true,
            files: [
                'https://cdn.jsdelivr.net/gh/crashmax-dev/fireworks-js/sounds/explosion0.mp3',
                'https://cdn.jsdelivr.net/gh/crashmax-dev/fireworks-js/sounds/explosion1.mp3'
            ],
            volume: { min: 4, max: 8 }
        }
    });
    fireworks.start();

    // Stop fireworks after 5 seconds and remove the container
    setTimeout(() => {
        fireworks.stop();
        document.body.removeChild(fireworksContainer); // Remove the fireworks container after the show
    }, 5000); // 5 seconds
}

function chooseAnswer(selectedAnswer) {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        prize += 10000; // Increase prize if correct
        alert("Correct! Moving to next question.");
    } else {
        alert("Sorry, wrong answer. Game over!");
        return; // End the game
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        document.getElementById('prize').innerText = `R${prize}`;
    } else {
        alert("Congratulations! You've won R1 million!");
        
        // Delay showing fireworks to ensure the alert box closes first
        setTimeout(showFireworks, 1000); // Fireworks will show after 1 second delay
    }
}

loadQuestion(); // Load the first question when the game starts
