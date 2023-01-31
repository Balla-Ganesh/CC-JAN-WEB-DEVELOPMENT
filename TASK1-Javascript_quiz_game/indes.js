const questions = [ 
    {
        question : "Grand Central Terminal, Park Avenue, New York is the world's",
        a: "largest railway station",
        b: "highest railway station",
        c: "longest railway station",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question : "Entomology is the science that studies",
        a: "Behavior of human beings",
        b: "Insects",
        c: "The origin and history of technical and scientific terms",
        d: "The formation of rocks",
        ans: "ans2"
    },
    {
        question : "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
        a: "Asia",
        b: "Africa",
        c: "Europe",
        d: "Australia",
        ans: "ans2"
    },
    {
        question : "Garampani sanctuary is located at",
        a: "Junagarh, Gujarat",
        b: "Diphu, Assam",
        c: "Kohima, Nagaland",
        d: "Gangtok, Sikkim",
        ans: "ans2"
    },
    {
        question : "For which of the following disciplines is Nobel Prize awarded?",
        a: "Physics and Chemistry",
        b: "Physiology or Medicine",
        c: "Literature, Peace and Economics",
        d: "All of the above",
        ans: "ans4"
    },
    {
        question : "Hitler party which came into power in 1933 is known as",
        a: "Labour Party",
        b: "Nazi Party",
        c: "Ku-Klux-Klan",
        d: "Democratic Party",
        ans: "ans2"
    },
    {
        question : "In which year of First World War Germany declared war on Russia and France?",
        a: "1914",
        b: "1915",
        c: "1916",
        d: "T1917",
        ans: "ans1"
    },
    {
        question : "ICAO stands for",
        a: "International Civil Aviation Organization",
        b: "Indian Corporation of Agriculture Organization",
        c: "Institute of Company of Accounts Organization",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question : "India's first Technicolor film ____ in the early 1950s was produced by ____",
        a: "'Jhansi Ki Rani', Sohrab Modi",
        b: "'Jhansi Ki Rani', Sir Syed Ahmed",
        c: "'Mirza Ghalib', Sohrab Modi",
        d: "'Mirza Ghalib', Munshi Premchand",
        ans: "ans1"
    },
    {
        question : "India has largest deposits of ____ in the world.",
        a: "gold",
        b: "copper",
        c: "mica",
        d: "None of the above",
        ans: "ans3"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.getElementById('submit');
const answers = document.querySelectorAll('.answer');

let questionCount = 0;

let score=0;

const loadQuestion = () => {
    document.getElementById('no').innerHTML = "Question " + (questionCount+1);
    const questionList = questions[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}
loadQuestion();

const getAnswer = () => {
    let answer;
    answers.forEach((currAnswer) => {
        if(currAnswer.checked){
            answer=currAnswer.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((currAnswer) => currAnswer.checked = false );
};

const submitEventListener = () => {
    const answerChecked = getAnswer();
    if(answerChecked === questions[questionCount].ans){
        score++;
    }
    deselectAll();
    questionCount++;
    if(questionCount<10){
        loadQuestion();
        document.getElementById('curr_score').innerHTML = "Current Score: "+ score;
    }
    else{
        document.getElementById('quizz_container').innerHTML = `
        <div class="completed">
        <h2>Thanks for taking the Quiz</h2>
        <p>Your Total Score is: ${score}</p>
        <p>No of Questions Correct: ${score}</p>
        <p>No of Questions incorrect: ${questionCount-score}</p>
        <button class="com_btn"><a href="./quiz.html">Play Again</a></button>
        </div>
        `;
    }
};

submit.addEventListener('click', submitEventListener );

