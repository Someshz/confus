import * as ActionType from "./ActionType";

export const Promotions=(state=
    {isLoading:true,
    errmess:null,
    promotions:[]},action)=>{
        switch(action.type){
            case ActionType.ADD_PROMOS:
                return {...state,isLoading:false,errmess:null, promotions:action.payload};
    
            case ActionType.PROMOS_LOADING:
                return {...state,isLoading:true,errmess:null, promotions:[]} ;
    
            case ActionType.PROMOS_FAILED:
                return {...state,isLoading:false,errmess:action.payload, promotions:[]} ;
    
            default:
                return state;
    
        }
    }
    