import './Botao.css'
import React, { ReactElement } from 'react'

interface BotaoP{
    label: ReactElement| string //Aceita um elemento react ou string.
}

const Botao = ({label} :BotaoP) => {
    return (
        <button className='botao'>
            {label}
        </button>
    )
}

export default Botao