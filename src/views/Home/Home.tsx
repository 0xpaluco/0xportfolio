import { MetaTags } from '@components/shared';
import { StrapiProjectData } from 'lib/types/strapi-schema';
import Head from 'next/head'
import { useState } from 'react';
import { CTA, FeaturedWork, Main, Metrics } from './components';

interface HomeProps {
    projectData: StrapiProjectData
}

const HomeView = ({ projectData }: HomeProps) => {
    const [projects, setProjects] = useState(projectData.data);

    return (
        <>
        <MetaTags 
            title="Web3 Development" 
            description="Web3 Research and Development" />
        <Main/>
        <Metrics/>
        <FeaturedWork projects={projects}/>
        <CTA/>
        </>
    )
}



export default HomeView

