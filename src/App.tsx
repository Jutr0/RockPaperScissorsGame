import React, { useState } from 'react';
import Counter from './components/Counter';
import "./style.scss"
import { OPTIONS } from './options'
import Option from './components/Option'



function App() {

  const [userPoints, setUserPoints] = useState<number>(0)
  const [AIPoints, setAIPoints] = useState<number>(0)
  const [winner, setWinner] = useState<"User" | "Computer" | "Draw" | null>(null)

  const handlePick = (pick: "Rock" | "Scissors" | "Paper") => {
    const options = ["Rock", "Scissors", "Paper"]
    const computerPick = options[(Math.floor(Math.random() * 10) % 3)];
    if (pick === "Rock" && computerPick === "Scissors") { setWinner("User"); setUserPoints(userPoints + 1) }
    else if (pick === "Rock" && computerPick === "Paper") { setWinner("Computer"); setAIPoints(AIPoints + 1) }
    else if (pick === "Rock" && computerPick === "Rock") { setWinner("Draw") }

    else if (pick === "Scissors" && computerPick === "Paper") { setWinner("User"); setUserPoints(userPoints + 1) }
    else if (pick === "Scissors" && computerPick === "Rock") { setWinner("Computer"); setAIPoints(AIPoints + 1) }
    else if (pick === "Scissors" && computerPick === "Scissors") { setWinner("Draw") }

    else if (pick === "Paper" && computerPick === "Rock") { setWinner("User"); setUserPoints(userPoints + 1) }
    else if (pick === "Paper" && computerPick === "Scissors") { setWinner("Computer"); setAIPoints(AIPoints + 1) }
    else if (pick === "Paper" && computerPick === "Paper") { setWinner("Draw") }

  }

  return (
    <div id="container">

      <span><h1>Rock, Paper &amp; Scissors</h1></span>

      <div className="optionsContainer">

        {OPTIONS.map(step => {
          return <Option key={step.name} type={step.name} icon={step.icon} handlePick={handlePick} />
        })}
      </div>

      <div className={`infoBar ${ winner === "User" ? "green" : winner === "Computer" ? "red" : winner === "Draw" ? "gray" : " " }`}>
        {winner === "User" ? "User wins!" : winner === "Computer" ? "Computer wins!" : winner === "Draw" ? "Draw!" : "Choose Your Move!"}
      </div>

      <div id="counterContainer">
        <Counter name="User" points={userPoints} />
        <Counter name="Computer" points={AIPoints} />
      </div>

    </div>

  );
}

export default App;
