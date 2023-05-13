import { Article } from "lib/types/cms";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { getTags, getUser } from "./utils";
import { getCategories } from "./categories";

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})
const n2m = new NotionToMarkdown({ notionClient: notion });

const getArticlePageMetaData = async (article) => {
    // console.log(article.properties.Categories.relation)

    const cats = await getCategories(article.properties.Categories.relation)

    return {
        id: article.id,
        title: article.properties.Name.title[0].plain_text,
        tags: cats,
        summary: article.properties.Summary.rich_text[0].plain_text,
        cover: article.cover[`${article.cover.type}`]?.url,
        date: article.properties['Publish date'].date.start,
        slug: article.properties.Slug.rich_text[0].plain_text,
        author: getUser(article.properties.Writer.people[0])
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

    const articleList: Article[] = []
    for (let i = 0; i < allArticles.length; i++) {
        const article = allArticles[i];
        articleList.push(await getArticlePageMetaData(article))
    }
    return articleList
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
    const metadata = await getArticlePageMetaData(page);
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const content = n2m.toMarkdownString(mdblocks);

    return {
        ...metadata,
        content,
    } as Article;
}