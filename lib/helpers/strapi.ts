import axios from "axios"
import { apiConfig } from "lib/strapi/api.config"
import { StrapiClient } from "lib/strapi/client"
import qs from "qs";


export const projects = async () => {
    const client = new StrapiClient(apiConfig);
    const query = qs.stringify(
        {
            populate: "*"
        }, 
        {
            encodeValuesOnly: true, // prettify URL
        });
        
        return await client.projects(query);
}

export const featuredProjects = async (limit: number) => {
    const client = new StrapiClient(apiConfig);
    
    const query = qs.stringify(
        {
            populate: "*",
            filters: {
                featured: true,
            },
            pagination: {
                limit
            }
        }, 
        {
            encodeValuesOnly: true, // prettify URL
        });

    return await client.projects(query);
}


export const articles = async () => {
    const client = new StrapiClient(apiConfig);
    const query = qs.stringify(
        {
            populate: "*"
        }, 
        {
            encodeValuesOnly: true, // prettify URL
        });
        
        return await client.articles(query);
}

export const categories = async () => {
    const client = new StrapiClient(apiConfig);
    const query = qs.stringify(
        {
            populate: "*"
        }, 
        {
            encodeValuesOnly: true, // prettify URL
        });
        
        return await client.categories(query);
}
