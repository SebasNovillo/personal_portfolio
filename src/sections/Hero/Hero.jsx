import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import gitHubIcon from '../../assets/github-light.svg'
import LinkedinIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/cv.pdf'

function Hero() {
  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Profile picture of Sebastian Novillo" />
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" />
        </div>

        <div className={styles.info}>
            <h1>
                Sebastian
                <br />
                Novillo
            </h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href="https://twitter.com" target="_blank">
                    <img src={twitterIcon} alt="Twitter icon" />
                </a>
                <a href="https://gitHub.com" target="_blank">
                    <img src={gitHubIcon} alt="GitHub icon" />
                </a>
                <a href="https://Linkedin.com" target="_blank">
                    <img src={LinkedinIcon} alt="LinkedIn icon" />
                </a>
            </span>
            <p>With a passion for developing modern React web apps for commercial businesses.</p>
            <a href={CV}>
                <button className='hover' download>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero