import { Api } from "./api";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ARTICLES, CATEGORIES, PROJECTS } from "./api.config";
import { StrapiArticleData, StrapiCategoryData, StrapiProjectData } from "lib/types/strapi-schema";


export class StrapiClient extends Api {
 
    constructor (config: AxiosRequestConfig) {
      super(config);

      // this middleware is been called right before the http request is made.
      this.interceptors?.request.use((param: AxiosRequestConfig) => ({
      ...param,
      }));

      // this middleware is been called right before the response is get it by the method that triggers the request
      this.interceptors?.response.use((param: AxiosResponse) => ({
          ...param
      }));

      this.projects = this.projects.bind(this);
  }

  /**
   * Generates an HTTP Request to get projects.
   *
   * @returns {Promise<StrapiProjectData>} project data.
   */
     public projects = async (query: string): Promise<StrapiProjectData> => {
      return await this.get<StrapiProjectData, StrapiProjectData>(`${PROJECTS}?${query}`);
    }

    /**
   * Generates an HTTP Request to get projects.
   *
   * @returns {Promise<StrapiArticleData>} project data.
   */
     public articles = async (query: string): Promise<StrapiArticleData> => {
      return await this.get<StrapiArticleData, StrapiArticleData>(`${ARTICLES}?${query}`);
    }


    /**
   * Generates an HTTP Request to get projects.
   *
   * @returns {Promise<StrapiCategoryData>} project data.
   */
     public categories = async (query: string): Promise<StrapiCategoryData> => {
      return await this.get<StrapiCategoryData, StrapiCategoryData>(`${CATEGORIES}?${query}`);
    }

  
}