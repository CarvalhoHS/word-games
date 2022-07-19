const scoreDisplay = document.getElementById("score-display")
const questionDisplay = document.getElementById('question-display')

const questions = [{
    quiz: ['cobra', 'jacaré', 'Capital'],
    questions:['Brasiliense','ASA-Al'],
    correct: 2
},{
    quiz: ['Linda', 'Modelo do Mundo', 'Minha namorada'],
    questions:['Vit','outras'],
    correct: 1
},{
    quiz: ['Loucura', 'Loucura', 'Loucura'],
    questions:['Luciano Hulk','Faustão'],
    correct: 1
},{
    quiz: ['V', 'Super-Herois', 'Gore'],
    questions:['The Boys','TopGun'],
    correct: 1
},{
    quiz: ['Cartas', 'Mana', 'Rng'],
    questions:['Magic','hearthstone'],
    correct: 2
}
]

let score = 0
scoreDisplay.textContent = score


function populateQuestions() {
    questions.forEach(question => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')
        questionBox.innerHTML = "box!"
        questionDisplay.appendChild(questionBox)
    })
}

populateQuestions()