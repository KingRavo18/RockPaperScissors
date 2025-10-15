function playGame(player_choice : string) : void {
    const resultMessage: HTMLElement | null = document.getElementById("result-message");
    const player_score_display: HTMLElement | null = document.getElementById("player-score");
    const computer_score_display: HTMLElement | null = document.getElementById("computer-score");
    const computer_options: string[] = ["rock", "paper", "scissors"];
    const computer_choice: string | undefined = computer_options[Math.floor(Math.random() * 3)];
    

    if(player_choice === computer_choice){
        (resultMessage as HTMLElement).textContent = "It's a tie!";
        return;
    }

    switch(computer_choice){
        case "rock":
            (resultMessage as HTMLElement).textContent = player_choice === "scissors" ? "You lose. Rock beats scissors." : "You win! Paper beats rock.";
            break;
        case "paper":
            (resultMessage as HTMLElement).textContent = player_choice === "rock" ? "You lose. Paper beats rock." : "You win! Scissors beat paper.";
            break;
        case "scissors":
            (resultMessage as HTMLElement).textContent = player_choice === "paper" ? "You lose. Scissors beat paper." : "You win! Rock beats scissors.";
            break;
    }
    
}

(document.getElementById("rock-btn") as HTMLElement).onclick = () => playGame('rock');
(document.getElementById("paper-btn") as HTMLElement).onclick = () => playGame('paper');
(document.getElementById("scissors-btn") as HTMLElement).onclick = () => playGame('scissors');