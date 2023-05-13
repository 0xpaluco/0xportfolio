import { getCategoryLink } from '@helpers/notion';
import { categoryBySlug, getAllCategories } from '@lib/notion/categories';
import { CategoryView } from '@views/index';
import type { Metadata } from 'next';

export const revalidate = 60; // revalidate this page every 60 seconds
export const dynamicParams = true;

export async function generateStaticParams() {
    const categories = await getAllCategories()
    return categories.map(({ slug }) => ({ params: { slug } }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
    const category = await categoryBySlug(params.slug);
    return {
        title: category.title,
        description: category.description,
        openGraph: {
            type: "website",
            url: `https://0xpalu.co${getCategoryLink(category.slug)}`,
            title: category.title,
            description: category.description,
        }
    };
}

export default async function Page({ params }) {
    const category = await categoryBySlug(params.slug);
    return <CategoryView category={category} contentList={[]} />
}
