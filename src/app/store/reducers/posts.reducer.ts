import { Action } from '@ngrx/store';
import { Posts } from '../interfaces/posts.models';
import * as PostsActions from '../actions/posts.action';

const initialState: Posts = {
    id: 141410,
    stolen_location: 'San Francisco, CA, 94131',
    description: 'Bike was stolen out of secure garage parking. Bike was not locked within bike room.',
    large_img: 'https://files.bikeindex.org/uploads/Pu/437725/large_IMG_6931.JPG',
    date_stolen: '25 May 2021',
    title: 'Stolen 2018 Giant Roam 3(black and green)'
};


export function PostReducer(state: any[] = [initialState], action: PostsActions.Actions): Posts[] {
    switch (action.type) {
        case PostsActions.ADD_POSTS:
            return [...state, action.payload];
        case PostsActions.GET_POSTS:
            return state;
        default:
            return state;
    }
}

