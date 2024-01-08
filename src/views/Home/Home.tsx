'use client';

import { Fragment } from 'react';
import { FeaturedWork, Hero, CTA } from './components';
import { Article, Project } from 'lib/types/cms';

interface HomeProps {
    projectData: Project[]
    articleData: Article[]
}

const HomeView = ({ projectData, articleData }: HomeProps) => {
    return (
        <Fragment>
            <Hero />
            <FeaturedWork projects={projectData} articles={articleData}/>
            <CTA />
        </Fragment>
    )
}



export default HomeView

