import root from "./index";
import Dashboard from "./dashboard";
import { useState } from "react";
import styles from './style.css';
const Rock = () => {
    const [Result, setResult] = useState("");
    let Action = "";
    let Random = -1
    const handleRock = () => {
        Action = "Rock"
        Random = Math.floor(Math.random() * 3)
        if (Random === 0) {
            tie();
        }
        if (Random === 1) {
            userLost();
        }
        if (Random === 2) {
            userWin();
        }
    }
    const handlePaper = () => {
        Action = "Paper"
        Random = Math.floor(Math.random() * 3)
        if (Random === 0) {
            userWin();
        }
        if (Random === 1) {
            tie();
        }
        if (Random === 2) {
            userLost();
        }
    }
    const handleScissors = () => {
        Action = "Scissors"
        Random = Math.floor(Math.random() * 3)
        if (Random === 0) {
            userLost();
        }
        if (Random === 1) {
            userWin();
        }
        if (Random === 2) {
            tie();
        }
    }

    const userWin = () => {
        setResult("You Won");
        console.log(Random, Action);
    }
    const userLost = () => {
        setResult("You Lost");
        console.log(Random, Action);
    }
    const tie = () => {
        setResult("Tie");
        console.log(Random, Action);
    }
    return (<>
        <button onClick={handleDash} style={{ position: "absolute", top: "2%", left: "2% ", width: "fit-content" }}>Back</button>
        <button onClick={handleRock} style={{ position: "absolute", top: "20%", left: "10%", width: "10%" }}>Rock</button>
        <button onClick={handlePaper} style={{ position: "absolute", top: "50%", left: "10%", width: "10%" }}>Paper</button>
        <button onClick={handleScissors} style={{ position: "absolute", top: "80%", left: "10%", width: "10%" }}>Scissors</button>
        <input style={{ position: "absolute", left: "45%", top: "50.57%", width: "10%" }}
            placeholder="Result"
            value={Result} />
        <swg><rect className={styles.rect} style={{ position: "absolute", left: "20%" }} >S</rect></swg>
    </>);

}
const handleDash = () => {
    root.render(<Dashboard />);
}


export default Rock;