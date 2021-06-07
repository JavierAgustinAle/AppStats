import { Action } from '@ngrx/store';

export const ADD_POSTS = '[POSTS] Add';
export const GET_POSTS = '[POSTS] Get';
export const FILTER_POSTS = '[POSTS] Filter';

export class AddPosts implements Action {
    readonly type = ADD_POSTS;

    constructor(public payload: any) { }
}

export class GetPosts implements Action {
    readonly type = GET_POSTS;
}

export type Actions = AddPosts | GetPosts;

