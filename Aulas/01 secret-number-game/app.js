alert('Welcome to the secret number game');
let maxnumber = 1000;
let secretNumber = parseInt(Math.random() * maxnumber + 1);
console.log(secretNumber);
let guess;
let attempts = 1;


while (guess != secretNumber) {
    guess = prompt(`Choose a number between 1 and ${maxnumber}. You have 5 attempts`);
    
    if (guess === null){
      break;
    }
    else if (attempts === 6){
      break;
    }
    else if (guess == secretNumber) {
      let attemptOrAttempts = attempts > 1 ? 'attempts' : 'attempt';
      alert(`Nice! You found the secret number ${secretNumber} with ${attempts} ${attemptOrAttempts}.`);

        break;
    } else {
        if (guess > secretNumber) {
            alert(`The secret number is less than ${guess}`);
        } else {
            alert(`The secret number is greater than ${guess}`);
        }

        attempts++;
    }

}


