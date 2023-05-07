'use client';

import { Fragment, useState } from 'react';
import { FeaturedWork, Main, CTA } from './components';
import { Article } from 'lib/types/cms';

interface HomeProps {
    projectData: any[]
    articleData: Article[]
}

const HomeView = ({ projectData, articleData }: HomeProps) => {
    return (
        <Fragment>
            <Main/>
            <FeaturedWork projects={projectData} articles={articleData}/>
            <CTA />
        </Fragment>
    )
}



export default HomeView

