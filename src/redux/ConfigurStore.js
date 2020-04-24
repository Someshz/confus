import {createStore,combineReducers,applyMiddleware} from "redux";
import {Dishes} from "./dishes";
import {Leaders} from "./leaders";
import {Promotions} from "./promotions";
import {Comments} from "./comments";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {createForms} from "react-redux-form";
import {InitialFeedback} from "./forms";


export const ConfigurStore=()=>
{
    const store =createStore(
    combineReducers({
          dishes:Dishes,
          leaders:Leaders,
          comments:Comments,
          promotions:Promotions,
          ...createForms({
              feedback:InitialFeedback,
          })
        }),applyMiddleware(thunk,logger)
    );
    return store;
}


