import { MetaTags } from '@components/shared';
import { StrapiProjectData, StrapiArticleData } from 'lib/types/strapi-schema';
import { useState } from 'react';
import { FeaturedWork, Main } from './components';

interface HomeProps {
    projectData: StrapiProjectData
    articleData: StrapiArticleData
}

const HomeView = ({ projectData, articleData }: HomeProps) => {
    const [projects, setProjects] = useState(projectData.data);
    const [articles, setArticles] = useState(articleData.data);
    return (
        <>
        <MetaTags 
            title="Web3 Development" 
            description="Web3 Research and Development" />
        <Main/>
        <FeaturedWork projects={projects} articles={articles}/>
        </>
    )
}



export default HomeView

