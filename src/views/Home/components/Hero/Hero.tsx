import { Account } from "@components/Web3";
import { classNames } from "@helpers/ui";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useSession } from "next-auth/react";

interface HeroProps {}

const Hero = ({ }: HeroProps) => {
    const { openConnectModal } = useConnectModal();
    const { data: session } = useSession()

    return (
        <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <main className="lg:relative">
                <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                    <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                            <span className="block dark:text-c-d-primary text-c-d-secondary xl:inline">Web 3 Template</span>{' '}
                            <span className="block dark:text-c-primary text-c-secondary xl:inline">start dev today!</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                            more info here i guess...
                        </p>
                        <div className="mt-10 sm:flex sm:justify-center lg:justify-start">

                            {session && <>
                                <div className="rounded-md shadow">
                                    <div className="text-center">
                                        <button type="button"
                                            className={classNames("w-full flex items-center justify-center px-8 py-3 border-2 border-transparent text-base font-medium rounded-md text-black dark:border-c-primary border-c-secondary bg-c-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10")}
                                        >
                                            View Dashboard???
                                        </button>
                                    </div>
                                </div>
                            </>}

                            {!session && <>
                                <div className="mt-3 rounded-md shadow sm:mt-0">
                                    {openConnectModal && (
                                        <button
                                            onClick={openConnectModal}
                                            type="button"
                                            className="rounded-md bg-c-primary px-3.5 py-2.5 text-base font-bold text-white shadow-sm hover:bg-c-d-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-primary"
                                        >
                                            Connect Wallet
                                        </button>
                                    )}
                                </div>
                            </>}

                        </div>
                    </div>
                </div>

                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full dark:bg-c-l-primary bg-c-l-secondary" />
                </div>
            </main>
        </div>
    )
}

export default Hero