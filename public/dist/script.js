function playGame(player_choice) {
    const responseContainer = document.getElementById("result-message");
    const computer_options = ["rock", "paper", "scissors"];
    const computer_choice = computer_options[Math.floor(Math.random() * 3)];
    responseContainer.textContent = "";
}
document.getElementById("rock-btn").onclick = () => playGame('rock');
document.getElementById("paper-btn").onclick = () => playGame('paper');
document.getElementById("scissors-btn").onclick = () => playGame('scissors');
export {};
//# sourceMappingURL=script.js.map