import { getBlogLink } from '@helpers/notion';
import { articleBySlug, getAllPublishedArticles } from '@lib/notion';
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
    return {
        title: `${article.title} | 0xpaluco`,
        description: article.summary,
        keywords: article.keywords,
        alternates: {
            canonical: `https://0xpalu.co${getBlogLink(article.slug)}`,
        },
        robots: {
            index: true,
            follow: true
        },
        openGraph: {
            type: "website",
            url: `https://0xpalu.co${getBlogLink(article.slug)}`,
            title: `${article.title} | 0xpaluco`,
            description: article.summary,
            images: [{
                url: article.cover,
            }]
        }
    };
}

export default async function Page({ params }) {
    const article = await articleBySlug(params.slug);
    return <ArticleView article={article} />
}

Page.auth = false