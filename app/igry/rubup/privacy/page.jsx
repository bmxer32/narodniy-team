import PolicyDoc from '../../PolicyDoc'

/* Политика конфиденциальности RubUp (до 26.10.2026 — StarDrop). Текст
   собирается в репозитории игры (tools/build_privacy.py из PRIVACY.md)
   и кладётся в content/rubup/. */

export const metadata = {
  title: 'Политика конфиденциальности RubUp | Narodniy Team',
  description:
    'Какие данные собирает игра RubUp: прогресс остаётся на устройстве, наружу уходят только данные для показа рекламы сетью Яндекса и её партнёрами.',
  alternates: { canonical: '/igry/rubup/privacy' },
}

export default function Page() {
  return <PolicyDoc game="rubup" page="privacy" />
}
