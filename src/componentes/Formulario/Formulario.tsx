import { useState } from 'react'
import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'
import {IColaborador} from '../../Compartilhado/Interfaces/IColaborador'

interface FormularioP{
    aoColaboradorCadastrado: (colaborador: IColaborador) => void //A função no App recebe como parâmetro um colaborador.
    times: string[]
}

const Formulario = ({aoColaboradorCadastrado, times}: FormularioP) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [data, setData] = useState('')

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => { //onSubmit recebe elemento do tipo em questão.
        evento.preventDefault()
        aoColaboradorCadastrado({ //Função que passa objeto com os states com valores preenchidos pelo usuário.
            nome,
            cargo,
            imagem,
            time,
            data
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={evento => aoSalvar(evento)}> {/*Quando submetido o formulário, é chamado método. */}
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome} //prop valor recebe o estado atual do state. Abaixo esse state será atualizado com o valor digitado pelo usuário(que será armazenado no método aoAlterado).
                    aoAlterado={valor => setNome(valor)} //Quando o usuário digitar algo no campo, será chamado o onChange, que chamará o método aoAlterado, que obterá o valor digitado. O valor digitado passará para o set do state em questão.
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <CampoTexto
                    label="Data"
                    placeholder="Data de entrada no time" 
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                    tipo="date" //Tipo data.
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time" 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao label='Criar card'/>
            </form>
        </section>
    )
}

export default Formulario