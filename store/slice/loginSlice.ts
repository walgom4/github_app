import { createSlice } from '@reduxjs/toolkit'
// handles keywords and type of search
export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    code: '',
    token: '',
    error: false,
    login: '',
    avatar: '',
    name: '',
    bio: '',
  },
  reducers: {
    setCode: (state, action) => {
      state.code = `${action.payload}`
    },
    setToken: (state, action) => {
      state.token = `${action.payload}`
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setLogin: (state, action) => {
      state.login = `${action.payload}`
    },
    setAvatar: (state, action) => {
      state.avatar = `${action.payload}`
    },
    setName: (state, action) => {
      state.name = `${action.payload}`
    },
    setBio: (state, action) => {
      state.bio = `${action.payload}`
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCode, setToken, setError, setLogin, setAvatar, setName, setBio } = loginSlice.actions

export default loginSlice.reducer