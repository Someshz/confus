import * as ActionType from "./ActionType";

export const addComment=(dishId,rating,author,comment)=>
({
    type:ActionType.ADD_COMMENT,
    payload:{
        dishId:dishId,
        author:author,
        comment:comment,
        rating:rating,
    }
});