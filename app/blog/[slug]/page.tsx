import { ArticleView } from '@views/index'
import type { Metadata } from 'next';


export const dynamicParams = true;

export async function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }]
}

async function getArticle(params) {
    const res = await fetch(`https://.../posts/${params.id}`);
    const data = await res.json();
    return data.project;
}


export async function generateMetadata({ params }): Promise<Metadata> {
    const article = await getArticle(params.id);
    
    return { title: article.title };
}


export default async function Page({ params }) {
    const article = await getArticle(params);

    return <ArticleView article={article} />
}

Page.auth = false