import { guessNumber } from './guess-number.js';

let choice = prompt('Do you want to play a game? (y/n)');

if (choice.toLowerCase() == 'y') {
    alert('Ready!');
    guessNumber();
}