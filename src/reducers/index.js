import { combineReducers } from "redux";
import {
  FIRST_PAGE,
  LAST_PAGE,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  UPDATE_CHAPTER,
} from "../actions";

import { chapterCoverRev } from "../data";

const initialPage = 1;
const initialChapter = chapterCoverRev[0].chapter;

const pageReducer = (state = initialPage, action) => {
  switch (action.type) {
    case FIRST_PAGE:
      return 1;
    case LAST_PAGE:
      return 2;
    case NEXT_PAGE:
      return state + 1;
    case PREVIOUS_PAGE:
      return state - 1;
    default:
      return state;
  }
};

const chapterReducer = (state = initialChapter, action) => {
  switch (action.type) {
    case UPDATE_CHAPTER:
      return action.result;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  page: pageReducer,
  chapter: chapterReducer
});

export default rootReducer;