import { createStore, combineReducers } from "redux"
import { navReducer } from "../reducers"
import { surahReducer } from "../reducers"
import { ToggleSidebar } from "../reducers"
const RootReducer = combineReducers({
    navReducer,
    surahReducer,
    ToggleSidebar
})

const store = createStore(RootReducer);


export default store;