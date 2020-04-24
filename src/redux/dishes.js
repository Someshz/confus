import * as ActionType from "./ActionType";

export const Dishes=(state=
{isLoading:true,
errmess:null,
dishes:[]},action)=>{
    switch(action.type){
        case ActionType.ADD_DISHES:
            return {...state,isLoading:false,errmess:null,dishes:action.payload};

        case ActionType.DISHES_LOADING:
            return {...state,isLoading:true,errmess:null,dishes:[]} ;

        case ActionType.DISHES_FAILED:
            return {...state,isLoading:false,errmess:action.payload,dishes:[]} ;

        default:
            return state;

    }
}
