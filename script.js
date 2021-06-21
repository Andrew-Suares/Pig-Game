'use strict'

const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Start Game State
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')
let currentScore = 0

btnRoll.addEventListener('click', () => {
	// ! generate a random dice roll
	const dice = Math.floor(Math.random() * 6) + 1
	// ! display dice
	diceEl.classList.remove('hidden')
	diceEl.src = `dice-${dice}.png`
	// ! check for rolled 1 if true switch to next player
	if (dice !== 1) {
		currentScore += dice
		current0El.textContent = currentScore // change later
	} else {
		player0.classList.remove('player--active')
		player1.classList.add('player--active')
	}
})
