import {createStore,combineReducers,applyMiddleware} from "redux";
import {Dishes} from "./dishes";
import {Leaders} from "./leaders";
import {Promotions} from "./promotions";
import {Comments} from "./comments";
import logger from "redux-logger";
import thunk from "redux-thunk";


export const ConfigurStore=()=>
{
    const store =createStore(
    combineReducers({
          dishes:Dishes,
          leaders:Leaders,
          comments:Comments,
          promotions:Promotions,

        }),applyMiddleware(thunk,logger)
    );
    return store;
}
