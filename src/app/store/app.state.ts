import { IPost } from 'src/app/Models/IPost.model';
import { IFilter } from '../store/interfaces/filter.model';


export interface AppState {
    readonly posts: IPost[];
    readonly filters: IFilter;
}
