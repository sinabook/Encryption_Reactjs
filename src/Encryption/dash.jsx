import root from "../index.js";
import Cypher from "./cypher.jsx";
import CypherRandom from "./cypherRandom.jsx";
import styles from '../style.css';
import videoBg from '../images/videoBg.webm';
import PasswordValidation from "./passwordValidation.jsx";
import PasswordGenerator from "./randomPassGenerator.jsx";
import Dashboard from "../dashboard.jsx";
const Dash = () => {
    return (<>
        <video style={{ position: "absolute", left: "0%", top: "0%" }} src={videoBg} autoPlay muted loop />
        <button className={styles.button} style={{ position: "absolute", left: "2%", top: "2%", width: "fit-content" }} onClick={handleDash}>Back</button>

        <div className={styles.div} style={{ position: "absolute", left: "40%", top: "10%" }}>Welcome to this Encryption tab
        </div>
        <div className={styles.selectingencryption} style={{ position: "absolute", left: "38.5%", top: "15%" }}>Please select one of the following
        </div>

        <button style={{ position: "absolute", left: "10%", top: "20%" }} className={styles.button} onClick={handleCypher}>Cypher encryption</button>
        <button style={{ position: "absolute", left: "10%", top: "30%" }} className={styles.button} onClick={handleCypherRandom}>Random Cypher encryption</button>

        <button style={{ position: "absolute", left: "10%", top: "40%" }} className={styles.button} onClick={handlePasswordValidation} >Strong Password Suggestion</button>
        <button style={{ position: "absolute", left: "10%", top: "50%" }} className={styles.button} onClick={handlePasswordGenerator} >Password Generator</button>

    </>);

}
const handleDash = () => {
    root.render(<Dashboard />);
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