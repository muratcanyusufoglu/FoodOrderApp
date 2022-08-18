import { combineReducers, createStore } from "redux";
import {UserReducer} from './reducer/userReducer';


const reducers = combineReducers({
    userReducer: UserReducer,
})

const store = createStore(reducers);

export default store;
