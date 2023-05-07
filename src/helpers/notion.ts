
import qs from "qs";
import { concat, map, flatten, kebabCase } from 'lodash';

import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

import { Article } from "lib/types/cms";

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

const n2m = new NotionToMarkdown({ notionClient: notion });

const getPageMetaData = (post) => {
    const getTags = (tags) => {
      const allTags = tags.map((tag) => {
        return kebabCase(tag.name);
      });
      return allTags as string[];
    };

    return {
      id: post.id,
      title: post.properties.Name.title[0].plain_text,
      tags: getTags(post.properties.Tags.multi_select),
      summary: post.properties.Summary.rich_text[0].plain_text,
      banner: post.properties.Banner.files[0].file.url,
      date: getToday(post.properties['Publish date'].date.start),
      slug: post.properties.Slug.rich_text[0].plain_text,
    } as Article;
  };

  function getToday (datestring) {
    const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    let date = new Date();
  
    if (datestring) {
      date = new Date(datestring);
      return date;
    }
  
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    let today = `${month} ${day}, ${year}`;
  
    return today;
  };

export const getAllPublishedArticles = async () => {
    
    
    const posts = await notion.databases.query({
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
      });
    const allPosts = posts.results;
    
    return allPosts.map((post) => {
        return getPageMetaData(post);
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
      const metadata = getPageMetaData(page);
      const mdblocks = await n2m.pageToMarkdown(page.id);
      const mdString = n2m.toMarkdownString(mdblocks);

      return {
        ...metadata,
        content: mdString,
      } as Article;
}

// export const newestArticles = async (limit: number) => {
//     const client = new StrapiClient(apiConfig);
    
//     const query = qs.stringify(
//         {
//             populate: "*",
//             pagination: {
//                 limit
//             },
//             sort: ['publishedAt:desc'],
//         }, 
//         {
//             encodeValuesOnly: true, // prettify URL
//         });

//     return await client.articles(query);
// }

// export const articlesBySlug = async (slug: string) => {
//     const client = new StrapiClient(apiConfig);
//     const query = qs.stringify(
//         {
//             populate: '*',
//             filters: {
//                 slug: { $eq: slug }
//             },
//             pagination: { limit: 1 }
//         }, 
//         {
//             encodeValuesOnly: true, // prettify URL
//         });
        
//     return await client.articles(query);
// }


// export const projects = async () => {
//     const client = new StrapiClient(apiConfig);
//     const query = qs.stringify(
//         {
//             populate: "*",
//             sort: ['slug:asc'],
//         }, 
//         {
//             encodeValuesOnly: true, // prettify URL
//         });
        
//         return await client.projects(query);
// }

// export const projectsBySlug = async (slug: string) => {
//     const client = new StrapiClient(apiConfig);
//     const query = qs.stringify(
//         {
//             populate: '*',
//             filters: {
//                 slug: { $eq: slug }
//             },
//             pagination: { limit: 1 }
//         }, 
//         {
//             encodeValuesOnly: true, // prettify URL
//         });
        
//     return await client.projects(query);
// }

// export const projectsforCategory = async (categorySlug: string) => {
//     const client = new StrapiClient(apiConfig);
//     const query = qs.stringify(
//         {
//             populate: "*",
//             filters: {
//                 categories: {
//                     slug: { $eq: categorySlug }
//                 },
//             },
//         }, 
//         {
//             encodeValuesOnly: true, // prettify URL
//         });
        
//         return await client.projects(query);
// }

// export const featuredProjects = async (limit: number) => {
//     const client = new StrapiClient(apiConfig);
    
//     const query = qs.stringify(
//         {
//             populate: "*",
//             filters: {
//                 featured: true,
//             },
//             pagination: {
//                 limit
//             },
//             sort: ['slug:asc'],
//         }, 
//         {
//             encodeValuesOnly: true, // prettify URL
//         });

//     return await client.projects(query);
// }




// export const articlesforCategory = async (categorySlug: string) => {
//     const client = new StrapiClient(apiConfig);
//     const query = qs.stringify(
//         {
//             populate: "*",
//             filters: {
//                 categories: {
//                     slug: { $eq: categorySlug }
//                 },
//             },
//         }, 
//         {
//             encodeValuesOnly: true, // prettify URL
//         });
        
//         return await client.articles(query);
// }

// export const categories = async () => {
//     const client = new StrapiClient(apiConfig);
//     const query = qs.stringify(
//         {
//             populate: "*"
//         }, 
//         {
//             encodeValuesOnly: true, // prettify URL
//         });
        
//         return await client.categories(query);
// }

// export const categoriesBySlug = async (slug: string) => {
//     const client = new StrapiClient(apiConfig);
//     const query = qs.stringify(
//         {
//             populate: {
//                 articles: { populate: '*' },
//                 projects: { populate: '*' },
//                 coverImage: { populate: '*' },
//             },
//             filters: {
//                 slug: { $eq: slug }
//             },
//             pagination: { limit: 1 }
//         }, 
//         {
//             encodeValuesOnly: true, // prettify URL
//         });
        
//     return await client.categories(query);
// }

// export const mergeData = async (category: Category) => {
//     const contentProjects = map(category.attributes.projects.data, (_p) => {
//         return {
//           id: `project-${_p.id}`,
//           attributes: {
//             title: _p.attributes.title,
//             slug: _p.attributes.slug,
//             description: _p.attributes.description,
//             categories: _p.attributes.categories,
//             type: 'project',
//             repositoryUrl: _p.attributes.repositoryUrl,
//             appUrl: _p.attributes.appUrl,
//             articleUrl: "",
//           }
//         } as CategoryContent
//       })

//     const contentArticle = map(category.attributes.articles.data, (_a) => {
//         return {
//             id: `article-${_a.id}`,
//             attributes: {
//             title: _a.attributes.title,
//             slug: _a.attributes.slug,
//             description: _a.attributes.summary,
//             categories: _a.attributes.categories,
//             type: 'article',
//             repositoryUrl: "",
//             appUrl: "",
//             articleUrl: `/${_a.attributes.slug}`,
//             }
//         } as CategoryContent
//     })

//     return flatten([contentArticle, contentProjects]).sort().reverse() as CategoryContent[]
// }