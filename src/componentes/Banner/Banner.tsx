import './Banner.css'

import React from 'react'

interface BannerP{
    enderecoImg: string
    textoAlt?: string
}

export const Banner = ({enderecoImg, textoAlt}: BannerP) => {
    return (
        <header className="banner">
            <img src={enderecoImg} alt={textoAlt}/>
        </header>
    )
}

export default Banner