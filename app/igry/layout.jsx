import Image from 'next/image'
import Link from 'next/link'
import nav from '../../components/service/service.module.css'
import styles from './igry.module.css'
import { DEVELOPER_PLAY, GAMES_EMAIL } from './games'

/* Раздел игр живёт в той же шапке, что страницы услуг, но без кнопки
   «Обсудить проект»: сюда приходят игроки и проверяющие магазинов,
   а не заказчики. Подвал — тоже свой, без продающего блока главной. */
export default function GamesLayout({ children }) {
  return (
    <div className={styles.page}>
      <header className={nav.nav}>
        <div className={nav.navInner}>
          <Link href="/" className={nav.navLogo}>
            <Image src="/logop.png" alt="Narodniy Team" width={32} height={32} className={nav.navLogoIcon} />
            <span className={`gradient-text ${nav.logoFull}`}>Narodniy Team</span>
            <span className={`gradient-text ${nav.logoShort}`}>Narodniy</span>
          </Link>
          <nav className={nav.navLinks}>
            <Link href="/" className={nav.navLink}>Студия</Link>
            <Link href="/igry" className={nav.navLink}>Игры</Link>
            <Link href="/igry/musordrop" className={nav.navLink}>MusorDrop</Link>
          </nav>
          <a href={DEVELOPER_PLAY} target="_blank" rel="noreferrer" className={`btn-primary ${nav.navCta}`}>
            Google Play
          </a>
        </div>
      </header>

      {children}

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>© {new Date().getFullYear()} Narodniy Team</span>
          <nav className={styles.footerLinks}>
            <Link href="/igry">Все игры</Link>
            <a href={`mailto:${GAMES_EMAIL}`}>{GAMES_EMAIL}</a>
            <Link href="/">Сайт студии</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
