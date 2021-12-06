let initialvalue = {
  posts: [],
  searchFilter: [],
  rowFilter: [],
  page: 1,
  rows: 5,
  searchActive: false,
  forwardClick: false,
};

const filterRow = (numbRows, postsdata) => {
  let filteredRowList = [];
  if (postsdata.length !== 0) {
    for (let i = 0; i < numbRows; i++) {
      if (i < postsdata.length) {
        filteredRowList.push(postsdata[i]);
      }
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

const createNext = () => {
  console.log("Reducer called!!!!");
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
      let rowFilterData = [];
      state.searchActive === true
        ? (rowFilterData = state.searchFilter)
        : (rowFilterData = filterRow(parseInt(action.payload), state.posts));
      return {
        ...state,
        rowFilter: rowFilterData,
        rows: parseInt(action.payload),
      };
    case "FORWARD":
      console.log("Going Forward");
      return {
        ...state,
        forwardClick: true,
      };
    default:
      return state;
  }
};

export default dataReducers;
