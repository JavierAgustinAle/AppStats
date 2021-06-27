import { IPost } from 'src/app/Models/IPost.model';
import { IFilter } from '../store/interfaces/filter.model';
import { States } from '../store/interfaces/states.model';


export interface AppState {
    readonly posts: IPost[];
    readonly filters: IFilter;
    readonly states: States;
}
