import { IFilter } from '../interfaces/filter.model';
import * as FilterActions from '../actions/filter.actions';

const initialState: IFilter = {
    filter: ''
};

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
};

export function FilterReducer(state: IFilter = initialState, action: FilterActions.Actions) {
    switch (action.type) {
        case FilterActions.ADD_FILTER:
            return newState(state, { filter: action.payload });
        case FilterActions.GET_FILTER:
            return state;
        default:
            return state;
    }
}

