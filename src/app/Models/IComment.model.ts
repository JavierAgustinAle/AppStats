import { IUser } from "./IUser.model";

export interface IComment {
    id: string;
    message: string;
    owner: IUser;
    publishDate: string;
}