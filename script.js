document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.choices button');
    const resultText = document.getElementById('result-text');
    const gameOverContainer = document.getElementById('game-over-container');
    const gameOverText = document.getElementById('game-over-text');
    const replayButton = document.getElementById('replay');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const userChoice = button.id;
            const computerChoice = getComputerChoice();
            const result = determineWinner(userChoice, computerChoice);
            resultText.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
            
            if (result === 'You lose!') {
                gameOverContainer.style.display = 'block';
                gameOverText.classList.add('game-over');
            }
        });
    });

    replayButton.addEventListener('click', () => {
        gameOverContainer.style.display = 'none';
        resultText.textContent = '';
    });

    function getComputerChoice() {
        const choices = ['snake', 'water', 'gun'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a tie!";
        }
        if (
            (userChoice === 'snake' && computerChoice === 'water') ||
            (userChoice === 'water' && computerChoice === 'gun') ||
            (userChoice === 'gun' && computerChoice === 'snake')
        ) {
            return 'You win!';
        }
        return 'You lose!';
    }
});
