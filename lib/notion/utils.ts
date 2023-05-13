import { User } from '@lib/types/cms';
import { orderBy, kebabCase } from 'lodash';

export const getTags = (tags: any[]) => {
    const allTags = tags.map((tag) => {
        return kebabCase(tag.name.toLowerCase());
    });
    return orderBy(allTags as string[]);
};


interface Person {
    object: string
    id: string
    name: string
    avatar_url: string
    type: string
    person: {}
}

export const getUser = (person: Person) => {
    return { name: person.name, avatar_url: person.avatar_url } as User
};  

