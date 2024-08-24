import styles from "./Error_page.module.scss"
import ButtonLink from "../../components/Button/Button"

const Error_page = () => {

    return <div className={styles.Error_page}>
        <span className={styles.Lable_error}>404</span>
        <img className={styles.Logo_error} src="/StarDeath.png" alt="" />
        <ButtonLink label="Return" value="/" style={{ position: "absolute", bottom: "5%", left: "50%", transform: "translateX(-50%)", backgroundColor: "#73D677" }} />
    </div>
}

export default Error_page