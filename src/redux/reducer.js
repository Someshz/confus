import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';



export const initialState={
    dishes:DISHES,
    promotions:PROMOTIONS,
    leaders:LEADERS,
    comments:COMMENTS,

}

export const reducer=(state=initialState,action)=>{
    return state;
} 