import s from './querodoar.module.scss'
import LivroAberto from '../../assets/livroAberto.png'


export default function QueroDoar() {
    return (
      <section className={s.doacao}>
        <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
        <form action="">
          <div className={s.logoLivroAberto}>
            <img src={LivroAberto} alt="Livro Aberto" />
            <h2>Informações do Livro</h2>
          </div>
          <input type="text" name="" id="" placeholder='Titulo' />
          <input type="text" name="" id="" placeholder='Categoria' />
          <input type="text" name="" id="" placeholder='Autor'/>
          <input type="text" name="" id="" placeholder='Link Da Imagem'/>
          <input type="submit" value="Doar" className={s.buttonDoar} />
        </form>
      </section>
    );
  }
  