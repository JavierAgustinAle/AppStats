import { Action } from '@ngrx/store';

export const ADD_FILTER = 'Add';
export const GET_FILTER = 'Get';

export class AddFilter implements Action {
    readonly type = ADD_FILTER;

    constructor(public payload: any) { }
}

export class GetFilter implements Action {
    readonly type = GET_FILTER;
}

export type Actions = AddFilter | GetFilter;