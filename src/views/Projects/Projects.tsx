import { classNames } from "@helpers/ui";
import Link from "next/link";
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/outline'
import { ArrowRightIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import { SocialIcons } from "@components/index";

const Projects = () => {

    const projects = [
        {
          title: 'Token Recovery',
          href: '/projects/token-recovery',
          category: { name: 'Security', href: '#' },
          description:
            'Have a compromised wallet? And need to rescue your tokens?',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          imageUrl:
            'https://images.unsplash.com/photo-1634224147987-95d2b7679fb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
          readingTime: '6 min',
          contract: {
            address: '0xabc123cdf321',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          iconForeground: 'text-white',
          iconBackground: 'bg-c-bg',
          icon: ClockIcon,
        },
        {
          title: 'NFT Factory',
          href: '#',
          category: { name: 'NFTs', href: '#' },
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
          date: 'Mar 10, 2020',
          datetime: '2020-03-10',
          imageUrl:
            'https://images.unsplash.com/photo-1652858319770-860b97ebe5b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
          readingTime: '4 min',
          contract: {
            address: '0xabc123cdf321',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          iconForeground: 'text-white',
          iconBackground: 'bg-c-bg',
          icon: ClockIcon,
        },
        {
          title: 'COMP Farmer',
          href: '/projects/comp-farmer',
          category: { name: 'DeFi', href: '#' },
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
            'https://images.unsplash.com/photo-1634542984003-e0fb8e200e91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
          readingTime: '11 min',
          contract: {
            address: '0xabc123cdf321',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          iconForeground: 'text-white',
          iconBackground: 'bg-c-bg',
          icon: ClockIcon,
        },
        {
          title: 'Arbitrage Bot',
          href: '#',
          category: { name: 'DeFi', href: '#' },
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
            'https://images.unsplash.com/photo-1642543348745-03b1219733d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',  
          readingTime: '11 min',
          contract: {
            address: '0xabc123cdf321',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          iconForeground: 'text-white',
          iconBackground: 'bg-c-bg',
          icon: ClockIcon,
        },
        {
          title: 'Swing & Yield',
          href: '#',
          category: { name: 'DeFi', href: '#' },
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
            'https://images.unsplash.com/photo-1634542984003-e0fb8e200e91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
          readingTime: '11 min',
          contract: {
            address: '0xabc123cdf321',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          iconForeground: 'text-white',
          iconBackground: 'bg-c-bg',
          icon: ClockIcon,
        },
        {
          title: 'Whale Watcher',
          href: '#',
          category: { name: 'DeFi', href: '#' },
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl:
            'https://images.unsplash.com/photo-1642543348745-03b1219733d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',  
          readingTime: '11 min',
          contract: {
            address: '0xabc123cdf321',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          iconForeground: 'text-white',
          iconBackground: 'bg-c-bg',
          icon: ClockIcon,
        },
      ]

    return (
        <div className="relative bg-c-bg rounded-md shadow-lg pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className=" h-1/3 sm:h-2/3" />
            </div>
            <div className="relative  max-w-7xl mx-auto">
                <div className="text-center">
                <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">Projects</h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-400 sm:mt-4">
                    Some of the things I've built.
                </p>
                </div>
                

                <div className="mt-12 rounded-lg  overflow-hidden shadow divide-y divide-c-bg sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                  {projects.map((action, actionIdx) => (
                    <div
                      key={action.title}
                      className={classNames(
                        actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                        actionIdx === projects.length - 2 ? 'sm:rounded-bl-lg' : '',
                        actionIdx === projects.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                        'relative group bg-c-bg-light p-6 focus-within:ring-1 focus-within:ring-inset focus-within:ring-c-d-primary'
                      )}
                    >
                      <div>
                        <span
                          className={classNames(
                            action.iconBackground,
                            action.iconForeground,
                            'rounded-lg inline-flex p-3 '
                          )}
                        >
                          <action.icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="my-8">
                        <h3 className="text-lg font-medium text-white">
                          
                          {action.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                          {action.description}
                        </p>
                        
                      </div>
                      <div className="absolute bottom-2">
                        <p className="mt-2 text-sm text-gray-400 inline-flex items-center">
                          <SocialIcons.typescript.icon className="mx-1 h-5 w-5"/>
                          <SocialIcons.solidity.icon className="mx-1 h-5 w-5"/>
                          <SocialIcons.hardhat.icon className="mx-1 h-5 w-5"/>
                          <SocialIcons.nodejs.icon className="mx-1 h-5 w-5"/>
                          <SocialIcons.react.icon className="mx-1 h-5 w-5"/>
                          <SocialIcons.nextjs.icon className="mx-1 h-5 w-5"/>
                        </p>
                      </div>
                      <span
                        className="absolute top-6 right-6 text-gray-300 inline-flex items-center"
                        aria-hidden="true"
                      >
                        

                        <Link href={action.href} target="_blank">
                          <a className="hover:text-gray-400 hover:cursor-pointer mx-2" target={"_blank"}>
                            <SocialIcons.github.icon className="h-6 w-6"/>
                          </a>
                        </Link>

                        <Link href={action.href}>
                          <a className="hover:text-gray-400 hover:cursor-pointer mx-2">
                            <ArrowRightIcon className="h-6 w-6"/>
                          </a>
                        </Link>
                        
                        
                      </span>
                    </div>
                  ))}
                </div>

            </div>
        </div>
    )
}

export default Projects;