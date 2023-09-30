import { useState } from "react";
import root from '../index';
import styles from '../style.css'
import Dash from "./dash";

const Cypher = () => {


    const [Message, setMessage] = useState("");
    const [Shift, setShift] = useState("");
    const [Encrypted_message, setEncrypted_message] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setEncrypted_message(encrypt_cypher(Message, parseInt(Shift)));


    }
    const encrypt_cypher = (message, shift) => {
        let encrypted_message = "";
        for (let i = 0; i < message.length; i++) {
            var ascii = message.charCodeAt(i);
            ascii += shift;
            while (ascii > 122) {
                ascii -= 58;
            }
            if (ascii > 90 && ascii < 97) {
                ascii = (ascii - 90) + 96
            }
            encrypted_message += String.fromCharCode(ascii);
        }
        return encrypted_message;
    }
    const handleReset = () => {
        setEncrypted_message("")
        setMessage("")
        setShift("")
    }
    const handleDash = () => {
        root.render(<Dash />)
    }
    return (<>

        <button className={styles.button} style={{ position: "absolute", left: "2%", top: "2%", width: "fit-content" }} onClick={handleDash}>Back</button>
        <form onSubmit={handleSubmit}>
            <input placeholder="Type in your message"
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ position: "absolute", left: "25%", top: "20%" }}
                className={styles.input}
                type="text"
                name="message" />
            <input placeholder="Type in your Shift"
                value={Shift}
                onChange={(e) => setShift(e.target.value)}
                style={{ position: "absolute", left: "25%", top: "30%" }}
                className={styles.input}
                type="text"
                name="shift" />
            <input placeholder="Here is your encrypted Message"
                value={Encrypted_message}
                style={{ position: "absolute", left: "25%", top: "40%" }}
                className={styles.input}
                type="text"
                name="encrypted_messsage" />
            <button type="submit" className={styles.button} style={{ position: "absolute", left: "25%", top: "50%", width: "fit-content" }}>Encrypt</button>
            <button onClick={handleReset} className={styles.button} style={{ position: "absolute", left: "35%", top: "50%", width: "fit-content" }}>Reset</button>
            <input placeholder="Here is your encrypted Message"
                value="With this method it will take at most 26 attempts to break this code"
                style={{ position: "absolute", left: "25%", top: "60%" }}
                className={styles.input}
                type="text"
                name="encrypted_messsage" />



        </form>


    </>);
}
export default Cypher;

