import styles from '../../styles/Home/Intro.module.css'
import Image from 'next/image'
import Circle from '../circle'
export default function Intro() {
  return (
    <div className={styles.container}>
       < Circle  backgroundColor='#b0ff49' top='50%' left='25%'  />
     <div className={styles.card}>
          
        <h1 className={styles.card__title}>
          <span className={styles.brand}>UPGRADE</span><br /> DEDITAL <br/> AGENCY
        </h1>
        <p className={styles.card__desc}>
          giving you and your bland adigital plesence,
        </p>
        <button className={styles.button}>Get Started</button>
     </div>
     <div className={styles.card} >
        <Image   src='/img/Avocado.png' alt='img'  layout='fill' />
     </div>
    </div>
  )
}
