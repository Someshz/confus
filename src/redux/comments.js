import * as ActionType from "./ActionType";

export const Comments=(state=
    {isLoading:true,
    errmess:null,
    comments:[]},action)=>{
    switch(action.type){
        case ActionType.ADD_COMMENT:
            var comment=action.payload;
            comment.id=state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return state.comments.concat(comment)

        case ActionType.ADD_COMMENTS:
            return {...state,isLoading:false,errmess:null,comments:action.payload};
    
        case ActionType.COMMENTS_FAILED:
            return {...state,isLoading:false,errmess:action.payload,comments:[]} ;
        
        default:
            return state;

    }
}

  