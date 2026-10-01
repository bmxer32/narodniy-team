import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'

/* «Игры» — отдельная страница, а не якорь на главной: её ссылка идёт
   через <Link>, а плавная прокрутка SmoothScroll перехватывает только #… */
const links = [
  { label: 'Стек', href: '#skills' },
  { label: 'Проекты', href: '#portfolio' },
  { label: 'Игры', href: '/igry' },
  { label: 'Процесс', href: '#workflow' },
  { label: 'Контакты', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <Image src="/logop.png" alt="Narodniy Team" width={32} height={32} className={styles.logoIcon} />
          <span className={`gradient-text ${styles.logoFull}`}>Narodniy Team</span>
          <span className={`gradient-text ${styles.logoShort}`}>Narodniy</span>
        </a>
        <nav className={styles.nav}>
          {links.map((link) =>
            link.href.startsWith('/') ? (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            )
          )}
        </nav>
        <div className={styles.actions}>
          {/* На телефоне ряд ссылок скрыт целиком, а «Игры» — не якорь
              на этой же странице: без отдельной ссылки раздел отсюда
              было бы не найти. */}
          <Link href="/igry" className={styles.gamesMobile}>Игры</Link>
          <a href="#contact" className={`btn-primary ${styles.ctaBtn}`}>
            Связаться
          </a>
        </div>
      </div>
    </header>
  )
}
