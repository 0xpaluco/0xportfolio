import { ContactView } from '@views/index'
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'We’d love to hear from you. Schedule a 15-minute zoom meeting.',
  };

export default async function Page() {
  const projectData: any[] = []
  const articleData: any[] = []

  return <ContactView />
}

Page.auth = false