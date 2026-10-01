export default function sitemap() {
  const baseUrl = 'https://narodniy-team.ru'
  const now = new Date()

  const services = [
    'razrabotka-saytov',
    'razrabotka-mobilnyh-prilozheniy',
    'razrabotka-programm-na-pk',
  ]

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...services.map((slug) => ({
      url: `${baseUrl}/uslugi/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    })),
    /* Лендинг AI-ассистента живёт отдельной статикой в /ai/ (репозиторий
       ai-assistant-landing), но в карту сайта попадать должен отсюда —
       иначе каждая сборка затирала бы дописанные вручную строки. */
    {
      url: `${baseUrl}/ai/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai/cases.html`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/igry`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/igry/musordrop`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...['privacy', 'delete-account'].map((doc) => ({
      url: `${baseUrl}/igry/musordrop/${doc}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.4,
    })),
    {
      url: `${baseUrl}/igry/stardrop/privacy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ]
}
