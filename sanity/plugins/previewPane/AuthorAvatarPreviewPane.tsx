import { urlForImage } from '@/sanity/lib/image'
import { Author } from '@/sanity/lib/queries'
import { Card, Flex } from '@sanity/ui'
import Image from 'next/image'

export default function AuthorAvatarPreviewPane(props: Author) {
  const { name, image } = props
  return (
    <Card padding={6}>
      <Flex justify="center">
        <AuthorAvatar name={name || 'Untitled'} image={image} />
      </Flex>
    </Card>
  )
}

const AuthorAvatar = (props: Author) => {
  const { name, image } = props
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        <Image
          src={
            image?.asset?._ref
              ? urlForImage(image)
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full"
          height={96}
          width={96}
          alt={image?.alt ?? name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
