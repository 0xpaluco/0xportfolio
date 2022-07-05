import { MetaTags } from '@components/index';
import Head from 'next/head'
import { CTA, Features, Main, Metrics } from './components';


const HomeView = () => {
        return (
        <>
            <MetaTags title="Web3 Development" description="Web3 Research and Development" />
            <Main/>
            <Metrics/>
            <Features/>
            <CTA/>
        </>
    )
}



export default HomeView

