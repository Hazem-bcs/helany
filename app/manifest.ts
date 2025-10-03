import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'عيادة د. محمد حيلاني للأسنان',
    short_name: 'د. حيلاني',
    description: 'عيادة أسنان احترافية تقدم أفضل خدمات طب الأسنان',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1865ab',
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}


