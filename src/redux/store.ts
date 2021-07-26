import {reducer} from "./reducer";
import { combineReducers, createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localstorage-utils";

const rootReducers = combineReducers({
    reducer : reducer ,
});

export type IGlobalState = ReturnType<typeof rootReducers>;
export const store = createStore(rootReducers,loadState(),applyMiddleware(thunk));

store.subscribe(()=>{
    saveState({
        reducer: store.getState().reducer
    })
})
