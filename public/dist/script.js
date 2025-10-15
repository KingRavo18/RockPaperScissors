function playGame(player_choice) {
    const resultMessage = document.getElementById("result-message");
    const computer_options = ["rock", "paper", "scissors"];
    const computer_choice = computer_options[Math.floor(Math.random() * 3)];
    if (player_choice === computer_choice) {
        resultMessage.textContent = "It's a tie!";
        return;
    }
    resultMessage.textContent = "It's not a tie!";
}
document.getElementById("rock-btn").onclick = () => playGame('rock');
document.getElementById("paper-btn").onclick = () => playGame('paper');
document.getElementById("scissors-btn").onclick = () => playGame('scissors');
export {};
//# sourceMappingURL=script.js.map