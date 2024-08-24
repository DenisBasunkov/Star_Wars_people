import ButtonLink from "../../components/Button/Button"
import Logo from "../../components/LogoUI/Logo"
import styles from "./Home.module.scss"
const Home: React.FC = () => {

    return <div className={styles.Home_body}>
        <div style={{ display: "flex", flexDirection: "column", gap: "35px" }}>
            <p style={{ width: "506px", fontSize: "72px", color: "#fff" }}><strong>Find</strong> all your
                favorite <strong>character</strong></p>
            <p style={{ width: "515px", fontSize: "32px", color: "#fff" }}>You can find out all the information about your favorite characters</p>
            <ButtonLink style={{ backgroundColor: "#FFC107", textAlign: "center" }} label="See more..." value="/characters" />
        </div>
        <div>
            <Logo />
        </div>
    </div>

}

export default Home