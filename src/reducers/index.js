import { combineReducers } from "redux";
import {
  FIRST_PAGE,
  LAST_PAGE,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  UPDATE_CHAPTER,
} from "../actions";

import { chapterCoverRev } from "../data";

// define initial states
const initialPage = 1;
const initialChapter = chapterCoverRev[0].chapter;

// define reducers
const pageReducer = (state = initialPage, action) => {
  switch (action.type) {
    case FIRST_PAGE:
      return 1;
    case NEXT_PAGE:
      return state + 1;
    case PREVIOUS_PAGE:
      return state - 1;
    case LAST_PAGE:
      return action.payload;
    default:
      return state;
  }
};

const chapterReducer = (state = initialChapter, action) => {
  switch (action.type) {
    case UPDATE_CHAPTER:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  page: pageReducer,
  chapter: chapterReducer,
});

export default rootReducer;
