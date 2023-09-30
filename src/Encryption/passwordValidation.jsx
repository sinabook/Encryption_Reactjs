import { useState } from 'react';
import root from '../index'
import Dash from './dash';
import styles from '../style.css';

const PasswordValidation = () => {
    const [Password, setPassword] = useState("");
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [FavWord, setFavWord] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setPassword(createPassword(Firstname, Lastname, FavWord));
    }
    const handleDash = () => {
        root.render(<Dash />)
    }
    const createPassword = (Firstname, Lastname, FavWord) => {
        let Pass = "";
        let str = Firstname + Lastname;
        for (let i = 0; i < str.length; i++) {
            let ascii = str.charCodeAt(i);
            if (ascii >= 65 && ascii <= 90) {
                ascii -= 64;
            }
            if (ascii >= 97 && ascii <= 122) {
                ascii -= 96;
            }
            ascii += FavWord.charCodeAt(i % FavWord.length)
            while (ascii > 122) {
                ascii -= 58;
            }
            if (ascii > 90 && ascii < 97) {
                ascii = (ascii - 90) + 96
            }
            Pass += String.fromCharCode(ascii);
        }
        return Pass;

    }
    return (<>
        <button className={styles.button} style={{ position: "absolute", left: "2%", top: "2%", width: "fit-content" }} onClick={handleDash}>Back</button>

        <form onSubmit={handleSubmit}>
            <input placeholder="Type in your Firstname"
                value={Firstname}
                onChange={(e) => setFirstname(e.target.value)}
                style={{ position: "absolute", left: "25%", top: "20%" }}
                className={styles.input}
                type="text"
                name="firstname" />
            <input placeholder="Type in your Lastname"
                value={Lastname}
                onChange={(e) => setLastname(e.target.value)}
                style={{ position: "absolute", left: "25%", top: "40%" }}
                className={styles.input}
                type="text"
                name="lastname" />
            <input placeholder="Type in your Favorite word"
                value={FavWord}
                onChange={(e) => setFavWord(e.target.value)}
                style={{ position: "absolute", left: "25%", top: "60%" }}
                className={styles.input}
                type="text"
                name="lastname" />
            <button type="submit" className={styles.button} style={{ position: "absolute", left: "25%", top: "70%", width: "fit-content" }}>Encrypt</button>

            <input placeholder="Type in your Favorite word"
                value={Password}
                style={{ position: "absolute", left: "25%", top: "80%" }}
                className={styles.input}
                type="text"
                name="password" />
        </form >


    </>);
}

export default PasswordValidation;