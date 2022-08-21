import { MetaTags } from '@components/shared';
import Head from 'next/head'
import { CTA, FeaturedWork, Main, Metrics } from './components';


const HomeView = () => {
        return (
        <>
            <MetaTags title="Web3 Development" description="Web3 Research and Development" />
            <Main/>
            <Metrics/>
            <FeaturedWork/>
            <CTA/>
        </>
    )
}



export default HomeView

