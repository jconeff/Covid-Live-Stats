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

        //loop through the questions and run endQuiz function after the last question
        if (current < questions.length - 1) {

            if (event.target.innerHTML === questions[current].a) {
                health = health - 1;
                current++;
                startQuiz();
            } else {
                current++;
                startQuiz();
            }
        } else {
            endQuiz();
        }
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

    document.querySelector("#quiz-body").classList.add("hide");
    document.querySelector("#question").classList.add("hide");
    document.querySelector("#choices").classList.add("hide");
    //document.querySelector("#quizStart").classList.add("hide");

    if (health >= 0) {
        //display if the user is not suspected to have COVID-19
        var resultBody = document.createElement("div");
        resultBody.className = "tile is-child";

        var resultText = document.createElement("h3");
        resultText.textContent = "It seems that you are okay! To stay informed on the most up-to-date COVID-19 stats, please vsit the link below.";
        resultText.className = "has-text-centered is-size-5 has-text-weight-medium mb-3";

        var linkBody = document.createElement("div");
        linkBody.className = "tile is-child";  
        var resultLink = document.createElement("button");
        resultLink.textContent = "Click here to find a clinic near you!"
        resultLink.className = "button is-fullwidth is-medium is-rounded is-primary"
        resultLink.setAttribute("href", "essentials.html")

        //append creted items
        document.querySelector("#quiz-body").appendChild(resultBody);
        resultBody.appendChild(resultText);
        document.querySelector("#quiz-container").appendChild(linkBody);
        linkBody.appendChild(resultLink);
    
    } else {
        //display if the user is suspected of having COVID-19
        var resultBody = document.createElement("div");
        resultBody.className = "tile is-child";
        var resultText = document.createElement("h3");
        resultText.textContent = "You may be eligible for COVID-19 testing. Please click the link below to view the clinics near you, or contact your health care provider for more information.";
        resultText.className = "has-text-centered is-size-5 has-text-weight-medium mb-3";

        var linkBody = document.createElement("div");
        linkBody.className = "tile is-child";
        var resultLink = document.createElement("button");
        resultLink.textContent = "Click here see the most up-to-date stats in you state!"
        resultLink.className = "button is-fullwidth is-medium is-rounded is-primary"
        resultLink.setAttribute("href", "index.html")

        //append created items
        document.querySelector("#quiz-body").appendChild(resultBody);
        resultBody.appendChild(resultText);
        document.querySelector("#quiz-container").appendChild(linkBody);
        linkBody.appendChild(resultLink);
    } 
}

