import { ContactView } from '@views/index'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '0xPaluco | Contact',
  description: 'We’d love to hear from you. Schedule a 15-minute zoom meeting.',
  alternates: {
    canonical: `https://0xpalu.co/contact`,
  },
  robots: {
    index: true,
    follow: true
  },
};

export default async function Page() {
  const projectData: any[] = []
  const articleData: any[] = []

  return <ContactView />
}

Page.auth = false