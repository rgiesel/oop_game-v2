/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }

   /**
   * Display phrase on game board
   */
   addPhraseToDisplay() {
     const phraseUL = document.getElementById('phrase').firstElementChild;
     for (let i = 0; i < this.phrase.length; i++) {
       if (/[a-z]/.test(this.phrase[i])) {
         const letter = document.createElement('li');
         letter.setAttribute('class', `hide letter ${this.phrase[i]}`);
         letter.textContent = this.phrase[i];
         phraseUL.appendChild(letter);
       } else if (/\s/.test(this.phrase[i])) {
         const space = document.createElement('li');
         space.setAttribute('class', 'space');
         space.textContent = ' ';
         phraseUL.appendChild(space);
       }
     }
   }

   /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
      return this.phrase.includes(letter);
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
      document.querySelectorAll(`.${letter}`)
      .forEach(match => match.setAttribute('class', `show letter ${letter}`));
    }
 }
