function Winner(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) return "Tie";
    if (
      (player1Choice === "rock" && player2Choice === "scissors") ||
      (player1Choice === "paper" && player2Choice === "rock") ||
      (player1Choice === "scissors" && player2Choice === "paper")
    ) {
      return "Player 1";
    } else {
      return "Player 2";
    }
  }
  
  function playGame() {
        let player1_Score = 0;
        let player2_Score = 0;
      
        for (let i = 0; i < 3; i++) {
          const player1Choice = prompt("Player 1, enter your choice (rock, paper, or scissors):").toLowerCase();
          const player2Choice = prompt("Player 2, enter your choice (rock, paper, or scissors):").toLowerCase();
      
          console.log(`Player 1 chose: ${player1Choice}`);
          console.log(`Player 2 chose: ${player2Choice}`);
      
          const winner = Winner(player1Choice, player2Choice);
      
          if (winner === "Player 1") {
            console.log("Player 1 wins!");
            player1_Score++;
          } else if (winner === "Player 2") {
            console.log("Player 2 wins!");
            player2_Score++;
          } else {
            console.log("It's a tie!");
          }
        }
      
        if (player1_Score > player2_Score) {
          console.log("Player 1 wins the game!");
        } else if (player2_Score > player1_Score) {
          console.log("Player 2 wins the game!");
        } else {
          console.log("It's a tie game!");
    }
  }
  
  playGame();
  