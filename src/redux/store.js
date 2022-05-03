//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit"; // thay the cho createStore
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancements = composeWithDevTools();
const store = configureStore({ reducer: rootReducer }, composedEnhancements);

export default store;
