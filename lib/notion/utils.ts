import { orderBy, kebabCase } from 'lodash';

export const getTags = (tags: any[]) => {
    const allTags = tags.map((tag) => {
        return kebabCase(tag.name.toLowerCase());
    });
    return orderBy(allTags as string[]);
};  
