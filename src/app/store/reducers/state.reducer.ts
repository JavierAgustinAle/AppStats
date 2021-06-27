import { States } from '../interfaces/states.model';
import * as StateActions from '../actions/state.actions';


const initialState: States = {
    iconMenu: 'user',
    errorStatus: false,
    errorMsg: ''
};

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
};


export function StateReducer(state: States = initialState, action: StateActions.Actions) {
    switch (action.type) {
        case StateActions.GET_STATE:
            return state;
        case StateActions.CHANGE_ICON:
            return newState(state, { iconMenu: action.payload });
        case StateActions.SET_ERROR:
            return newState(state, { errorStatus: action.payload });
        case StateActions.SET_ERROR_MSG:
            return newState(state, { errorMsg: action.payload });
        default:
            return state;
    }
}

