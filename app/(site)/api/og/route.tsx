import { OpenGraphImage } from '@components/shared'
import { height, width } from '@components/shared/OpenGraphImage/OpenGraphImage'
import { ImageResponse } from 'next/og'

import { getClient } from '@/sanity/lib/client'
import { Settings, settingsQuery } from '@/sanity/lib/queries'

// App router includes @vercel/og.
// No need to install it.
export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const hasTitle = searchParams.has('title')
  let title = hasTitle ? searchParams.get('title')?.slice(0, 100) : undefined

  const hasUrl = searchParams.has('imageUrl')
  let url = hasUrl ? searchParams.get('url') : undefined

  if (!title || !url) {
    const client = getClient()
    const settings = (await client.fetch<Settings>(settingsQuery)) || {}
    title = settings?.ogImage?.title || 'og title'
    url = settings?.ogImage?.imageUrl || 'og title'
  }

  return new ImageResponse(<OpenGraphImage title={title || ''} url={url} />, {
    width,
    height,
  })
}
