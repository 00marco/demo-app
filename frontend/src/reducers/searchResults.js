const setSearchResultsReducer = (state = [], action) => {
    switch(action.type){
      case "GET_SEARCH_RESULTS":
        state = action.payload;
        return state;
      default:
          return state;
    }
  }

export default setSearchResultsReducer;
