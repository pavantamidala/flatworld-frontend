// browseBooksSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBookFormState } from '../../interface';
import { v4 as uuidv4 } from 'uuid';

// StaticBooks.ts
export const staticBooks = [
    {
        id:uuidv4(),
      bookName: 'Book 1',
      isbn: 'ISBN001',
      category: 'Fiction',
      rowNo: 'A1',
      bookCount: 5,
      cost: '$20',
      availability: true,
    },
    {
        id:uuidv4(),
      bookName: 'Book 2',
      isbn: 'ISBN002',
      category: 'Science',
      rowNo: 'B2',
      bookCount: 3,
      cost: '$25',
      availability: false,
    },
 
    // Add more books as needed
    // ...
  ];
  


interface BrowseBooksState {
  books: IBookFormState[];
}

const initialState: BrowseBooksState = {
  books: staticBooks,
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
