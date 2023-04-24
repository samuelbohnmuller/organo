import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="footer">
            <section className="logo">
                <ul>
                    <a href="https://www.linkedin.com/in/samuel-m%C3%BCller-81479b1b5/" target="_blank">
                        <img src="/imagens/linkedin.png" alt="" />
                    </a>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="" />
            </section>
            <section>
                <p>
                    Desenvolvido por Samuel.
                </p>
            </section>
        </footer>
    )
}

export default Rodape