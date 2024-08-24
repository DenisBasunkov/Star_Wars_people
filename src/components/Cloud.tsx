import React from "react"


const Cloud: React.FC<React.CSSProperties> = (style) => {

    return <svg width={310} height={165} style={style}>
        <circle cx={50} cy={115} r={50} fill="#FFFFFF" />
        <circle cx={130} cy={75} r={55} fill="#FFFFFF" />
        <circle cx={200} cy={90} r={35} fill="#FFFFFF" />
        <circle cx={265} cy={120} r={45} fill="#FFFFFF" />
        <rect width={220} height={80} x={50} y={100} fill="#FFFFFF" />
    </svg>

}

export default Cloud