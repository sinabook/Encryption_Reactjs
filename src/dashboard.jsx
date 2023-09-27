import Dash from './Encryption/dash';
import root from './index';
import styles from './style.css'
import Rock from './rock';
const Dashboard = () => {

    return (<>
        <div style={{ position: "absolute", left: "45%" }}>Welcome to Hell</div>
        <div style={{ position: "absolute", left: "47%", top: "4%" }}>(My mind)</div>

        <button className={styles.button} style={{ position: "absolute", left: "30%", top: "15%", width: "40%" }} onClick={handleEncrypt}>Encrypting stuff</button>
        <button className={styles.button} style={{ position: "absolute", left: "30%", top: "25%", width: "40%" }} onClick={handleRock}>Rock Paper Scissors</button>

    </>);
}
const handleEncrypt = () => {
    root.render(<Dash />)
}
const handleRock = () => {
    root.render(<Rock />)
}

export default Dashboard;