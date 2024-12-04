import logoFacebook from '../../assets/facebook.png'
import logoInstagram from '../../assets/instagram.png'
import logoTwitter from '../../assets/twitter.png'
import logoYoutube from '../../assets/youtube.png'
import logoLinkedin from '../../assets/linkedin.png'
import s from './footer.module.scss'


export default function Footer() {
    return (
      <footer>
        <section className={s.sociaisFooter}>
          <p>4002-8922</p>
          <nav>
            <a href=""><img src={logoFacebook} alt="" /></a>
            <a href=""><img src={logoTwitter} alt="" /></a>
            <a href=""><img src={logoYoutube} alt="" /></a>
            <a href=""><img src={logoLinkedin} alt="" /></a>
            <a href=""><img src={logoInstagram} alt="" /></a>
          </nav>
        </section>
        <section className={s.copyright}>
          <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
        </section>
      </footer>
    );
  }
  