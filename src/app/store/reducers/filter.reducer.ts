import { IFilter } from '../interfaces/filter.model';
import * as FilterActions from '../actions/filter.actions';

const initialState: IFilter = {
    filter: ''
};

export function FilterReducer(state: any[] = [initialState], action: FilterActions.Actions): IFilter[] {
    switch (action.type) {
        case FilterActions.ADD_FILTER:
            return [{ filter: action.payload }];
        case FilterActions.GET_FILTER:
            return state;
        default:
            return state;
    }
};
