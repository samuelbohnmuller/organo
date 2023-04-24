import './ListaSuspensa.css'

interface ListaSuspensaP{
    label: string
    itens: string[] //Array de string, pois no objeto de array times(app), queremos apenas a propriedade nome do array, que é uma string.
    aoAlterado: (valor: string) => void
    valor: string
    obrigatorio: boolean
}

const ListaSuspensa = ({label, itens, aoAlterado, valor, obrigatorio}: ListaSuspensaP) => {
    return (
        <div className='lista-suspensa'>
            <label>
                {label}
            </label>
            <select
                onChange={evento => aoAlterado(evento.target.value)} 
                required={obrigatorio} 
                value={valor}
            >
                <option value=""></option>
                {
                    itens.map(item => {
                        return (
                            <option key={item}>
                                {item}
                            </option>
                        )   
                    })
                }
            </select>
        </div>
    )
}

export default ListaSuspensa