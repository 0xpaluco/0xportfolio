
import qs from "qs";
import { PathLike } from "fs";

export const PROJECTS = "/api/projects";
export const ARTICLES = "/api/articles";
export const CATEGORIES = "/api/categories";



export const apiConfig = {
    returnRejectedPromiseOnError: true,
    withCredentials: true,
    timeout: 30000,
    baseURL: process.env.STRAPI_HOST_URL || "http://localhost:5000",
    headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    paramsSerializer: (params: PathLike) => qs.stringify(params, { indices: false }),
}