import PolicyDoc from '../../PolicyDoc'

/* Этот адрес указан как политика конфиденциальности в брендинге экрана
   входа Google — должен лежать на том же домене, что главная страница
   приложения (/igry/musordrop). */

export const metadata = {
  title: 'Политика конфиденциальности MusorDrop | Narodniy Team',
  description:
    'Какие данные собирает игра MusorDrop: что остаётся на устройстве, что уходит рекламной сети Яндекса и что сохраняется в Google Firebase при необязательном входе.',
  alternates: { canonical: '/igry/musordrop/privacy' },
}

export default function Page() {
  return <PolicyDoc page="privacy" />
}
