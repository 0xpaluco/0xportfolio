import { Footer } from "@components/shared"
import Link from "next/link"

const messages = [
    {
        id: 1,
        subject: 'Velit placeat sit ducimus non sed',
        sender: 'Gloria Roberston',
        time: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
        id: 2,
        subject: 'Velit placeat sit ducimus non sed',
        sender: 'Gloria Roberston',
        time: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    {
        id: 3,
        subject: 'Velit placeat sit ducimus non sed',
        sender: 'Gloria Roberston',
        time: '1d ago',
        datetime: '2021-01-27T16:35',
        preview:
            'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
    },
    // More messages...
]

export default function Aside() {
    return (
        <div className="sticky top-6 space-y-4 overflow-hidden sm:rounded-lg">
            <div className="px-2 py-2 sm:px-6">
                <h2 className="text-lg leading-6 font-medium text-gray-600">News</h2>
            </div>
            <div className="border-t border-gray-200">
                <ul role="list" className="divide-y divide-gray-200">
                    {messages.map((message) => (
                        <li
                            key={message.id}
                            className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                        >
                            <div className="flex justify-between space-x-3">
                                <div className="min-w-0 flex-1">
                                    <Link href="#" className="block focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        <p className="text-sm font-medium text-gray-900 truncate">{message.sender}</p>
                                        <p className="text-sm text-gray-500 truncate">{message.subject}</p>
                                    </Link>
                                </div>
                                <time dateTime={message.datetime} className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                                    {message.time}
                                </time>
                            </div>
                            <div className="mt-1">
                                <p className="line-clamp-2 text-sm text-gray-600">{message.preview}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div >

            <Footer />
        </div>
    )
}