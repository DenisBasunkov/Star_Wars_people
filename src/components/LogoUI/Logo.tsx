import Cloud from "../Cloud"
import styles from "./LogoUI.module.scss"

const Logo = () => {
    return <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <Cloud overflow="hidden" position="absolute" top={-25} left={"60%"} transform="translateX(-40%)" opacity={.8} />
        <Cloud overflow="hidden" position="absolute" bottom={"20%"} left={"5%"} transform="translateX(-95% ) scale(.6)" opacity={.8} />
        <img src="/Yoda.png" height={458} className={styles.Logo_img} alt="" />
        <div className={styles.shadow}></div>
    </div>
}

export default Logo