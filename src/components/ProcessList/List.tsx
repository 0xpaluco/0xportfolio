import { Container, StylizedImage } from '@components/shared'
import { FadeIn } from '@components/shared/FadeIn/FadeIn'
import { TagList, TagListItem } from '@components/shared/TagList/TagList'

import { urlForImage } from '@/sanity/lib/image'
import { ProcessStepType } from '@/sanity/lib/queries'

interface SectionProps {
  title: string
  image: { src: string; shape: number }
  children: React.ReactNode
}
const Section = ({ title, image, children }: SectionProps) => {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              // sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-300 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

interface ProjectCardProps {
  step: ProcessStepType
  shape: number
}

const ProcessCard = ({ step, shape }: ProjectCardProps) => {
  return (
    <Section
      title={step.title}
      image={{
        src: urlForImage(step?.image),
        shape,
      }}
    >
      <div className="space-y-6 text-base text-white">{step.excerpt}</div>
      <h3 className="mt-12 font-display text-base font-semibold text-c-l-primary">
        Included in this phase
      </h3>
      <TagList className="mt-8">
        {step.deliverables.map((deliverable) => (
          <TagListItem
            className={'text-c-l-primary bg-c-primary'}
            key={deliverable.title}
          >
            {deliverable.title}
          </TagListItem>
        ))}
      </TagList>
    </Section>
  )
}

interface ProjectGridProps {
  steps: ProcessStepType[]
}

const ProcessList = ({ steps }: ProjectGridProps) => {
  return (
    <div className="space-y-24 mt-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
      {steps.map((step, index) => (
        <ProcessCard step={step} key={step.title} shape={index}></ProcessCard>
      ))}
    </div>
  )
}

export default ProcessList
