import { createStore, combineReducers } from "redux"
import { navReducer } from "../reducers"
import { surahReducer } from "../reducers"
const RootReducer = combineReducers({
    navReducer,
    surahReducer
})

const store = createStore(RootReducer);


export default store;