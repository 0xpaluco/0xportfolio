// import axios from "axios"
// import { apiConfig } from "lib/strapi/api.config"
// import { StrapiClient } from "lib/strapi/client"
// import { Category, CategoryContent } from "lib/types/strapi-schema";
// import qs from "qs";
// import { concat, map, flatten } from 'lodash';


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


// export const articles = async () => {
//     const client = new StrapiClient(apiConfig);
//     const query = qs.stringify(
//         {
//             populate: "*",
//             sort: ['publishedAt:desc'],
//         }, 
//         {
//             encodeValuesOnly: true, // prettify URL
//         });
        
//         return await client.articles(query);
// }

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