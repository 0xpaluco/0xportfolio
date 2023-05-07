'use client';

import { Fragment, useState } from 'react';
import { FeaturedWork, Main, CTA } from './components';

interface HomeProps {
    projectData: any[]
    articleData: any[]
}

const HomeView = ({ projectData, articleData }: HomeProps) => {
    const [projects, setProjects] = useState<any[]>([]);
    const [articles, setArticles] = useState<any[]>([]);
    return (
        <Fragment>
            <Main/>
            <FeaturedWork projects={projects} articles={articles}/>
            <CTA />
        </Fragment>
    )
}



export default HomeView

