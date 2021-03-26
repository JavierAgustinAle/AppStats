import { IUser } from './IUser.model'

export interface IPost {
    text: string;
    image: string;
    likes: number;
    link: string;
    tags: string[];
    publishDate: string;
    owner: IUser;
}