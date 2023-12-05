import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import bookReducer from '../features/BookForm/BookFormSlice'
import browseBooksReducer from '../features/BrowseBooks/BrowsBooksSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bookForm: bookReducer,
    browseBooks: browseBooksReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
