import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './slice/searchSlice'
import loginSlice from './slice/loginSlice'

const store = configureStore({
    reducer: {
        login: loginSlice,
        search: searchSlice,
    },
  })
export type RootState = ReturnType<typeof store.getState>

export default store