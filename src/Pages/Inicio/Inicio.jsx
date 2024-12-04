import s from './inicio.module.scss'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'

export default function Inicio() {
    return (
      <main>
        <section className={s.secaoInicial}>
          <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>
        <section className={s.pgInicioDoar}>
          <h2>Por que devo Doar?</h2>
          <section className={s.cardsInicio}>
            <section>
              <img src={img1} alt="" />
              <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
            </section>
            <section>
              <img src={img2} alt="" />
              <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
            </section>
            <section>
              <img src={img3} alt="" />
              <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
            </section>
            <section>
              <img src={img4} alt="" />
              <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
            </section>
            </section>
          </section>
      </main>
    );
  }
  