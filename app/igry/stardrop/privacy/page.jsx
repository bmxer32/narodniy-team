import PolicyDoc from '../../PolicyDoc'

/* Политика конфиденциальности StarDrop — её адрес указан в карточке
   Google Play. Текст собирается в репозитории игры (tools/build_privacy.py
   из PRIVACY.md) и кладётся в content/stardrop/. */

export const metadata = {
  title: 'Политика конфиденциальности StarDrop | Narodniy Team',
  description:
    'Какие данные собирает игра StarDrop: прогресс остаётся на устройстве, наружу уходят только данные для показа рекламы сетью Яндекса и её партнёрами.',
  alternates: { canonical: '/igry/stardrop/privacy' },
}

export default function Page() {
  return <PolicyDoc game="stardrop" page="privacy" />
}
