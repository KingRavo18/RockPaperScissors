function playGame() {
    const resultMessage = document.getElementById("result-message");
    const computer_options = ["rock", "paper", "scissors"];
    let computer_score = 0;
    let player_score = 0;
    let outcome = "";
    return function (player_choice) {
        const computer_choice = computer_options[Math.floor(Math.random() * 3)];
        if (player_choice === computer_choice) {
            resultMessage.textContent = "It's a tie!";
            return;
        }
        switch (computer_choice) {
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
        resultMessage.textContent = outcome;
        document.getElementById("player-score").textContent = String(player_score);
        document.getElementById("computer-score").textContent = String(computer_score);
    };
}
const play = playGame();
document.getElementById("rock-btn").onclick = () => play('rock');
document.getElementById("paper-btn").onclick = () => play('paper');
document.getElementById("scissors-btn").onclick = () => play('scissors');
export {};
//# sourceMappingURL=script.js.map