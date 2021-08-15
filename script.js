// Getting random number
const random_input = document.getElementById('random')
const random_button = document.getElementById('subrandom')
const started = document.getElementById('started')
// Getting guess inputs
const guess_input = document.getElementById('guess')
const guess_button = document.getElementById('subguess')
// Right or Wrong
const results = document.getElementById('results')

let random;

random_button.addEventListener('click', () => {
    // Generating random number
    let random_value = random_input.value
    let random_parsed = parseInt(random_value)
    random = Math.floor(Math.random() * random_parsed)
    // Printing random number for development 
    console.log(random)
    // Writing game started
    started.innerText = "Game Started"
})

guess_button.addEventListener('click', (req, res) => {
    // Guessing random number
    const guess_value = guess_input.value 
    const guess_parsed = parseInt(guess_value)
    // Matching random with guess
    if (random === guess_parsed) {
        results.innerText = "Correct answer"
    } else {
        results.innerText = "Wrong answer"
    }
})