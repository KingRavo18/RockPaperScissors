function playGame(player_choice : string) : void {
    const resultMessage: HTMLElement | null = document.getElementById("result-message");
    const computer_options: string[] = ["rock", "paper", "scissors"];
    const computer_choice: string | undefined = computer_options[Math.floor(Math.random() * 3)];
    if(player_choice === computer_choice){
        (resultMessage as HTMLElement).textContent = "It's a tie!";
        return;
    }
    (resultMessage as HTMLElement).textContent = "It's not a tie!";
}

(document.getElementById("rock-btn") as HTMLElement).onclick = () => playGame('rock');
(document.getElementById("paper-btn") as HTMLElement).onclick = () => playGame('paper');
(document.getElementById("scissors-btn") as HTMLElement).onclick = () => playGame('scissors');