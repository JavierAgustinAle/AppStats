import { createAction, props } from '@ngrx/store';

export const ADD_POSTS = '[POST] Add';
export const GET_POSTS = '[GET] Get';

export const AddPostsAction = createAction(
    '[POSTS] Add',
    props<{ posts: any[] }>()
);

// export class GetPostsAction implements Action {
//     readonly type = GET_POSTS

//     constructor() { }
// }


// export type Actions = AddPostsAction | GetPostsAction;