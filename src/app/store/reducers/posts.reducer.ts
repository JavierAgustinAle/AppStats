import { Action, createReducer, on } from '@ngrx/store';
import * as PostsActions from '../actions/posts.action';



export const defaultState = {
    posts: []
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
};


// export function postsReducer(state: any[] = [initialState], action: PostsActions.Actions) {
//     switch (action.type) {
//         case PostsActions.ADD_POSTS:
//             return [...state, action.payload];
//         case PostsActions.GET_POSTS:
//             return [state];
//         default:
//             return state;
//     }
// }


