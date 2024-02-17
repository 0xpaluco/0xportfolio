// Renders the Open Graph image used on the home page

// import Image from "next/image"

export const width = 1200
export const height = 630

type OGProps = {
  title: string
  url: string
}

export default function OpenGraphImage(props: OGProps) {
  const { title, url } = props
  return (
    <div
      tw="h-full w-full flex flex-col align-start justify-center py-10 px-20"
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: '100% 100%',
        fontFamily: 'Inter',
      }}
    >
      <div tw="text-6xl font-extrabold text-white tracking-tight leading-none mb-6 whitespace-pre-wrap">
        {title}
      </div>
    </div>
  )
}
