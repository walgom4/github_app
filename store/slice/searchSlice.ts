import { createSlice } from '@reduxjs/toolkit'
// handles keywords and type of search
export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    keyword: '',
    isRepository: true,
    first: 10,
    after: '',
    hasNextPage: '',
    startCursos:'',
    repositorySearch: null,
    userSearch: null,
    currentPage: 1,
  },
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = `${action.payload}`
    },
    setIsRepository: (state, action) => {
      state.isRepository = action.payload
    },
    setFirst: (state, action) => {
      state.first = action.payload
    },
    setAfter: (state, action) => {
      state.after = action.payload
    },
    setRepositorySearch: (state, action) => {
      state.repositorySearch = action.payload;
    },
    setUserSearch: (state, action) => {
      state.userSearch = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { setKeyword, setIsRepository, setRepositorySearch, setUserSearch, setCurrentPage} = searchSlice.actions

export default searchSlice.reducer