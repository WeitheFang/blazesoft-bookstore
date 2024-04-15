import { combineReducers } from "redux";
import { bookReducer } from "./book/bookReducer";

export const rootReducers = combineReducers({
  bookReducer: bookReducer,
});
