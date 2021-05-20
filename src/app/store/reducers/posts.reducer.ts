import { Action } from '@ngrx/store'
import * as PostsActions from '../actions/posts.action';


export const initialState = []

export function postsReducer(state: any[] = [initialState], action: PostsActions.Actions) {
    debugger;
    switch (action.type) {
        case PostsActions.ADD_POSTS:
            return [...state, action.payload];
        case PostsActions.GET_POSTS:
            return [state];
        default:
            return state;
    }
}