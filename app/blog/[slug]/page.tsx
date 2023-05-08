import { articleBySlug, getAllPublishedArticles } from '@helpers/notion';
import { ArticleView } from '@views/index'
import type { Metadata } from 'next';

export const revalidate = 60; // revalidate this page every 60 seconds
export const dynamicParams = true;

export async function generateStaticParams() {
    const articles = await getAllPublishedArticles()
    return articles.map(({ slug }) => ({ params: { slug } }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
    const article = await articleBySlug(params.slug);
    return { title: article.title };
}

export default async function Page({ params }) {    
    const article = await articleBySlug(params.slug);
    return <ArticleView article={article}/>
}

Page.auth = false