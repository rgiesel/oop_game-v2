/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

// Adds a click event listener to the 'start game' button to start a new game
document.getElementById('btn__reset').addEventListener('click', () => {
  game = new Game;
  game.startGame();
});

/* Adds a click event listener to the keyboard buttons on the game screen
that calls the handleInteraction method for the letter that was clicked */
document.getElementById('qwerty').addEventListener('click', (event) => {
  if (event.target.className === 'key') {
    game.handleInteraction(event.target);
  }
});

/* Adds a keyup event listener that matches the key pressed to the same key on
the game screen keyboard. That key is then clicked, causing the above click
event listener to run */
document.addEventListener('keyup', (event) => {
  let matchingElement;
  document.querySelectorAll('.key').forEach( element => {
    if (element.textContent === event.key) {
      matchingElement = element;
    }
  });
  if (matchingElement !== undefined) {
  matchingElement.click();
  }
});
