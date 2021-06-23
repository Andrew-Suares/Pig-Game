'use strict'
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
// ! these need to be out here for scope purposes or else they can oly be used inside the newGame function
let scores, currentScore, activePlayer, playing

// Start Game State
const newGame = () => {
	// ! Visible parts
	score0El.textContent = 0
	score1El.textContent = 0
	current0El.textContent = 0
	current1El.textContent = 0
	player0El.classList.remove('player--winner')
	player1El.classList.remove('player--winner')
	player1El.classList.remove('player--active')
	player0El.classList.add('player--active')
	diceEl.classList.add('hidden')
	// ! Function Parts
	scores = [0, 0]
	currentScore = 0
	activePlayer = 0
	playing = true
}

newGame()

btnNew.addEventListener('click', newGame)

const switchPlayer = () => {
	document.getElementById(`current--${activePlayer}`).textContent = 0
	// ! Switch Player
	// If the active player is 0 then we want it to be 1 or else it should be 0
	activePlayer = activePlayer === 0 ? 1 : 0
	currentScore = 0
	player0El.classList.toggle('player--active')
	player1El.classList.toggle('player--active')
}

// Roll Dice Function

btnRoll.addEventListener('click', () => {
	if (playing) {
		// ! generate a random dice roll
		const dice = Math.floor(Math.random() * 6) + 1
		// ! display dice
		diceEl.classList.remove('hidden')
		diceEl.src = `dice-${dice}.png`
		// ! check for rolled 1 if true switch to next player
		if (dice !== 1) {
			currentScore += dice
			document.getElementById(`current--${activePlayer}`).textContent =
				currentScore
		} else {
			switchPlayer()
		}
	}
})

// Hold Button function
btnHold.addEventListener('click', () => {
	if (playing) {
		// ! 1. add current score to active player score
		scores[activePlayer] += currentScore
		document.getElementById(`score--${activePlayer}`).textContent =
			scores[activePlayer]
		// ! 2. check if players score is >=100 if so finish the game.
		if (scores[activePlayer] >= 100) {
			playing = false
			diceEl.classList.add('hidden')
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.add('player--winner')
			document
				.querySelector(`.player--${activePlayer}`)
				.classList.remove('player--active')
		} else {
			// ! if not switch player
			switchPlayer()
		}
	}
})
