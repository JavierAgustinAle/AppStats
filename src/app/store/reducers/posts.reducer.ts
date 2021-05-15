import { createReducer, on } from '@ngrx/store';
import * as action from '../actions/posts.action';


export const initialStore = []

const _postsReducer = createReducer(
    initialStore,
    on(action.allPosts, (state) => state)
)

export function postsReducer(state, action) {
    return _postsReducer(state, action);
}