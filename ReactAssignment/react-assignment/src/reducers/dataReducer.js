let initialvalue = {
  posts: [],
  searchFilter: [],
  rowFilter: [],
  page: 1,
  rows: 5,
  searchActive: false,
  test: [],
};

const filterRow = (numbRows, postsdata) => {
  let filteredRowList = [];
  if (postsdata.length !== 0) {
    for (let i = 0; i < numbRows; i++) {
      filteredRowList.push(postsdata[i]);
    }
  }
  return filteredRowList;
};

const filterSearch = (searchChar, originalData) => {
  let filteredSearchList = [];
  for (let i = 0; i < originalData.length; i++) {
    let searchFrom = originalData[i].body.toUpperCase();
    if (searchFrom.indexOf(searchChar.toUpperCase()) > -1) {
      filteredSearchList.push(originalData[i]);
    }
  }
  return filteredSearchList;
};

const dataReducers = (state = initialvalue, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        posts: action.payload,
        rowFilter: filterRow(state.rows, action.payload),
      };
    case "SEARCH_TEXT_CHANGE":
      return {
        ...state,
        searchFilter: filterSearch(action.payload, state.posts),
        rowFilter: filterRow(
          parseInt(state.rows),
          filterSearch(action.payload, state.posts)
        ),
        searchActive: true,
      };
    case "ROW_FILTER":
      return {
        ...state,
        rowFilter: filterRow(parseInt(action.payload), state.posts),
        rows: parseInt(action.payload),
        searchActive: false,
      };
    default:
      return state;
  }
};

export default dataReducers;
