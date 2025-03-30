import { guessNumber } from './guess-number.js';
import {runArrayFunctions} from './array.js';

let choice

do {
    choice = prompt('Do you want to play a game? (y/n/exit)');

    if (choice.toLowerCase() == 'y') {
        alert('Ready!');
        guessNumber();
    } else if (choice.toLowerCase() == 'n') {
        alert('Alright! Then we shall have you generate a random array! \nAnd we shall give you the sum of the even numbers!');
        runArrayFunctions();
    } else if (choice.toLowerCase() == 'exit') {}
    else {
        alert('Invalid choice!');
    }
} while (choice.toLowerCase() !== 'exit');

alert('Goodbye!');