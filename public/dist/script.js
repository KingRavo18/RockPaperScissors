function playGame(player_choice) {
    const resultMessage = document.getElementById("result-message");
    const player_score_display = document.getElementById("player-score");
    const computer_score_display = document.getElementById("computer-score");
    const computer_options = ["rock", "paper", "scissors"];
    const computer_choice = computer_options[Math.floor(Math.random() * 3)];
    if (player_choice === computer_choice) {
        resultMessage.textContent = "It's a tie!";
        return;
    }
    switch (computer_choice) {
        case "rock":
            resultMessage.textContent = player_choice === "scissors" ? "You lose. Rock beats scissors." : "You win! Paper beats rock.";
            break;
        case "paper":
            resultMessage.textContent = player_choice === "rock" ? "You lose. Paper beats rock." : "You win! Scissors beat paper.";
            break;
        case "scissors":
            resultMessage.textContent = player_choice === "paper" ? "You lose. Scissors beat paper." : "You win! Rock beats scissors.";
            break;
    }
}
document.getElementById("rock-btn").onclick = () => playGame('rock');
document.getElementById("paper-btn").onclick = () => playGame('paper');
document.getElementById("scissors-btn").onclick = () => playGame('scissors');
export {};
//# sourceMappingURL=script.js.map