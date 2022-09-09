import { Account } from "@components/Web3";
import { classNames } from "@helpers/ui";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useProvider } from 'wagmi'

interface HeroProps {
    safes?: Array<SafeItem>
}


const Vault = ({ safes }: HeroProps) => {

    const { data: session, status } = useSession();
    const isAuthenticated = status === "authenticated";
    
    const provider = useProvider()
    const [blockNumber, setBlockNumber] = useState<number>()
    const [balance, setBalance] = useState<{}>()

    useEffect(() => {
        provider.on('block', async (blockNumber: number) =>{
            setBlockNumber(blockNumber)

            // const address = "0xdcfff0eaaef06eb27c821c62f2e3636ec0dade5f"
            // const resp = await axios.get("/api/whale/balance", { params: { address, chain: provider.network.chainId } })            
            // setBalance(resp.data.balance);
        })
    },
    [])
    

    return (
        <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <main className="lg:relative">
                <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                    <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                            <span className="block dark:text-c-d-primary text-c-d-secondary xl:inline">Token Rescue</span>{' '}
                            <span className="block dark:text-c-primary text-c-secondary xl:inline">Reclaim what you lost!</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            Access your safe and get your tokens back.
                            
                        </p>
                        

                        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">

                        { blockNumber } 
                        
                            {!isAuthenticated && <>
                                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                    <Account /> 
                                </div>
                            </>}

                        </div>
                    </div>
                </div>

                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-200 shadow-inner rounded-lg px-2">
                    {!isAuthenticated && <>
                        <div className="flow-root mt-6 text-center">
                            <NoSafe />
                        </div>
                    </>}

                    {isAuthenticated && <>
                        <SafeList address={session?.user.address!} />
                    </>}
                </div>
            </main>
        </div>
    )
}

interface SafeItem {
    id: number
    from: string
    to: string
}

interface SafeItemProp {
    safe: SafeItem
}

interface SafeListProp {
    address: string
}

const SafeItem = (props: SafeItemProp) => {
    const safe = props.safe;
    const name = "ens name"

    return (
        <li key={safe.id} className="py-4 my-1 bg-white rounded-sm">
            <div className="flex items-center space-x-4 px-2">
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{`Safe #${safe.id}`}</p>
                    <p className="text-sm text-gray-500 truncate">from: {name ? name : safe.from}</p>
                </div>
                <div>
                    <Link href={{
                        pathname: '/projects/token-recovery/safe',
                        query: {
                            id: safe.id,
                            from: safe.from,
                            to: safe.to
                        },
                    }}>
                        <a className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50" >
                            View
                        </a>
                    </Link>

                </div>
            </div>
        </li>
    )
}

const SafeList = (props: SafeListProp) => {


    const data: any = []

    const safes = useMemo(() => {
        return data.map((safe: any) => { return { to: safe.get("to"), from: safe.get("from"), id: safe.get("uid") } as SafeItem })
    },
        [data])

    if (safes.length == 0) {
        return (
            <div className="flow-root mt-6 text-center">
                <NoSafe />
            </div>
        )
    }

    return (
        <div className="">
            <div className="flow-root mt-6">

                <h1 className="text-xl tracking-tight font-extrabold text-gray-900 text-center mb-4">
                    <span className="block dark:text-c-d-primary text-c-d-secondary xl:inline">Access your safes</span>{' '}
                </h1>
                <ul role="list" className="mx-1 divide-y divide-gray-200">
                    {safes.map((safe: any) => (
                        <SafeItem safe={safe} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

const NoSafe = () => {
    return (
        <div
            className="relative block w-full h-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" className="mx-auto h-12 w-12 text-gray-400">
                <title>Vault</title>
                <desc>A line styled icon from Orion Icon Library.</desc>
                <rect data-name="layer1" x="2" y="2" width="60" height="60" rx="3" ry="3" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2"></rect>
                <path data-name="layer2" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" d="M10 16v-6h44v44H10v-6m0-8V24"></path>
                <circle data-name="layer2" cx="34" cy="32" r="8" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2"></circle>
                <path data-name="layer2" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" d="M34 20v4m0 16v4M22 32h4m16 0h4m-20.5-8.5l2.8 2.8m11.4 11.4l2.8 2.8m-17 0l2.8-2.8m11.4-11.4l2.8-2.8"></path>
                <path data-name="layer1" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" d="M8 16h4v8H8zm0 24h4v8H8z"></path>
            </svg>
            <span className="mt-2 block text-sm font-medium text-gray-900">You have 0 safes.</span>
        </div>
    )
}

export default Vault