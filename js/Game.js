/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = null;
   }

   /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
   createPhrases() {
    const phrases = [];
    const phrase1 = new Phrase('A Dime a Dozen');
    const phrase2 = new Phrase('Burst Your Bubble');
    const phrase3 = new Phrase('Cut to the Chase');
    const phrase4 = new Phrase('Back to Square One');
    const phrase5 = new Phrase('A Piece of Cake');
    phrases.push(phrase1, phrase2, phrase3, phrase4, phrase5);
    return phrases;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
      return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
      document.getElementById('phrase').firstElementChild.innerHTML = '';
      document.querySelectorAll('.key').forEach(key => {
        key.setAttribute('class', 'key');
        key.disabled = false;
      });
      // Sets the heart images representing 'lives' to full when a new game is started
      document.querySelectorAll("img").forEach(image => image.setAttribute('src', 'images/liveHeart.png'));
      document.getElementById('overlay').style.display = 'none';
      const phrase = this.getRandomPhrase();
      phrase.addPhraseToDisplay();
      this.activePhrase = phrase;
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
      if (document.querySelectorAll('.hide.letter').length === 0) {
        return true;
      } else {
        return false;
      }
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
      const heartNodes = document.querySelectorAll("img");
      heartNodes[(heartNodes.length - this.missed - 1)].setAttribute('src', 'images/lostHeart.png');
      this.missed += 1;
      if (this.missed === 5) {
        this.gameOver(false);
      }
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
      document.getElementById('overlay').style.display = 'flex';
      if (gameWon === false) {
        document.querySelector('#game-over-message').textContent = "You Lose. Try Again!";
        document.querySelector('#overlay').setAttribute('class', 'lose');
      } else if (gameWon === true) {
        document.querySelector('#game-over-message').textContent = "You Win!";
        document.querySelector('#overlay').setAttribute('class', 'win');
      }
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
      button.disabled = true;
      if (this.activePhrase.phrase.includes(button.textContent) === false) {
        button.classList.add('wrong');
        this.removeLife();
      } else if (this.activePhrase.phrase.includes(button.textContent)) {
          button.classList.add('chosen');
          this.activePhrase.showMatchedLetter(button.textContent);
          if (this.checkForWin()) {
          this.gameOver(true);
          }
      }
    }
 }
