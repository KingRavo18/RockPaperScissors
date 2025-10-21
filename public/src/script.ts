interface gameReturnTypes {
    play: (player_choice: string) => void;
    reset: () => void;
}

function playGame(): gameReturnTypes{
    const htmlElements = {
        resultMessage: document.getElementById("result-message") as HTMLElement,
        playerScoreDisplay: document.getElementById("player-score") as HTMLElement,
        computerScoreDisplay: document.getElementById("computer-score") as HTMLElement
    } as const;
    const computer_options = ["rock", "paper", "scissors"];
    let computer_score = 0;
    let player_score = 0;
    let outcome = "";

    function play(player_choice : string){
        const computer_choice = computer_options[Math.floor(Math.random() * 3)];
        if(player_choice === computer_choice){
            htmlElements.resultMessage.textContent = "It's a tie!";
            return;
        }
        switch(computer_choice){
            case "rock":
                outcome = player_choice === "scissors" ? "You lose! Rock beats scissors." : "You win! Paper beats rock.";
                break;
            case "paper":
                outcome = player_choice === "rock" ? "You lose! Paper beats rock." : "You win! Scissors beat paper.";
                break;
            case "scissors":
                outcome = player_choice === "paper" ? "You lose! Scissors beat paper." : "You win! Rock beats scissors.";
                break;
        }
        outcome.includes("You lose!") ? computer_score++ : player_score++;
        htmlElements.resultMessage.textContent = outcome;
        htmlElements.playerScoreDisplay.textContent = String(player_score);
        htmlElements.computerScoreDisplay.textContent = String(computer_score);
    }

    function reset(){
        computer_score = 0;
        player_score = 0;
        htmlElements.resultMessage.textContent = "";
        htmlElements.playerScoreDisplay.textContent = String(player_score);
        htmlElements.computerScoreDisplay.textContent = String(computer_score);
    }

    return {play, reset}
}

const {play, reset} = playGame();
(document.getElementById("rock-btn") as HTMLElement).onclick = () => play('rock');
(document.getElementById("paper-btn") as HTMLElement).onclick = () => play('paper');
(document.getElementById("scissors-btn") as HTMLElement).onclick = () => play('scissors');
(document.getElementById("reset-btn") as HTMLElement).onclick = () => reset();