import { Action } from '@ngrx/store';
import { Posts } from '../interfaces/posts.models';
import * as PostsActions from '../actions/posts.action';

const initialState: Posts = {
    id: 141410,
    stolen_location: 'San Francisco, CA, 94131',
    manufacturer_name: 'Specialized',
    date_stolen: '25 May 2021',
    title: 'Stolen 2018 Giant Roam 3(black and green)',
    serial: 'WSBC618204519N',
    url: 'https://bikeindex.org/bikes/1269089',
    status: 'stolen',
    stolen_coordinates: [53.54, -113.52],
    large_img: 'https://www.tretwerk.net/out/pictures/magictoolbox_cache/8c95d73fec130487c102a73bf1ab42ce/1/5/154c7b6f47679a6189a7b0485e8fab3d/thumb745x470/3800130063/MGI2102104114-15_Roam_2_1.jpg'
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

