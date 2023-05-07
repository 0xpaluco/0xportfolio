import { ProjectDetailView } from '@views/index'
import type { Metadata } from 'next';


export const dynamicParams = true;

export async function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }]
}

async function getProject(params) {
    const res = await fetch(`https://.../posts/${params.id}`);
    const data = await res.json();
    return data.project;
}


export async function generateMetadata({ params }): Promise<Metadata> {
    const project = await getProject(params.id);
    
    return { title: project.title };
}


export default async function Page({ params }) {
    const project = await getProject(params);

    return <ProjectDetailView project={project} />
}

Page.auth = false