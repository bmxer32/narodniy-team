import Link from 'next/link'
import styles from '../igry.module.css'
import { GAMES_EMAIL, play } from '../games'

/* Главная страница приложения MusorDrop.

   Её адрес указан в брендинге экрана входа Google (Google Auth Platform →
   Branding → App home page). Проверяющий Google смотрит здесь три вещи:
   название совпадает с экраном входа («MusorDrop»), описано, что делает
   приложение, и есть ссылка на политику конфиденциальности. Любую из них
   убрать — значит провалить повторную проверку бренда. */

const PATH = '/igry/musordrop'
const PKG = 'com.musordrop.game'
const PLAY = play(PKG)
const TELEGRAM = 'https://t.me/musordropfree'

const TITLE = 'MusorDrop — симулятор открытия кейсов для Android'
const DESCRIPTION =
  'MusorDrop (Мусор дроп) — бесплатный симулятор открытия кейсов: сорок шесть кейсов, апгрейд, контракты и мини-игры на игровой валюте. Работает без интернета.'

export const metadata = {
  title: `${TITLE} | Narodniy Team`,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    type: 'website',
    images: [{ url: '/igry/musordrop.webp', width: 256, height: 256, alt: 'MusorDrop' }],
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/igry/musordrop.webp'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'MusorDrop',
  alternateName: 'Мусор дроп',
  description: DESCRIPTION,
  url: `https://narodniy-team.ru${PATH}`,
  installUrl: PLAY,
  image: 'https://narodniy-team.ru/igry/musordrop.webp',
  operatingSystem: 'Android',
  applicationCategory: 'GameApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB' },
  publisher: { '@type': 'Organization', name: 'Narodniy Team', url: 'https://narodniy-team.ru' },
}

const SHOTS = [
  { src: 'cases', alt: 'Витрина кейсов' },
  { src: 'case', alt: 'Экран кейса: состав и шанс каждого предмета до вскрытия' },
  { src: 'upgrade', alt: 'Апгрейд: шанс написан на колесе' },
  { src: 'contracts', alt: 'Контракт: пять предметов в обмен на один' },
]

const FEATURES = [
  ['Кейсы', 'Сорок шесть кейсов — от самого дешёвого до такого, на который копят всю игру. Состав и шанс на каждый предмет видны до вскрытия, прямо на экране кейса.'],
  ['Вскрытие пачкой', 'Один, два, три, пять или десять кейсов разом.'],
  ['Апгрейд', 'Выбираете предмет и множитель — ×1.5, ×2, ×5 или ×10 — и крутите колесо. Чем выше множитель, тем ниже шанс, и шанс написан на колесе.'],
  ['Контракты', 'Пять предметов уходят в сделку, взамен приходит один: худший исход возвращает треть вложенного, лучший — втрое больше.'],
  ['Магнитный кран', 'Электромагнитом ловите то, что едет по конвейеру свалки, — от мелкого лома до сейфа.'],
  ['Мини-игры', '«Угадай дроп»; «Сортировка» — дороже или дешевле окажется следующий предмет; «Крысы» — двадцать пять баков, и когда остановиться, решаете вы.'],
  ['Каталог', 'Больше четырёх тысяч предметов: скины, ножи, перчатки, наклейки, агенты. В апгрейде и контрактах играет весь.'],
  ['Бонусы', 'Ежедневное начисление, бонусный кейс по таймеру и колесо фортуны.'],
  ['Языки', 'Десять языков интерфейса.'],
]

export default function MusorDropPage() {
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className={styles.crumbs} aria-label="Навигация">
        <Link href="/igry">Игры</Link>
        <span>/</span>
        <span>MusorDrop</span>
      </nav>

      <section className={styles.hero}>
        <img src="/igry/musordrop.webp" alt="Иконка MusorDrop" width={112} height={112} className={styles.heroIcon} />
        <div>
          <h1 className={styles.heroTitle}>MusorDrop</h1>
          <p className={`${styles.mono} ${styles.heroSub}`}>
            Мусор дроп: симулятор кейсов · Android · бесплатно · 16+
          </p>
          <p className={styles.heroText}>
            Симулятор открытия кейсов на игровой валюте. Вместо кейса — мусорный бак, вместо
            скина — находка со свалки. Игра работает без интернета, а вход через Google нужен
            только тем, кто хочет перенести прогресс на другой телефон.
          </p>
          <div className={styles.heroCtas}>
            <a href={PLAY} target="_blank" rel="noreferrer" className="btn-primary">
              Скачать в Google Play
            </a>
            <Link href={`${PATH}/privacy`} className="btn-secondary">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </section>

      <div className={styles.shots}>
        {SHOTS.map((s) => (
          <img
            key={s.src}
            src={`/igry/musordrop/${s.src}.webp`}
            alt={s.alt}
            width={450}
            height={800}
            loading="lazy"
            className={styles.shot}
          />
        ))}
      </div>

      <section className={styles.block}>
        <div className={styles.blockHead}>
          <h2 className={styles.blockTitle}>Что внутри</h2>
          <span className={styles.mono}>версия 1.3</span>
        </div>
        <dl className={styles.spec}>
          {FEATURES.map(([term, desc]) => (
            <div key={term} className={styles.specRow}>
              <dt className={styles.specTerm}>{term}</dt>
              <dd className={styles.specDesc}>{desc}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.block}>
        <p className={styles.statement}>
          Это симулятор.{' '}
          <span>
            Баланс и предметы вымышленные. Реальные деньги не принимаются, не выплачиваются
            и не выигрываются, а предметы нельзя купить, продать, обменять или вывести из игры.
          </span>
        </p>
      </section>

      <section className={styles.block} id="google">
        <div className={styles.split}>
          <div>
            <h2 className={styles.blockTitle}>Вход через Google — по желанию</h2>
            <p className={styles.mono} style={{ marginTop: 16 }}>
              Firebase Authentication · Cloud Firestore
            </p>
          </div>
          <div className={styles.prose}>
            <p>
              Играть можно без аккаунта — тогда прогресс хранится только на телефоне. Вход через
              Google нужен для одного: сохранить копию прогресса в облаке и продолжить игру на
              другом устройстве.
            </p>
            <p><strong>Что игра получает от аккаунта Google:</strong></p>
            <ul>
              <li>идентификатор аккаунта;</li>
              <li>адрес электронной почты;</li>
              <li>отображаемое имя;</li>
              <li>ссылку на фото профиля.</li>
            </ul>
            <p>
              Рядом с ними в облаке лежит копия прогресса: баланс, инвентарь, статистика. Эти
              данные нужны только затем, чтобы сохранить и восстановить игру, — они не продаются,
              не передаются третьим лицам и не используются для рекламы.
            </p>
            <p>
              <strong>Как удалить:</strong> в игре — «Профиль» → «Настройки» → «Удалить аккаунт
              и данные из облака», либо без приложения, по{' '}
              <Link href={`${PATH}/delete-account`} className={styles.textLink}>инструкции на странице удаления</Link>.
              Подробно о данных — в{' '}
              <Link href={`${PATH}/privacy`} className={styles.textLink}>политике конфиденциальности</Link>.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.blockHead}>
          <h2 className={styles.blockTitle}>Документы и связь</h2>
        </div>
        <div className={styles.links}>
          <Link href={`${PATH}/privacy`} className={styles.linkRow}>
            <span className={styles.linkName}>Политика конфиденциальности</span>
            <span className={`${styles.mono} ${styles.linkMeta}`}>{PATH}/privacy →</span>
          </Link>
          <Link href={`${PATH}/delete-account`} className={styles.linkRow}>
            <span className={styles.linkName}>Удаление аккаунта и данных</span>
            <span className={`${styles.mono} ${styles.linkMeta}`}>{PATH}/delete-account →</span>
          </Link>
          <a href={PLAY} target="_blank" rel="noreferrer" className={styles.linkRow}>
            <span className={styles.linkName}>Google Play</span>
            <span className={`${styles.mono} ${styles.linkMeta}`}>{PKG} ↗</span>
          </a>
          <a href={TELEGRAM} target="_blank" rel="noreferrer" className={styles.linkRow}>
            <span className={styles.linkName}>Telegram-канал игры</span>
            <span className={`${styles.mono} ${styles.linkMeta}`}>t.me/musordropfree ↗</span>
          </a>
          <a href={`mailto:${GAMES_EMAIL}`} className={styles.linkRow}>
            <span className={styles.linkName}>Почта поддержки</span>
            <span className={`${styles.mono} ${styles.linkMeta}`}>{GAMES_EMAIL}</span>
          </a>
        </div>

        <p className={styles.disclaimer}>
          MusorDrop создан независимо и не связан с разработчиками игры, по мотивам которой сделаны
          предметы, не одобрен и не спонсируется ими. Цены справочные, взяты из открытых данных
          и не являются офертой. Приложение не связано с сайтами открытия кейсов и не является их
          клиентом: пополнения счёта и вывода предметов в нём нет. Для лиц от 16 лет.
        </p>
      </section>
    </main>
  )
}
