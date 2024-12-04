import livroProtagonista from '../../assets/LivroProtagonista.png'
import s from './livrosdoados.module.scss'

export default function LivrosDoados(){
    return(
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>
                <section className={s.containerLivros}>
                    <img src={livroProtagonista} alt="Imagem Do Livro" />
                    <h3>O Protagonista</h3>
                    <p>Susane Andrade</p>
                    <p>Ficção</p>
                </section>
            </section>
        </section>
    )
}