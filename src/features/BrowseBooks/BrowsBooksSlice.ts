// browseBooksSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBookFormState } from '../../interface';



interface BrowseBooksState {
  books: IBookFormState[];
}

const initialState: BrowseBooksState = {
  books: [],
};

const browseBooksSlice = createSlice({
  name: 'browseBooks',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<IBookFormState>) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = browseBooksSlice.actions;
export default browseBooksSlice.reducer;
