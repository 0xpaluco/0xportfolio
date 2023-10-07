import { getProjectLink } from '@helpers/notion';
import { getAllProjects, projectBySlug } from '@lib/notion';
import { ProjectDetailView } from '@views/index'
import type { Metadata } from 'next';

export const revalidate = 60; // revalidate this page every 60 seconds
export const dynamicParams = true;

export async function generateStaticParams() {
    const projects = await getAllProjects()
    return projects.map(({ slug }) => ({ params: { slug } }));
}


export async function generateMetadata({ params }): Promise<Metadata> {
    const project = await projectBySlug(params.slug);
    return {
        title: `${project.title} | 0xpaluco`,
        description: project.description,
        openGraph: {
            type: "website",
            url: `https://0xpalu.co${getProjectLink(project.slug)}`,
            title: `${project.title} | 0xpaluco`,
            description: project.description,
            images: [{
                url: project.cover,
            }]
        },
        alternates: {
            canonical: `https://0xpalu.co${getProjectLink(project.slug)}`,
        },
        robots: {
            index: true,
            follow: true
        },
    };
}


export default async function Page({ params }) {
    const project = await projectBySlug(params.slug);
    return <ProjectDetailView project={project} />
}

Page.auth = false