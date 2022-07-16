import styles from '../../styles/Navbar.module.css'
import Link from  'next/link'
export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.navContent}>
        <Link  href='/'>
         <span className={styles.logo}>UPGRADE</span> 
        </Link>
        <ul className={styles.listItems}>
          <li>
            <Link href='/production/design'>Design</Link>
          </li>
          <li>
            <Link href='/production/development'>Development</Link>
          </li>
          <li>
            <Link href='/production/production'>Production</Link>
          </li>
          <li>
            <Link href='/production/photography'>Photography</Link>
          </li>
          <li>
            <Link href='/production/contact'>Contact</Link>
          </li>
        </ul>
        </div>
    </div>
  )
}
