function playGame(){
    const resultMessage: HTMLElement | null = document.getElementById("result-message");
    const computer_options: string[] = ["rock", "paper", "scissors"];
    let computer_score: number = 0;
    let player_score: number = 0;
    let outcome: string = "";

    function play(player_choice : string) : void{
        const computer_choice: string | undefined = computer_options[Math.floor(Math.random() * 3)];
        if(player_choice === computer_choice){
            (resultMessage as HTMLElement).textContent = "It's a tie!";
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
        (resultMessage as HTMLElement).textContent = outcome;
        (document.getElementById("player-score") as HTMLElement).textContent = String(player_score);
        (document.getElementById("computer-score") as HTMLElement).textContent = String(computer_score);
    }

    function reset() : void{
        computer_score = 0;
        player_score = 0;
        (document.getElementById("player-score") as HTMLElement).textContent = String(player_score);
        (document.getElementById("computer-score") as HTMLElement).textContent = String(computer_score);
        (resultMessage as HTMLElement).textContent = "";
    }

    return {play, reset}
}

const {play, reset} = playGame();
(document.getElementById("rock-btn") as HTMLElement).onclick = () => play('rock');
(document.getElementById("paper-btn") as HTMLElement).onclick = () => play('paper');
(document.getElementById("scissors-btn") as HTMLElement).onclick = () => play('scissors');
(document.getElementById("reset-btn") as HTMLElement).onclick = () => reset();