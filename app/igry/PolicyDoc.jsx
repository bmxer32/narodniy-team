import fs from 'node:fs'
import path from 'node:path'
import Link from 'next/link'
import styles from './igry.module.css'

/* Документ игры — политика конфиденциальности или страница удаления.

   Текст не пишется здесь, а берётся готовым из content/<игра>/. Туда его
   кладёт tools/build_privacy.py репозитория игры — из её PRIVACY.md. Две
   ручные копии одного документа разъехались бы, а Google сверяет политику,
   страницу удаления и анкету Data Safety между собой.

   Чтение идёт на сборке (output: 'export'), в браузер уходит готовый HTML. */

const PAGES = {
  privacy: { file: 'privacy.html', crumb: 'Политика конфиденциальности' },
  'delete-account': { file: 'delete-account.html', crumb: 'Удаление аккаунта' },
}

/* `home` — своя страница игры, если она есть. У StarDrop её пока нет:
   игра ещё не в Play, и ссылка из каталога вела бы в никуда. */
const GAMES = {
  musordrop: { name: 'MusorDrop', home: '/igry/musordrop', pages: ['privacy', 'delete-account'] },
  stardrop: { name: 'StarDrop', home: null, pages: ['privacy'] },
}

export default function PolicyDoc({ game = 'musordrop', page }) {
  const { name, home, pages } = GAMES[game]
  const { file, crumb } = PAGES[page]
  const html = fs.readFileSync(path.join(process.cwd(), 'content', game, file), 'utf8')
  const others = pages.filter((p) => p !== page)

  return (
    <main className={styles.main}>
      <nav className={styles.crumbs} aria-label="Навигация">
        <Link href="/igry">Игры</Link>
        <span>/</span>
        {home ? <Link href={home}>{name}</Link> : <span>{name}</span>}
        <span>/</span>
        <span>{crumb}</span>
      </nav>

      <article className={styles.doc} dangerouslySetInnerHTML={{ __html: html }} />

      <nav className={styles.docNav}>
        <Link href={home ?? '/igry'} className={styles.textLink}>
          ← {home ? name : 'Игры'}
        </Link>
        {others.map((other) => (
          <Link key={other} href={`/igry/${game}/${other}`} className={styles.textLink}>
            {PAGES[other].crumb}
          </Link>
        ))}
      </nav>
    </main>
  )
}
