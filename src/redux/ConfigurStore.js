import {createStore} from "redux";
import {reducer,initialState} from "./reducer";


export const ConfigurStore=()=>
{
    const store =createStore(reducer,initialState);
    return store;
}
