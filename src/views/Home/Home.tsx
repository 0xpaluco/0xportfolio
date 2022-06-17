import Head from 'next/head'
import { Main } from './components';


const HomeView = () => {
        return (
        <>
            <Head>
                <title>0xpaluco | Web3 Development</title>
                <meta name="description" content="Web3 Research and Development" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main/>
        </>
    )
}



export default HomeView

