import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

let RootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

export const store: Store = createStore(RootReducers);

export type AppStateType =ReturnType<typeof RootReducers>



