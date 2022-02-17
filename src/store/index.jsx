import { createStore, combineReducers } from "redux"
import navReducer from "../reducers"

const RootReducer = combineReducers({
    navReducer,

})

const store = createStore(RootReducer);


export default store;