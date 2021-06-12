import { States } from '../interfaces/states.model';
import * as StateActions from '../actions/state.actions';


const initialState: States = {
    iconMenu: 'User'
};

export function StateReducer(state: any[] = [initialState], action: StateActions.Actions): States[] {
    switch (action.type) {
        case StateActions.CHANGE_ICON:
            return [{ iconMenu: action.payload }];
        case StateActions.GET_ICON_SELECTED:
            return state;
        default:
            return state;
    }
}

