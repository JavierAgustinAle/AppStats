import { Action } from '@ngrx/store';
import { Posts } from '../interfaces/posts.models';
import * as PostsActions from '../actions/posts.action';

const initialState: Posts = {
    id: 141410,
    address: 'San Francisco, CA, 94131',
    description: 'Bike was stolen out of secure garage parking. Bike was not locked within bike room.',
    media: {
        image_url: 'https://files.bikeindex.org/uploads/Pu/437725/large_IMG_6931.JPG',
        image_url_thumb: 'https://files.bikeindex.org/uploads/Pu/437725/small_IMG_6931.JPG'
    },
    occurred_at: '25 May 2021',
    source: {
        name: 'BikeIndex.org',
        html_url: 'https://bikeindex.org/bikes/513111',
        api_url: 'https://bikeindex.org/api/v1/bikes/513111'
    },
    title: 'Stolen 2018 Giant Roam 3(black and green)',
    type: 'Theft',
    updated_at: 1622073875
};

export function PostReducer(state: any[] = [initialState], action: PostsActions.Actions): Posts[] {
    switch (action.type) {
        case PostsActions.ADD_POSTS:
            return [...state, action.payload];
        default:
            return state;
    }
}

