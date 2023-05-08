import { getAllProjects, projectBySlug } from '@helpers/notion';
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
    return { title: project.title };
}


export default async function Page({ params }) {
    const project = await projectBySlug(params.slug);
    return <ProjectDetailView project={project} />
}

Page.auth = false