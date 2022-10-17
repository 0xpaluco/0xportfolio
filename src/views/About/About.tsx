import Image from 'next/future/image'
import portraitImage from '@images/portrait.jpg'
import { socialNavigation } from '@helpers/routes'
import { SocialLink } from '@components/SocialIcons'
import { MailIcon } from '@heroicons/react/solid'
import { MetaTags } from '@components/shared'

interface AboutViewProps {
}

const AboutView = ({ }: AboutViewProps) => {

  return (
    <>

      <MetaTags
        title='About'
        description='I’m Paluco. I live in Puerto Rico, where I design the future.' />

      <div className="relative bg-c-bg rounded-md shadow-lg pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="h-1/3 sm:h-2/3" />
        </div>
        <div className="relative  max-w-7xl mx-auto">

          <div className="bg-c-bg rounded-lg shadow shadow-c-bg">
            <main className="lg:relative">
              <div className="">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                  <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                      <Image
                        src={portraitImage}
                        alt=""
                        sizes="(min-width: 1024px) 32rem, 20rem"
                        className="aspect-square rotate-3 rounded-2xl object-cover bg-zinc-800"
                      />
                    </div>
                  </div>
                  <div className="lg:order-first lg:row-span-2">
                    <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-5xl max-w-4xl">
                      I’m Paluco. I live in Puerto Rico, where I build the future.
                    </h2>

                    <div className="mt-6 space-y-7 text-base text-gray-400">
                      <p>
                        I’ve always enjoyed making things, my first experience with programming was when I was 13 years old, where
                        I began experimenting with online video games and hosting several private servers.
                        That’s when I realized I wanted to create bigger and greater things.
                      </p>
                      <p>
                        Throughout my professional career, I’ve had the opportunity to work with a variety of start-ups in numerous industries.
                        I’ve liked studying and working directly with company founders,
                        which has given me the opportunity to learn about various aspects of business growth.
                      </p>

                      <p>
                        Today, I’m the founder of 0xLabs, where we’re
                        aiming to let creators own their own platform
                        so they <em>can</em>{' '} offer their audience access and ownership.
                      </p>
                    </div>
                  </div>
                  <div className="lg:pl-20">
                    <ul role="list">

                      {socialNavigation.map((item) => (

                        <SocialLink
                          key={item.name}
                          href={item.href}
                          icon={item.icon}
                        >
                          Follow on {item.name}
                        </SocialLink>

                      ))}

                      <SocialLink
                        href="mailto:hello@0xpalu.co"
                        icon={MailIcon}
                        className="my-8 border-t pt-8 border-zinc-700/40"
                      >
                        hello@0xpalu.co
                      </SocialLink>
                    </ul>
                  </div>
                </div>
              </div>
            </main>
          </div>

        </div>
      </div>



    </>

  )
}

export default AboutView
