export interface StrapiProjectData {
    data: Project[];
    meta: Meta;
}

export interface Project {
    id:         number;
    attributes: Attributes;
}

export interface Attributes {
    title:       string;
    description: string;
    repositoryUrl:        string;
    appUrl:         string;
    featured: boolean;
    coverImage: { data?: Cover };
    categories: { data: Category[] }
    publishedAt: Date;
    createdAt:   Date;
    updatedAt:   Date;
}

export interface StrapiArticleData {
    data: Article[];
    meta: Meta;
}

export interface Article {
    id:         number;
    attributes: ArticleAttributes;
}

export interface ArticleAttributes {
    title:       string;
    slug: string;
    summary: string;
    content: string;
    coverImage: { data?: Cover };
    categories: { data: Category[] }
    author: { data: Author }
    publishedAt: Date;
    createdAt:   Date;
    updatedAt:   Date;
}

export interface Author {
    id:         number;
    attributes: AuthorAttributes;
}

export interface AuthorAttributes {
    name:       string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
}


export interface StrapiCategoryData {
    data: Category[];
    meta: Meta;
}


export interface Category {
    id:         number;
    attributes: CatAttributes;
}

export interface CatAttributes {
    name:       string;
    slug:       string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    projects: { data: Project[] }
    articles: { data: Article[] }
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}


export interface Cover {
    id:         number;
    attributes: CoverAttributes;
}

export interface CoverAttributes {
    name:              string;
    alternativeText:   string;
    caption:           string;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export interface Formats {
    thumbnail: Large;
    medium:    Large;
    small:     Large;
    large:     Large;
}

export interface Large {
    name:   string;
    hash:   string;
    ext:    string;
    mime:   string;
    path:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}