'use strict';

const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
let diceEL = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const player0E1 = document.querySelector('.player--0')
const player1E1 = document.querySelector('.player--1')

let currentScore = 0
let activePlayer = 0
let scores = [0, 0]
let playing = true;


score0El.textContent = 0
score1El.textContent = 0
diceEL.classList.add('hidden')

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player0E1.classList.toggle('player--active')
    player1E1.classList.toggle('player--active')
}



btnRoll.addEventListener('click', function () {
    if (playing) {
        diceEL.classList.remove('hidden')

        const dice = Math.trunc(Math.random() * 6) + 1

        diceEL.src = `dice-${dice}.png`;

        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore

        } else {
            switchPlayer()
        }
    }
}
)

btnHold.addEventListener('click', function () {
    if (playing) {

        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

        if (scores[activePlayer] >= 20) {
            playing = false
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            diceEL.classList.add('hidden')

        } else {
            switchPlayer()
        }


    }
}
)

btnNew.addEventListener('click', function () {
    let scores = [0, 0]
    let currentScore = 0
    let activePlayer = 0
    let playing = true;
    score0El.textContent = 0
    score1El.textContent = 0
    current0El.textContent = 0
    current1El.textContent = 0
    diceEL.classList.add('hidden')
    player0E1.classList.remove('player--winner')
    player1E1.classList.remove('player--winner')
    player0E1.classList.add('player--active')
    player1E1.classList.remove('player--active')



})