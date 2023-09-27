import styles from '../style.css';
import { useState } from 'react';
import Dash from "./dash";
import root from '../index';
import videoBg from '../images/videoBg.webm';



const CypherRandom = () => {
    const [Message, setMessage] = useState("");
    const [Encrypted_message, setEncrypted_message] = useState("");
    const [Keys, setKeys] = useState("");

    let Random = []

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let i = 0; i < Message.length; i++) {
            Random[i] = Math.floor(Math.random() * 25);
        }
        let encrypted_message = "";
        let ascii = 0;
        for (let i = 0; i < Message.length; i++) {
            ascii = Message.charCodeAt(i);
            ascii += Random[i]
            while (ascii > 122) {
                ascii -= 58;
            }
            if (ascii > 90 && ascii < 97) {
                ascii = (ascii - 90) + 96;
            }
            encrypted_message += String.fromCharCode(ascii);
        }


        setEncrypted_message(encrypted_message);
        setKeys(Random.toString());
    }
    const handleDash = () => {
        root.render(<Dash />)
    }
    const handleReset = () => {
        setEncrypted_message("")
        setMessage("")
    }
    return (<>
        <video style={{ position: "absolute", left: "0%", top: "0%" }} src={videoBg} autoPlay muted loop />

        <button className={styles.button} style={{ position: "absolute", left: "2%", top: "2%", width: "fit-content" }} onClick={handleDash}>Back</button>

        <form onSubmit={handleSubmit}>
            <input placeholder="Type in your message"
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ position: "absolute", left: "25%", top: "20%" }}
                className={styles.input}
                type="text"
                name="message" />

            <input placeholder="Here is your encrypted Message"
                value={Encrypted_message}
                style={{ position: "absolute", left: "25%", top: "30%" }}
                className={styles.input}
                type="text"
                name="encrypted_messsage" />
            <input placeholder="Your Random Keys"
                value={Keys}
                style={{ position: "absolute", left: "25%", top: "40%" }}
                className={styles.input}
                type="text"
                name="encrypted_messsage" />

            <button type="submit" className={styles.button} style={{ position: "absolute", left: "25%", top: "50%", width: "fit-content" }}>Encrypt</button>
            <button onClick={handleReset} className={styles.button} style={{ position: "absolute", left: "35%", top: "50%", width: "fit-content" }}>Reset</button>
            <input
                value={"Maximum number of attempts to break this Encryption is " + 26 ** Message.length}
                style={{ position: "absolute", left: "25%", top: "60%" }}
                className={styles.input}
                type="text"
                name="encrypted_messsage" />
        </form>



    </>);
}

export default CypherRandom;


