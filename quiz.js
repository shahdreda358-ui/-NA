 const questions = [

    {
        question: "أول يوم لينا كان إمتى؟ ❤️",

        answers: [
            {
                text: "14/3",
                correct: true
            },
            {
                text: "13/11",
                correct: false
            }
        ]
    },

    {
        question: "بتحب مين أكتر؟ ❤️",

        answers: [
            {
                text: "انتي طبعا❤️",
                correct: true
            },
            {
                text: "رونالدو😂",
                correct: false
            }
        ]
    },

    {
        question: "لما بقولك براحتك بكون قصداها والا لاء😂",

        answers: [
            {
                text: "لاء️",
                correct: true
            },
            {
                text: "اه😌",
                correct: false
            }
        ]
    },

    {
        question: "لو زعلت منك، تعمل إيه؟ 😤",

        answers: [
            {
                text: "تصالحني فورًا ❤️",
                correct: true
            },
            {
                text: "تسيبني لحد ما أهدى 😂",
                correct: false
            }
        ]
    },

    {
        question: "لو طلبت بريك ب كون فعلا قاصداه والا لاء❤️",

        answers: [
            {
                text: "لاء❤️",
                correct: true
            },
            {
                text: "اه😂",
                correct: false
            }
        ]
    },

    {
        question: "اي اكتر دلع بحبه 🥹❤️",

        answers: [
            {
                text: "مراميرو❤️",
                correct: true
            },
            {
                text: "ميرو😂",
                correct: false
            }
        ]
    }

];


/* =========================
   Variables
========================= */

let currentQuestion = 0;
let score = 0;


/* =========================
   Elements
========================= */

const questionElement =
    document.getElementById("question");

const questionNumber =
    document.getElementById("questionNumber");

const answersContainer =
    document.querySelector(".answers");

const questionCard =
    document.querySelector(".question-card");

const resultCard =
    document.getElementById("resultCard");

const resultIcon =
    document.getElementById("resultIcon");

const resultTitle =
    document.getElementById("resultTitle");

const resultMessage =
    document.getElementById("resultMessage");

const quizNextBtn =
    document.getElementById("quizNextBtn");

const finalCard =
    document.getElementById("finalCard");

const scoreElement =
    document.getElementById("score");


/* =========================
   Show Question
========================= */

function showQuestion() {

    const current =
        questions[currentQuestion];


    questionElement.textContent =
        current.question;


    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;


    answersContainer.innerHTML = "";


    current.answers.forEach(answer => {

        const button =
            document.createElement("button");


        button.classList.add("answer");


        button.textContent =
            answer.text;


        button.dataset.correct =
            answer.correct;


        button.addEventListener("click", function () {

            checkAnswer(answer.correct);

        });


        answersContainer.appendChild(button);

    });

}


/* =========================
   Check Answer
========================= */

function checkAnswer(correct) {

    questionCard.style.display =
        "none";


    resultCard.style.display =
        "block";


    if (correct) {

        score++;


        resultIcon.textContent =
            "🥰";


        resultTitle.textContent =
            "برافوووو عليك ❤️";


        resultMessage.textContent =
            "إيه الجمال ده! عارفني كويس أهو 😂❤️";

    }

    else {

        resultIcon.textContent =
            "😤";


        resultTitle.textContent =
            "ليلتك سودااا 😤";


        resultMessage.textContent =
            "أغضبتني! إزاي تختار الإجابة دي؟ 😂💔";

    }

}


/* =========================
   Next Question
========================= */

quizNextBtn.addEventListener("click", function () {

    currentQuestion++;


    resultCard.style.display =
        "none";


    if (currentQuestion < questions.length) {

        questionCard.style.display =
            "block";


        showQuestion();

    }

    else {

        showFinalResult();

    }

});


/* =========================
   Final Result
========================= */

function showFinalResult() {

    finalCard.style.display =
        "block";


    scoreElement.textContent =
        `نتيجتك: ${score} / ${questions.length}`;


    const finalMessage =
        document.querySelector(".final-message");


    if (score === questions.length) {

        finalMessage.textContent =
            "برافوو عليك! كده أنت عارفني أكتر من نفسي 😂❤️";

    }

    else if (score >= questions.length / 2) {

        finalMessage.textContent =
            "مش وحش 😂❤️ بس محتاج تذاكرني أكتر!";

    }

    else {

        finalMessage.textContent =
            "ليلتك سودا رسمي 😂😤❤️";

    }

}


/* =========================
   Start Quiz
========================= */

showQuestion();