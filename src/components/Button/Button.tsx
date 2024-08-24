import { Link } from "react-router-dom"
import styles from "./Button.module.scss"
import React from "react"

interface btn_props {
    label: string,
    value: string,
    style: React.CSSProperties
}

const ButtonLink: React.FC<btn_props> = ({ label, value, style }) => {

    return <Link to={value} className={styles.Back_btn} style={style}>{label}</Link >
}

export default ButtonLink;