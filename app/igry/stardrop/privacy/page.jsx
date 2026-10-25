import PolicyDoc from '../../PolicyDoc'

/* Прежний адрес политики RubUp — игра называлась StarDrop, и этот адрес
   указан в карточке Google Play. Показывает тот же документ, что
   /igry/rubup/privacy; канонический адрес — новый. */

export const metadata = {
  title: 'Политика конфиденциальности RubUp | Narodniy Team',
  description:
    'Какие данные собирает игра RubUp (бывший StarDrop): прогресс остаётся на устройстве, наружу уходят только данные для показа рекламы сетью Яндекса и её партнёрами.',
  alternates: { canonical: '/igry/rubup/privacy' },
}

export default function Page() {
  return <PolicyDoc game="rubup" page="privacy" />
}
