import PolicyDoc from '../../PolicyDoc'

/* Политика конфиденциальности Jabka Drop — её адрес указан в карточке
   Google Play. Текст собирается в репозитории игры (tools/build_privacy.py
   из PRIVACY.md) и кладётся в content/jabkadrop/. */

export const metadata = {
  title: 'Политика конфиденциальности Jabka Drop | Narodniy Team',
  description:
    'Какие данные собирает игра Jabka Drop: никаких. Прогресс остаётся на устройстве, рекламы и аналитики нет, наружу уходят только запросы картинок предметов.',
  alternates: { canonical: '/igry/jabkadrop/privacy' },
}

export default function Page() {
  return <PolicyDoc game="jabkadrop" page="privacy" />
}
