import React, { useState } from "react"
import stiles from "./SelectCustom.module.scss"
import _ from "lodash"

interface IData {
    label: string,
    value: string | number
}

interface ISelectCustomProps {
    OnSelect: React.Dispatch<React.SetStateAction<string>>
    data: IData[],
    label?: string,
}

const SelectCustom: React.FC<ISelectCustomProps> = ({ label, OnSelect, data }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [OnChange, setOnChange] = useState<string | number>(data[0].label)

    const Change = (value: string | number) => {
        setOnChange(value as string)
        OnSelect(value as string)
    }

    return <div className={stiles.Select_container}>
        <label >{label}</label>
        <button className={stiles.select} onClick={() => setIsOpen(item => (!item))}>{OnChange}
            <div className={`${stiles.option} ${isOpen ? stiles.open : ""}`}>
                {_.map(data, (item) => <button onClick={() => Change(item.value)}>{item.label}</button>)}
            </div>
        </button>
    </div>

}

export default SelectCustom