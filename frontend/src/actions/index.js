export const setSearchInput = (searchInput) => {
    return {
        type: 'UPDATE_SEARCH_INPUT',
        payload: searchInput
    }
}

export const setSearchResults = (searchResults) => {
    return {
      type: 'GET_SEARCH_RESULTS',
      payload: searchResults
    }
  }
