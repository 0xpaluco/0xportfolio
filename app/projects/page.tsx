import { getAllProjects } from '@lib/notion';
import { ProjectsView } from '@views/index'
import type { Metadata } from 'next';

export const revalidate = 60; // revalidate this page every 60 seconds

export const metadata: Metadata = {
    title: '0xPaluco | Projects',
    description: 'Things I’ve made trying to put my dent in the universe.'
};

export default async function Page() {
    const projects = await getAllProjects();
    return <ProjectsView projectData={projects} />
}

Page.auth = false