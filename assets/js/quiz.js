//quiz questions
var questions = [{
        q: "Are you experiencing any of the following symptoms: severe difficulty breathing, severe chest pain, feeling confused or unsire of where you are, losing consciousness ",
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
var question = document.getElementById("#quiz-q");
var healthScore = 0;

//display next question
function nextQuestion(event) {
    document.querySelector("#choices").classList.addClass("hide");
}

//display if the user is not suspected to have COVID-19
function allOk(event) {

}

//display if the user is suspected of having COVID-19
function getHelp(event) {

}

//display series of questions
function startQuiz(event) {

button.addEventListener("click", function (event) {

    //display 1st question
    var userChoice = questions[0].q;

    question.innerHTML = userChoice;
    document.querySelector("#choices").classList.remove("hide");

    document.querySelector("#yes").innerHTML = questions[current].ch[0]
    document.querySelector("#no").innerHTML = questions[current].ch[1]

    
    if (event.target.innerHTML === questions[0].a) {

        getHelp();
    } else {

        //display 2nd question
        var userChoice = questions[1].q;

        question.innerHTML = userChoice;
        document.querySelector("#choices").classList.remove("hide");

        document.querySelector("#yes").innerHTML = questions[current].ch[0]
        document.querySelector("#no").innerHTML = questions[current].ch[1]
    }

    nextQuestion();

    if (event.target.innerHTML === questions[1].a) {

        //display 3rd question
        healthScore++;
        console.log(healthScore);

        var userChoice = questions[2].q;

        question.innerHTML = userChoice;
        document.querySelector("#choices").classList.remove("hide");

        document.querySelector("#yes").innerHTML = questions[current].ch[0]
        document.querySelector("#no").innerHTML = questions[current].ch[1]
        
    } else {

        allOk();
        
    }

    nextQuestion();

    if (event.target.innerHTML === questions[2].a) {

        //display 4th question and increase healthScore
        healthScore++;
        console.log(healthScore);

        var userChoice = questions[3].q;

        question.innerHTML = userChoice;
        document.querySelector("#choices").classList.remove("hide");

        document.querySelector("#yes").innerHTML = questions[current].ch[0]
        document.querySelector("#no").innerHTML = questions[current].ch[1]
        
    } else {

        //display 4th question
        var userChoice = questions[3].q;

        question.innerHTML = userChoice;
        document.querySelector("#choices").classList.remove("hide");

        document.querySelector("#yes").innerHTML = questions[current].ch[0]
        document.querySelector("#no").innerHTML = questions[current].ch[1]
    }

    nextQuestion();

    if (event.target.innerHTML === questions[3].a) {

        //display 5th question and increase healthScore
        healthScore++;
        console.log(healthScore);

        var userChoice = questions[4].q;

        question.innerHTML = userChoice;
        document.querySelector("#choices").classList.remove("hide");

        document.querySelector("#yes").innerHTML = questions[current].ch[0]
        document.querySelector("#no").innerHTML = questions[current].ch[1]

    } else {

        //display 5th question
        var userChoice = questions[4].q;

        question.innerHTML = userChoice;
        document.querySelector("#choices").classList.remove("hide");

        document.querySelector("#yes").innerHTML = questions[current].ch[0]
        document.querySelector("#no").innerHTML = questions[current].ch[1]
    }

    nextQuestion();

    if (event.target.innerHTML === questions[4].a) {

        //display 6th question and increase healthScore
        healthScore++;
        console.log(healthScore);

        var userChoice = questions[5].q;

        question.innerHTML = userChoice;
        document.querySelector("#choices").classList.remove("hide");

        document.querySelector("#yes").innerHTML = questions[current].ch[0]
        document.querySelector("#no").innerHTML = questions[current].ch[1]

    } else {

        //display 6th question
        var userChoice = questions[5].q;

        question.innerHTML = userChoice;
        document.querySelector("#choices").classList.remove("hide");

        document.querySelector("#yes").innerHTML = questions[current].ch[0]
        document.querySelector("#no").innerHTML = questions[current].ch[1]
    }

    nextQuestion();

    //if health score if more than 1, run getHelp function, otherwise, run allOk function
    if (healthScore > 0) {
        getHelp();
    } else {
        allOk();
    }
    
})
}