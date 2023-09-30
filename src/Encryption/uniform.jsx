import styles from '../style.css';
import { useState } from 'react';
import Dash from "./dash";
import root from '../index';
const Uniform = () => {

    const [input, setInput] = useState("")
    const [lengthOne, setLengthOne] = useState(0);
    const [lengthTwo, setLengthTwo] = useState(0);
    const [lengthThree, setLengthThree] = useState(0);
    const handleDash = () => {
        root.render(<Dash />)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        calculateLengthOne();
        calculateLengthTwo();
        calculateLengthThree();

    }
    const calculateLengthOne = () => {
        let numberOfOnes = 0
        let numberOfZeros = 0
        for (let i = 0; i < input.length; i++) {
            if (input[i] === "1") {
                numberOfOnes += 1
            }
            if (input[i] === "0") {
                numberOfZeros += 1
            } if (input[i] !== "0" && input[i] !== "1") {
                setLengthOne("Fuck you you asshole i fucking told you to put only 1 and 0's is that so hard you moron????")
                setLengthTwo("Fuck you you asshole i fucking told you to put only 1 and 0's is that so hard you moron????")
                setLengthThree("Fuck you you asshole i fucking told you to put only 1 and 0's is that so hard you moron????")
                break;
            }
        }
        if (numberOfOnes >= numberOfZeros && numberOfZeros !== 0 && numberOfOnes !== 0) {
            setLengthOne(numberOfZeros / (numberOfOnes + numberOfZeros) * 100)
        }
        if (numberOfZeros <= numberOfOnes && numberOfOnes !== 0 && numberOfZeros !== 0) {
            setLengthOne(numberOfOnes / (numberOfOnes + numberOfZeros) * 100)
        }
        if (numberOfOnes === 0 || numberOfZeros === 0) {
            setLengthOne("FUUUUUUUUCk you i said put them booooooth in there you cunt")
        }
    }
    const calculateLengthTwo = () => {
        let zeroOne = 0
        let zeroZero = 0
        let oneZero = 0
        let oneOne = 0
        for (let i = 0; i < input.length; i++) {
            if ((input[i] + input[i + 1] === "01")) { zeroOne += 1 }
            if ((input[i] + input[i + 1] === "11")) { oneOne += 1 }
            if ((input[i] + input[i + 1] === "10")) { oneZero += 1 }
            if ((input[i] + input[i + 1] === "00")) { zeroZero += 1 }


        }
    }
    const calculateLengthThree = () => {

    }
    return (<div>
        <button className={styles.button} style={{ position: "absolute", left: "2%", top: "2%", width: "fit-content" }} onClick={handleDash}>Back</button>
        <div style={{ position: "absolute", left: "28%", top: "5%" }}>Please Give me an input on only ones and zeros(try to be random)</div>
        <form onSubmit={handleSubmit}>
            <input placeholder="Type in the input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ position: "absolute", left: "25%", top: "20%" }}
                className={styles.input}
                type="text"
            />
            <button type='submit' className={styles.button}
                style={{ position: "absolute", left: "68.5%", top: "30%", width: "fit-content" }}
            >See Result</button>
            <input value={lengthOne} style={{ position: "absolute", left: "25%", top: "60%" }}
                className={styles.input} />
            <input value={lengthTwo} style={{ position: "absolute", left: "25%", top: "67%" }}
                className={styles.input} />
            <input value={lengthThree} style={{ position: "absolute", left: "25%", top: "74%" }}
                className={styles.input} />

        </form>

    </div >);
}

export default Uniform;