import Link from 'next/link'
import styles from './igry.module.css'
import { DEVELOPER_PLAY, GAMES, play, rustore } from './games'

const PATH = '/igry'
const TITLE = 'Игры Narodniy Team — стратегия и симуляторы кейсов для Android'
const DESCRIPTION =
  'Century Front — стратегия в реальном времени о веке войны. MusorDrop, StarDrop, Кейсер, Upgrader, RustGrade и StandDrop — бесплатные симуляторы открытия кейсов и апгрейда скинов на игровой валюте, без пополнения и вывода.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    type: 'website',
    images: [{ url: '/og-preview.png', width: 1200, height: 630, alt: 'Игры Narodniy Team' }],
  },
}

/* Внутренние адреса — через <Link>, внешние — обычной <a> в новой вкладке */
function Action({ href, className, children }) {
  const cls = `${styles.action} ${className || ''}`
  if (href.startsWith('/')) {
    return <Link href={href} className={cls}>{children}</Link>
  }
  return <a href={href} target="_blank" rel="noreferrer" className={cls}>{children}</a>
}

export default function GamesPage() {
  return (
    <main className={styles.main}>
      <div className={styles.hubHead}>
        <div className="section-label">// Игры</div>
        <h1 className={styles.hubTitle}>Наши игры</h1>
        <p className={styles.hubLead}>
          Стратегия в реальном времени и симуляторы открытия кейсов и апгрейда скинов
          для Android. Симуляторы работают на игровой валюте: пополнения, вывода
          предметов и реальных выигрышей в них нет.
        </p>
      </div>

      <ul className={styles.ledger}>
        {GAMES.map((g) => (
          <li key={g.slug} className={styles.row}>
            <img src={`/igry/${g.slug}.webp?v=${g.iconVersion ?? 2}`} alt="" width={88} height={88} className={styles.icon} loading="lazy" />
            <div>
              <h2 className={styles.rowName}>
                {g.page ? <Link href={g.page}>{g.name}</Link> : g.name}
              </h2>
              <p className={`${styles.mono} ${styles.rowStore}`}>{g.storeName} · {g.pkg}</p>
              <p className={styles.rowAbout}>{g.about}</p>
            </div>
            <div className={styles.actions}>
              {g.soon ? (
                <span className={`${styles.action} ${styles.actionQuiet}`}>Скоро в Google Play</span>
              ) : (
                <Action href={play(g.pkg)} className={styles.actionMain}>Google Play <span aria-hidden>↗</span></Action>
              )}
              {g.rustore && <Action href={rustore(g.pkg)}>RuStore <span aria-hidden>↗</span></Action>}
              {g.page && <Action href={g.page}>Об игре <span aria-hidden>→</span></Action>}
              {g.site && <Action href={g.site}>Сайт игры <span aria-hidden>↗</span></Action>}
              <Action href={g.privacy} className={styles.actionQuiet}>Политика конфиденциальности</Action>
            </div>
          </li>
        ))}
      </ul>

      <p className={`${styles.mono} ${styles.hubNote}`}>
        Все игры в одном списке —{' '}
        <a href={DEVELOPER_PLAY} target="_blank" rel="noreferrer" className={styles.textLink}>
          страница разработчика Narodniy в Google Play
        </a>
        . Игры созданы независимо и не связаны с разработчиками игр, по мотивам которых сделаны предметы.
      </p>
    </main>
  )
}
