import { ProjectsView } from '@views/index'
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Welcome to Next.js'
};


async function getProjects() {
    const res = await fetch(`https://...`);
    const projects = await res.json();

    return projects;
}


export default async function Page() {
    const projects = await getProjects();

    return <ProjectsView projectData={projects} />
}

Page.auth = false