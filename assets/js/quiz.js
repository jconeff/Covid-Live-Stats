//quiz questions
var questions = [{
        q: "Are you experiencing any of the following symptoms: severe difficulty breathing, severe chest pain, feeling confused or unsure of where you are, losing consciousness ",
        ch: ["Yes", "No"],
        a: "Yes"
    },
    {
        q: "Are you feeling sick?",
        ch: ["Yes", "No"],
        a: "Yes"
    },
    {
        q: "In the two weeks before you felt sick, did you care for or have close contact (within 6 feet of an infected person for at least 15 minutes) with someone with symptoms of COVID-19, tested for COVID-19, or diagnosed with COVID-19?",
        ch: ["Yes", "No"],
        a: "Yes"
    },
    {
        q: "Do you have any of the following: Fever, Cough, Mild or moderate dificulty breathing, Sore throat, Body ache, Vomiting or diarrhea, New loss of taste or smell, congestion or runny nose, other symptoms",
        ch: ["Yes", "No"],
        a: "Yes"
    },
    {
        q: "Do you live in a long-term care facility, nursing home, or homeless shelter?",
        ch: ["Yes", "No"],
        a: "Yes"
    },
    {
        q: "In the last two weeks, have you worked or volunteered in a healthcare facility or as a first responder? Healthcare facilities include a hospital, other medical setting (including dental care setting), or long-term care facility",
        ch: ["Yes", "No"],
        a: "Yes"
    }
]

//variables
var current = 0;
var answer = document.querySelectorAll(".answer");
var health = 0;
var button = document.querySelector(".button");
var btnStart = document.querySelector("#quizStart");

//display series of questions
for (button of answer) {

    var question = document.getElementById("quiz-q");

    button.addEventListener("click", function (event) {

        if (event.target.innerHTML === questions[current].a) {
            current++;
            startQuiz();
        } else {
            current++;
            health++;
            startQuiz();
        }
        endQuiz();
    })
}

function startQuiz(event) {

    var question = document.getElementById("quiz-q");
    var userChoice = questions[current].q;
    question.innerHTML = userChoice;
    document.querySelector("#quizStart").classList.add("hide");
    document.querySelector("#intro").classList.add("hide");
    document.querySelector("#choices").classList.remove("hide");
    document.querySelector("#quiz-q").classList.remove("hide");

    document.querySelector("#yes").innerHTML = questions[current].ch[0]
    document.querySelector("#no").innerHTML = questions[current].ch[1]
}

function endQuiz(event) {

    if (health > 0) {
        //display if the user is not suspected to have COVID-19
        document.querySelector("#quiz-body").classList.add("hide");
        $("#quiz-container").append(`
    <div class="tile is-parent is-vertical box is-6">
        <p>get help</p>
    </div>
    `)
    } else {
        //display if the user is suspected of having COVID-19
        document.querySelector("#quiz-body").classList.add("hide");
        $("#quiz-container").append(`
    <div class="tile is-parent is-vertical box is-6">
        <p>all ok</p>
    </div>
    `)
    }
}