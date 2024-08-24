import { Link, useLocation } from "react-router-dom"
import styles from "./Header.module.scss"
import { nav_btn } from "../../assets/interfase"
import _ from "lodash"


const Header = () => {

    const arr_nav: nav_btn[] = [{ label: "Home", value: "/" }, { label: "Characters", value: "/characters" },]

    const location = useLocation()
    return (location.key !== 'default' || location.pathname === "/") ? <header className={styles.header_container} >
        <img src="/Logo.png" height={80} alt="" />
        <nav className={styles.nav_container}>
            {
                _.map(arr_nav, (item, i) => {
                    return <li style={{ listStyle: "none" }} key={i}> <Link className={`${styles.nav_btn} ${location.pathname === item.value ? styles.active : null}`} to={item.value}>{item.label}</Link > </li>
                })
            }
        </nav>
    </header > : null




}

export default Header