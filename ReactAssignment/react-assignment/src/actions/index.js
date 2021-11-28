import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const changeRowsToDisplay = (no_rows) => {
  return { type: "ROW_FILTER", payload: no_rows };
};

export const searchValue = (search_Char) => {
  console.log("i am here", search_Char);
  return { type: "SEARCH_TEXT_CHANGE", payload: search_Char };
};
