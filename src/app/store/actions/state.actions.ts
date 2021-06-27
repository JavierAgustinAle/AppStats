import { Action } from '@ngrx/store';

export const CHANGE_ICON = '[NavBar] Change Icon';

export const GET_STATE = '[States] Get States';

export const SET_ERROR = '[Error] Set Error';
export const SET_ERROR_MSG = '[Error] Set Msg';

export class ChangeIcon implements Action {
    readonly type = CHANGE_ICON;

    constructor(public payload: string) { }
}

export class GetState implements Action {
    readonly type = GET_STATE;
}

export class SetError implements Action {
    readonly type = SET_ERROR;

    constructor(public payload: boolean) { }
}


export class SetStatus implements Action {
    readonly type = SET_ERROR_MSG;

    constructor(public payload: string) { }
}


export type Actions = ChangeIcon | SetError | SetStatus | GetState;
