import Link from "next/link";

const Blog = () => {

    const tools = [
        {
          title: 'Token Recovery',
          href: '#',
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
        },
        {
          title: 'COMP Farmer',
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
        },
      ]

    return (
        <div className="relative bg-c-bg pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-c-bg h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">From the Blog</h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-400 sm:mt-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
                </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {tools.map((tool) => (
                    <div key={tool.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <div className="flex-shrink-0">
                        <img className="h-48 w-full object-cover" src={tool.imageUrl} alt="" />
                    </div>
                    <div className="flex-1 bg-c-bg-light p-6 flex flex-col justify-between">
                        <div className="flex-1">
                        <p className="text-sm font-medium text-c-primary">
                        <Link href={tool.category.href}>
                            <a className="hover:underline">
                              {tool.category.name}
                            </a>
                          </Link>
                        </p>
                        <a href={tool.href} className="block mt-2">
                            <p className="text-xl font-semibold text-white">{tool.title}</p>
                            <p className="mt-3 text-base text-gray-400">{tool.description}</p>
                        </a>
                        </div>
                        <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <Link href={tool.contract.href}>
                              <a href={tool.contract.href}>
                                <span className="sr-only">{tool.contract.address}</span>
                                <div className="h-10 w-10 rounded-full bg-black" />
                              </a>
                            </Link>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-white">
                              <Link href={tool.contract.href}>
                                <a  className="hover:underline">
                                  View on Etherscan
                              </a>
                              </Link>
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                              
                              <span>{tool.contract.address}</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Blog;