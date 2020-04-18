import {createStore,combineReducers} from "redux";
import {Dishes} from "./dishes";
import {Leaders} from "./leaders";
import {Promotions} from "./promotions";
import {Comments} from "./comments";


export const ConfigurStore=()=>
{
    const store =createStore(
    combineReducers({
          dishes:Dishes,
          leaders:Leaders,
          comments:Comments,
          promotions:Promotions,

        })
    );
    return store;
}
