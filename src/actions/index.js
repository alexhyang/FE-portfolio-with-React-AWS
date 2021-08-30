// define read-only action types
export const FIRST_PAGE = "FIRST_PAGE";
export const LAST_PAGE = "LAST_PAGE";
export const PREVIOUS_PAGE = "PREVIOUS_PAGE";
export const NEXT_PAGE = "NEXT_PAGE";

export const UPDATE_CHAPTER = "UPDATE_CHAPTER";

// define action creators
export const firstPage = () => ({
  type: FIRST_PAGE,
});

export const previousPage = () => ({
  type: PREVIOUS_PAGE,
});

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const lastPage = (payload) => ({
  type: LAST_PAGE,
  payload
});

export const updateChapter = (payload) => ({
  type: UPDATE_CHAPTER,
  payload,
});
