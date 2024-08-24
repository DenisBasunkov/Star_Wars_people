import React, { useState } from "react"
import { IPeople_info } from "../../assets/interfase"
import styles from "./Card.module.scss"
import _ from "lodash"
import Modal from "react-modal"

// Modal.setAppElement('#root')

interface ICard {
    data: IPeople_info,
    index: number,

}

interface IAnth_meas {
    label: string,
    value: string,
}

export const Anth_meas: React.FC<IAnth_meas> = (data) => {
    return <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
        <div className={styles.Anth_meas}>
            {data.value}
        </div>
        <p style={{ color: "#4B4B4B", fontSize: 12, fontWeight: 400 }}>
            {data.label}
        </p>
    </div>
}

interface ITegsProps {
    label: string | undefined,
    color: string | undefined,
}

export const Tags: React.FC<ITegsProps> = ({ color, label }) => {

    return <label style={{ backgroundColor: color }} className={styles.Tegs}>
        {label}
    </label>

}

const Genger = [
    { color: "#73D677", gender: "male" },
    { color: "#C956FF", gender: "female" },
    { color: "#F5DB13", gender: "hermaphrodite" },
]

interface IModalProps {
    data: IPeople_info,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalForm: React.FC<IModalProps> = ({ data, isOpen, setIsOpen }) => {
    const closeDialog = () => {
        setIsOpen(false)
    };

    return <Modal isOpen={isOpen}
        className={styles.Modal_container}
        onRequestClose={closeDialog}
    >
        <div onClick={(e) => e.stopPropagation()} style={{ display: "flex", flexDirection: "column", alignItems: "end" }}>

            <button onClick={closeDialog} className={styles.closeBtn}></button>
            <div
                className={styles.Modal_body}
            >
                <div className={styles.img_container}>
                    {
                        (data.gender !== "n/a" && data.gender !== "none") ? <img src={`/Img_${data.gender}.svg`} className={styles.img_modal} alt="" /> : null
                    }

                    <div style={{ position: "absolute", bottom: "15px", right: "15px", display: "flex", gap: "10px" }}>
                        {
                            (data.gender !== "n/a" && data.gender !== "none") ? <Tags label={data.gender} color={_.find(Genger, (value) => value.gender.includes(data.gender))?.color} /> : null
                        }
                        {
                            data.birth_year !== "unknown" ? <Tags label={data.birth_year} color="#07D6F2" /> : null
                        }
                    </div>
                </div>
                <div className={styles.Info_container}>


                    <label className={styles.CardTitleIMg}>{data.name}</label>
                    <div className={styles.info_color}>
                        <p>hair color:{data.hair_color}</p>
                        <p>skin color:{data.skin_color}</p>
                        <p>eye color:{data.eye_color}</p>
                    </div>


                    <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
                        {
                            data.height !== "unknown" ? <div className={styles.info_color}>
                                <Anth_meas value={data.height} label="height" />
                            </div> : null
                        }
                        {
                            data.mass !== "unknown" ? <div className={styles.info_color}>
                                <Anth_meas value={data.mass} label="mass" />
                            </div> : null
                        }

                    </div>

                </div>
            </div>
        </div>
    </Modal>
}

const Card: React.FC<ICard> = ({ data }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const openDialog = () => {
        setIsOpen(true)
    };



    return <div className={styles.Card_container} onClick={openDialog}>
        <h3>{data.name}</h3>
        <div style={{ display: "flex", gap: "10px", }}>
            {
                data.height !== "unknown" ? <Anth_meas value={data.height} label="height" /> : null
            }
            {
                data.mass !== "unknown" ? <Anth_meas value={data.mass} label="mass" /> : null
            }

        </div>
        <div style={{ display: "flex", gap: "10px" }}>
            {
                data.birth_year !== "unknown" ? <Tags label={data.birth_year} color="#07D6F2" /> : null
            }
            {
                (data.gender !== "n/a" && data.gender !== "none") ? <Tags label={data.gender} color={_.find(Genger, (value) => value.gender.includes(data.gender))?.color} /> : null
            }

        </div>

        <ModalForm data={data} isOpen={isOpen} setIsOpen={setIsOpen} />

    </div>

}

export default Card