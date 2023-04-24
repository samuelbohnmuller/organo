import './CampoTexto.css'

interface CampoTextoP{
    aoAlterado: (valor:string) => void //Atributo do tipo função que não retorna nada e que recebe parâmetro string(nome do colaborador, exemplo).
    placeholder: string
    label:string
    valor:string
    obrigatorio?: boolean
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number' //São aceitos qualquer desses tipos.
}

const CampoTexto = ({aoAlterado, label, valor, placeholder, obrigatorio= false, tipo = 'text'}: CampoTextoP) => { //obrigatorio pode ou não ser passado sob props na instancia do componente. Tipo por padrão é texto.

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => { //Evento que a função recebe por () é do tipo React.ChangeEvent. Como pega valor de input, é do tipo <HTMLInputElement>.
        aoAlterado(evento.target.value) //Método recebe o valor digitado pelo usuário.
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input 
                value={valor} //Valor digitado pelo usuário passa para propriedade value.
                onChange={aoDigitado} //Quando há alteração no input, é chamado método.
                required={obrigatorio} 
                placeholder={placeholderModificada}
                type={tipo} //Tipo do input, será o que o que estiver passando na prop da instancia do componente.
            />
        </div>
    )
}

export default CampoTexto