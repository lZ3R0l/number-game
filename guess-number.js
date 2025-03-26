export function guessNumber() {
    const number = Math.floor(Math.random() * 10) + 1;
    let guess;
    let attempts = 0;

    while (guess !== number) {
        guess = Number(prompt('Guess a number between 1 and 10'));
        attempts++;

        if (guess < number) {
            alert('Too low');
        } else if (guess > number) {
            alert('Too high');
        }
    }

    alert(`You guessed the number in ${attempts} attempts!`);
}