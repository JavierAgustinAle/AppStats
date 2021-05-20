import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

export const ADD_POSTS = '[POSTS] Add';
export const GET_POSTS = '[POSTS] Get';

export class AddPosts implements Action {
    readonly type = ADD_POSTS

    constructor(public payload: any[]) { }
}

export class GetPosts implements Action {
    readonly type = GET_POSTS

    constructor() { }
}


export type Actions = AddPosts | GetPosts;