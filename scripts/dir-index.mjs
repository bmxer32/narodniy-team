/* Запускается сам после `npm run build` (postbuild в package.json).

   Статическая сборка кладёт страницу /igry в out/igry.html, а её вложенные
   страницы — в папку out/igry/. На сервере рядом оказываются и файл, и папка
   с одним именем, и что отдаст nginx на /igry, решает порядок в try_files:
   `$uri.html` раньше `$uri/` — страницу, наоборот — редирект на /igry/
   и 403, потому что index.html в папке нет. /uslugi на сервере сейчас
   отвечает именно так.

   Копия страницы в папку как index.html делает оба порядка рабочими,
   и сборка не зависит от того, как настроен сервер. */

import { copyFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const file = join(dir, name)
    if (statSync(file).isDirectory()) {
      walk(file)
      continue
    }
    if (!name.endsWith('.html')) continue
    const twin = file.slice(0, -'.html'.length)
    const index = join(twin, 'index.html')
    if (existsSync(twin) && statSync(twin).isDirectory() && !existsSync(index)) {
      copyFileSync(file, index)
      console.log(`dir-index: ${file} → ${index}`)
    }
  }
}

walk('out')
