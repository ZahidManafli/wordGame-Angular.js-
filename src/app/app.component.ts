import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wordGame';
  data = {
    words: [
      { word: 'apple', hint: 'A red or green fruit.' },
      { word: 'banana', hint: 'A yellow fruit with a peel.' },
      { word: 'elephant', hint: 'A large mammal with tusks.' },
      { word: 'computer', hint: 'An electronic device for processing data.' },
      {
        word: 'mountain',
        hint: 'A large landform that rises prominently above its surroundings.',
      },
      { word: 'ocean', hint: 'A vast body of saltwater.' },
      { word: 'guitar', hint: 'A musical instrument with strings.' },
      {
        word: 'sunflower',
        hint: 'A tall plant with a large, yellow flower head.',
      },
      {
        word: 'umbrella',
        hint: 'A device used to protect against rain or sunlight.',
      },
      { word: 'zebra', hint: 'A black and white striped African mammal.' },
      {
        word: 'pizza',
        hint: 'An Italian dish consisting of a round, flat base of dough.',
      },
      { word: 'octopus', hint: 'A sea creature with eight arms.' },
      {
        word: 'hiking',
        hint: 'An outdoor activity involving walking in natural environments.',
      },
      {
        word: 'jazz',
        hint: 'A genre of music that originated in the African American communities.',
      },
      {
        word: 'space',
        hint: 'The vast, seemingly infinite expanse beyond Earth.',
      },
      {
        word: 'robot',
        hint: 'A machine capable of carrying out tasks autonomously or with minimal human intervention.',
      },
      {
        word: 'library',
        hint: 'A place where books and other resources are available.',
      },
      { word: 'rainbow', hint: 'A multicolored arc seen after rain.' },
      {
        word: 'bicycle',
        hint: 'A two-wheeled mode of transport powered by pedaling.',
      },
      { word: 'pencil', hint: 'A writing instrument with a graphite core.' },
      {
        word: 'bridge',
        hint: 'A structure built to span a physical obstacle like a river.',
      },
      { word: 'planet', hint: 'A celestial body orbiting a star.' },
      { word: 'forest', hint: 'A large area covered with trees and plants.' },
      { word: 'candle', hint: 'A source of light made from wax and a wick.' },
      { word: 'camera', hint: 'A device used to take photographs.' },
      {
        word: 'pyramid',
        hint: 'A triangular-shaped ancient structure, often in Egypt.',
      },
      { word: 'monkey', hint: 'A primate known for its playful nature.' },
      {
        word: 'castle',
        hint: 'A large fortified residence from medieval times.',
      },
      {
        word: 'garden',
        hint: 'A piece of land used for growing plants and flowers.',
      },
      {
        word: 'river',
        hint: 'A natural watercourse flowing towards an ocean or lake.',
      },
      { word: 'butterfly', hint: 'An insect with colorful wings.' },
      {
        word: 'desert',
        hint: 'A dry, barren area of land with little rainfall.',
      },
      { word: 'rocket', hint: 'A vehicle designed for space travel.' },
      { word: 'island', hint: 'A piece of land surrounded by water.' },
      {
        word: 'piano',
        hint: 'A musical instrument with black and white keys.',
      },
      {
        word: 'telescope',
        hint: 'A tool used to observe distant objects in space.',
      },
      { word: 'balloon', hint: 'A rubber bag inflated with air or gas.' },
      { word: 'whale', hint: 'A large marine mammal.' },
      {
        word: 'train',
        hint: 'A series of connected vehicles that run on tracks.',
      },
      { word: 'kitchen', hint: 'A place where food is prepared and cooked.' },
      {
        word: 'book',
        hint: 'A set of written or printed pages bound together.',
      },
      { word: 'clock', hint: 'A device used to tell time.' },
      { word: 'violin', hint: 'A stringed instrument played with a bow.' },
      { word: 'jungle', hint: 'A dense forest with a tropical climate.' },
      { word: 'ship', hint: 'A large vessel used for maritime transport.' },
      {
        word: 'statue',
        hint: 'A carved or cast figure of a person or animal.',
      },
      {
        word: 'beach',
        hint: 'A sandy or pebbly shore by the ocean or a lake.',
      },
      { word: 'chair', hint: 'A piece of furniture for sitting.' },
      { word: 'window', hint: 'An opening in a wall for light and air.' },
      { word: 'phone', hint: 'A device used for voice communication.' },
      { word: 'star', hint: 'A luminous celestial body made of plasma.' },
      {
        word: 'cloud',
        hint: 'A visible mass of condensed water vapor in the sky.',
      },
      { word: 'ladder', hint: 'A tool used for climbing.' },
      { word: 'bridge', hint: 'A structure built to span physical obstacles.' },
      { word: 'pearl', hint: 'A smooth, rounded gem found in oysters.' },
      {
        word: 'kite',
        hint: 'A lightweight frame flown in the wind with a string.',
      },
      { word: 'bread', hint: 'A staple food made of flour and water.' },
      { word: 'moon', hint: "Earth's natural satellite." },
      { word: 'basket', hint: 'A container made of woven material.' },
      { word: 'cactus', hint: 'A spiky desert plant.' },
      { word: 'bottle', hint: 'A container with a narrow neck.' },
      { word: 'clock', hint: 'A device that measures and displays time.' },
      { word: 'hat', hint: 'A head covering worn for style or protection.' },
      { word: 'plane', hint: 'A vehicle that flies through the air.' },
      { word: 'lamp', hint: 'A device that produces light.' },
      { word: 'pen', hint: 'A tool for writing with ink.' },
      { word: 'fan', hint: 'A device that creates airflow.' },
      { word: 'frog', hint: 'A small amphibian with long legs for jumping.' },
      { word: 'ring', hint: 'A circular piece of jewelry worn on the finger.' },
      { word: 'truck', hint: 'A motor vehicle for transporting goods.' },
      { word: 'carpet', hint: 'A floor covering made of woven fabric.' },
      { word: 'laptop', hint: 'A portable computer.' },
      { word: 'grape', hint: 'A small, juicy fruit that grows in clusters.' },
      { word: 'milk', hint: 'A white liquid produced by mammals.' },
      { word: 'dog', hint: 'A domesticated animal known for loyalty.' },
      { word: 'car', hint: 'A vehicle with four wheels powered by an engine.' },
      { word: 'house', hint: 'A building for people to live in.' },
      { word: 'paper', hint: 'A thin material used for writing or printing.' },
      { word: 'stone', hint: 'A hard, solid non-metallic mineral matter.' },
      { word: 'bag', hint: 'A container made of flexible material.' },
      { word: 'lion', hint: 'A large carnivorous feline.' },
      { word: 'school', hint: 'A place for education.' },
      { word: 'bell', hint: 'A hollow object that rings when struck.' },
      {
        word: 'horse',
        hint: 'A large mammal used for riding or pulling loads.',
      },
      { word: 'radio', hint: 'A device for receiving sound broadcasts.' },
      { word: 'door', hint: 'A movable barrier for entering and exiting.' },
    ],
  };

  currentWord = ''; // to store the current word
  currentHint = '';
  wordLength = 0;
  score = 0; // to store the score
  timer: any; // to store the timer
  time = 30;

  gameStart = false;

  startGame() {
    this.gameStart = true;
    // Start timer
    this.startTimer(30);

    // Choose a random word and update the UI
    this.chooseRandomWord();

    // Set score to zero
    this.score = 0;
  }

  // Function to start the timer
  // time_reset = false
  startTimer(seconds: number) {
    this.time = seconds;
    this.timer = setInterval(() => {
      this.time--;

      if (this.time < 0) {
        this.endGame();
      }
    }, 1000);
  }

  // Function to choose a random word and update the UI
  incorrectLetters: any = [];
  correctLetters: any = [];

  // fill the array with empty string by lenght of currentword
  array: any = [];
  chooseRandomWord() {
    if (this.gameStart) {
      this.array = [];
      const randomIndex = Math.floor(Math.random() * this.data.words.length);
      this.currentWord = this.data.words[randomIndex].word;
      console.log(this.currentWord);
      this.wordLength = this.currentWord.length;
      this.currentHint = this.data.words[randomIndex].hint;

      for (let i = 0; i < this.wordLength; i++) {
        this.array.push('');
      }

      this.incorrectLetters = [];
      this.correctLetters = [];
    }else{
      alert('Please start the game...');
    }
  }

  endGame() {
    clearInterval(this.timer);

    // Reset input field
    this.gameStart = false;

    alert('Game Over! Your final score is: ' + this.score);

    this.currentHint = '';
  }

  handleinputField(event: any) {
    if (this.gameStart) {
      let e = event?.srcElement?.innerText;
      console.log(e);
      if (e.match(/^[A-za-z]+$/) && !this.incorrectLetters.includes(e)) {
        if (this.currentWord.includes(e)) {
          console.log(this.currentWord.includes(e));
          for (let i = 0; i < this.currentWord.length; i++) {
            if (this.currentWord[i] === e) {
              this.score += 10;
              this.correctLetters.push(e);
              this.array[i] = e;
            }
          }
        } else {
          this.score -= 10;
          this.incorrectLetters.push(e);
        }
        // Check if the word is complete
        if (this.correctLetters.length === this.currentWord.length) {
          // Correct word
          clearInterval(this.timer);
          this.startTimer(30);

          // Display a new word and hint
          this.chooseRandomWord();
        }
      }
    }else{
      alert('Please start the game...');
    }
  }
}
