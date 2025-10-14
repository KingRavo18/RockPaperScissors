function playGame(player_choice : string) : void {
    const responseContainer: HTMLElement | null = document.getElementById("result-message");
    const computer_options: string[] = ["rock", "paper", "scissors"];
    const computer_choice: string | undefined = computer_options[Math.floor(Math.random() * 3)];
    (responseContainer as HTMLElement).textContent = "";
}

(document.getElementById("rock-btn") as HTMLElement).onclick = () => playGame('rock');
(document.getElementById("paper-btn") as HTMLElement).onclick = () => playGame('paper');
(document.getElementById("scissors-btn") as HTMLElement).onclick = () => playGame('scissors');