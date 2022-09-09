import Head from "next/head"

interface MetaProps {
    title: string
    description: string
}

const MetaTags = (props: MetaProps) => {
    return (
        <Head>
            <title>{`0xpaluco | ${props.title}`}</title>
            <meta name="description" content={props.description} />
            <meta name="robots" content="noindex,nofollow"/>
            <meta name="keywords" content="Web3, Development, NFT, Crypto"/>
            <meta name="author" content="0xpaluco"/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default MetaTags