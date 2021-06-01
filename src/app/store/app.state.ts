import { IPost } from 'src/app/Models/IPost.model';
import { IUser } from 'src/app/Models/IUser.model';


export interface AppState {
    readonly posts: IPost[];
    readonly users: IUser[];
}
