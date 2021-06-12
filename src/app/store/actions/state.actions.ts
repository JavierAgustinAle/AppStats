import { Action } from '@ngrx/store';

export const CHANGE_ICON = '[NavBar] Change Icon';
export const GET_ICON_SELECTED = '[NavBar] Get Icon Selected';

export class ChangeIcon implements Action {
    readonly type = CHANGE_ICON;

    constructor(public payload: string) { }
}

export class GetIconSelected implements Action {
    readonly type = GET_ICON_SELECTED;
}

export type Actions = ChangeIcon | GetIconSelected;
