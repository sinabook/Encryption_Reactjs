import root from "../index.js";
import Cypher from "./cypher.jsx";
import CypherRandom from "./cypherRandom.jsx";
import styles from '../style.css';
import PasswordValidation from "./passwordValidation.jsx";
import PasswordGenerator from "./randomPassGenerator.jsx";
import Uniform from "./uniform.jsx";
const Dash = () => {
    return (<>


        <div className={styles.selectingencryption} style={{ position: "absolute", left: "38.5%", top: "15%" }}>Please select one of the following
        </div>

        <button style={{ position: "absolute", left: "10%", top: "20%" }} className={styles.button} onClick={handleCypher}>Cypher encryption</button>
        <button style={{ position: "absolute", left: "10%", top: "30%" }} className={styles.button} onClick={handleCypherRandom}>Random Cypher encryption</button>

        <button style={{ position: "absolute", left: "10%", top: "40%" }} className={styles.button} onClick={handlePasswordValidation} >Strong Password Suggestion</button>
        <button style={{ position: "absolute", left: "10%", top: "50%" }} className={styles.button} onClick={handlePasswordGenerator} >Password Generator</button>
        <button style={{ position: "absolute", left: "10%", top: "60%" }} className={styles.button} onClick={handleUniform} >Test How Uniform You are</button>


    </>);

}

const handleUniform = () => {
    root.render(<Uniform />)
}
const handleCypher = () => {
    root.render(<Cypher />);
}
const handlePasswordGenerator = () => {
    root.render(<PasswordGenerator />);
}

const handleCypherRandom = () => {
    root.render(<CypherRandom />);
}
const handlePasswordValidation = () => {
    root.render(<PasswordValidation />)
}

export default Dash;