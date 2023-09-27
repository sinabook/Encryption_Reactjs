import { useState } from 'react';
import styles from '../style.css'
import videoBg from '../images/videoBg.webm';
import Dash from './dash';
import root from '../index';
let Random = []
const PasswordGenerator = () => {
    const [Length, setLength] = useState("")
    const [Password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setPassword(Pass(Number(Length)));

    }
    const handleDash = () => {
        root.render(<Dash />)
    }
    const handleReset = () => {
        setLength("")
        setPassword("")
    }
    return (<>
        <video style={{ position: "absolute", left: "0%", top: "0%" }} src={videoBg} autoPlay muted loop />

        <button className={styles.button} style={{ position: "absolute", left: "2%", top: "2%", width: "fit-content" }} onClick={handleDash}>Back</button>

        <form onSubmit={handleSubmit}>
            <input placeholder="Type in your preffred lenght message"
                value={Length}
                onChange={(e) => setLength(e.target.value)}
                style={{ position: "absolute", left: "25%", top: "20%" }}
                className={styles.input}
                type="text"
                name="length" />

            <input placeholder="Here is your Password"
                value={Password}
                style={{ position: "absolute", left: "25%", top: "30%" }}
                className={styles.input}
                type="text"
                name="password" />

            <button type="submit" className={styles.button} style={{ position: "absolute", left: "25%", top: "40%", width: "fit-content" }}>Generate</button>
            <button onClick={handleReset} type="reset" className={styles.button} style={{ position: "absolute", left: "35%", top: "40%", width: "fit-content" }}>Reset</button>


        </form>



    </>);
}

export default PasswordGenerator;
const Pass = (n) => {
    let password = ""
    let charsCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let chars = "abcdefghijklmnopqrstuvwxyz";
    let nums = "0123456789";
    let symbols = "!@#$%^&*_=+-/€.?<>)";
    let passSymbols = charsCaps + chars + nums + symbols;
    for (let i = 0; i < n; i++) {
        Random[i] = Math.floor(Math.random() * passSymbols.length);
    }
    for (let i = 0; i < n; i++) {
        password += passSymbols.charAt(Random[i])
    }
    return password;

}


