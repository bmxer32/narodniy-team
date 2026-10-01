/* Игры студии. Один список — и для страницы /igry, и для карты сайта.

   `storeName` — ровно как в Google Play: игрок переходит по ссылке
   и должен узнать в магазине то, что видел здесь.

   Ссылка на RuStore стоит только у тех, чью публикацию там проверили.
   Мёртвая ссылка в каталоге хуже отсутствующей. По той же причине у игры,
   которой ещё нет в Play, `soon: true` — вместо кнопки надпись «Скоро
   в Google Play»; после публикации флаг убрать.

   `iconVersion` — номер в адресе иконки (?v=), чтобы браузер забыл
   старую картинку после замены файла; по умолчанию 2. */

export const DEVELOPER_PLAY = 'https://play.google.com/store/apps/developer?id=Narodniy'

export const GAMES_EMAIL = 'narodniy.team@gmail.com'

export const play = (pkg) => `https://play.google.com/store/apps/details?id=${pkg}`
export const rustore = (pkg) => `https://apps.rustore.ru/app/${pkg}`

export const GAMES = [
  {
    slug: 'century-front',
    name: 'Century Front',
    storeName: 'Century Front',
    pkg: 'com.centuryfront.game',
    about:
      'Стратегия в реальном времени о веке войны — от окопов 1914 года до наших дней. Четыре эпохи, Восток и Запад, кампания, бои с ботами и игра по сети.',
    privacy: 'https://bmxer32.github.io/century-front/privacy.html#ru',
  },
  /* Карточка восстановлена 01.10 по живой странице: «Апгрейд жизни»
     выкладывали на сервер мимо этого репозитория, и без неё сборка
     стёрла бы игру из каталога. Политика лежит на сервере
     (igry/lifeupgrade/privacy.html), в репозитории её нет. */
  {
    slug: 'lifeupgrade',
    name: 'Апгрейд жизни',
    storeName: 'Апгрейд жизни',
    pkg: 'ru.lifeupgrade.game',
    about:
      'Юмористический симулятор жизни: от буханки хлеба и теплотрассы до пентхауса и своего банка. События каждый день, дела, риск вещами на бутылочке и шесть ступеней — от бомжа до миллиардера. Всё на игровых деньгах.',
    privacy: '/igry/lifeupgrade/privacy.html',
    iconVersion: 1,
  },
  {
    slug: 'musordrop',
    name: 'MusorDrop',
    storeName: 'Мусор дроп: симулятор кейсов',
    pkg: 'com.musordrop.game',
    about:
      'Мусорные баки вместо кейсов, находки со свалки вместо скинов. Сорок шесть кейсов, апгрейд, контракты, магнитный кран и мини-игры.',
    page: '/igry/musordrop',
    privacy: '/igry/musordrop/privacy',
  },
  {
    slug: 'stardrop',
    name: 'StarDrop',
    storeName: 'StarDrop: симулятор кейсов',
    pkg: 'com.stardrop.cases',
    about:
      'Симулятор открытия кейсов с анимированными коллекционными подарками: тридцать девять кейсов, апгрейд, ракета, плинко и монетка. Всё на игровых звёздах.',
    privacy: '/igry/stardrop/privacy',
    soon: true,
  },
  {
    slug: 'caser',
    name: 'Кейсер',
    storeName: 'Кейсер: симулятор кейсов',
    pkg: 'com.caser',
    about:
      'Симулятор открытия кейсов со скинами: вскрытие, апгрейд, контракты и инвентарь.',
    privacy: 'https://bmxer32.github.io/caser-privacy/',
  },
  {
    slug: 'upgrader',
    name: 'Upgrader',
    storeName: 'Upgrader апгрейдер скины кс',
    pkg: 'com.upgrader.upgrader',
    about:
      'Симулятор апгрейда скинов: выбираете предмет и цель, крутите колесо. Шанс написан на колесе до прокрутки.',
    rustore: true,
    site: 'https://upgrader-play.ru',
    privacy: 'https://upgrader-play.ru/privacy.html',
  },
  {
    slug: 'rustgrade',
    name: 'RustGrade',
    storeName: 'RustGrade Прокачка скинов раст',
    pkg: 'com.rustgrade.rustgrade',
    about:
      'Апгрейд скинов в духе Rust: предмет, цель подороже, колесо. Не повезло — вернётся утешительный приз.',
    privacy: 'https://bmxer32.github.io/rustgrade-privacy/',
  },
  {
    slug: 'standdrop',
    name: 'StandDrop',
    storeName: 'StandDrop: кейсы и скины SO2',
    pkg: 'com.standdrop.standdrop',
    about:
      'Неофициальный симулятор кейсов по мотивам Standoff 2: кейсы, ножи и перчатки, апгрейд скинов.',
    privacy: 'https://bmxer32.github.io/standdrop-privacy/',
  },
]
