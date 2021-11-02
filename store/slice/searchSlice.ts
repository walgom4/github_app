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
    startCursos:''
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
    }
  }
})

// Action creators are generated for each case reducer function
export const { setKeyword, setIsRepository } = searchSlice.actions

export default searchSlice.reducer