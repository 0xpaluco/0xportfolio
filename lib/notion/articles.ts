import { Article } from "lib/types/cms";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { getTags } from "./utils";

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})
const n2m = new NotionToMarkdown({ notionClient: notion });


const getArticlePageMetaData = (article) => {

    return {
        id: article.id,
        title: article.properties.Name.title[0].plain_text,
        tags: getTags(article.properties.Tags.multi_select),
        summary: article.properties.Summary.rich_text[0].plain_text,
        cover: article.cover[`${article.cover.type}`]?.url,
        date: article.properties['Publish date'].date.start,
        slug: article.properties.Slug.rich_text[0].plain_text,
    } as Article;
};

export const getAllPublishedArticles = async (page_size: number = 100) => {
    const articles = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
        filter: {
            property: "Status",
            status: {
                equals: "Published"
            }
        },
        sorts: [
            {
                property: "Publish date",
                direction: "descending",
            },
        ],
        page_size
    });
    const allArticles = articles.results;

    return allArticles.map((article) => {
        return getArticlePageMetaData(article);
    });
}

export const articleBySlug = async (slug: string) => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
        filter: {
            property: "Slug",
            formula: {
                string: {
                    equals: slug,
                },
            },
        },
    });

    const page = response.results[0];
    const metadata = getArticlePageMetaData(page);
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const content = n2m.toMarkdownString(mdblocks);

    return {
        ...metadata,
        content,
    } as Article;
}