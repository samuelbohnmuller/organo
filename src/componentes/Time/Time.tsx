import React from 'react'
import { IColaborador } from '../../Compartilhado/Interfaces/IColaborador'
import Colaborador from '../Colaborador/Colaborador'
import './Time.css'

interface TimeP{
    corPrimaria: string
    corSecundaria: string
    nome: string
    colaboradores: IColaborador[] //Prop do tipo array de IColaborador.
}

const Time = ({corPrimaria, corSecundaria, nome, colaboradores}: TimeP) => {
    const css = { backgroundColor: corSecundaria }

    return (
        colaboradores.length > 0 ? 
            <section className='time' style={css}>
                <h3 style={{ borderColor: corPrimaria }}>
                    {nome}
                </h3>
                <div className='colaboradores'>
                    {
                        colaboradores.map( colaborador => //Para cada colaborador no array de colaboradores, retorna o card(cada colaborador é um componente).
                            <Colaborador 
                                corDeFundo={corPrimaria} 
                                key={colaborador.nome} 
                                nome={colaborador.nome} 
                                cargo={colaborador.cargo} 
                                imagem={colaborador.imagem}
                                data={colaborador.data}
                            /> 
                        )
                    }
                </div>
            </section> 
        : <></> //Retorna vazio, caso o array de colaboradores for vazio.
    )
}

export default Time