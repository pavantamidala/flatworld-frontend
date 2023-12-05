// browseBooksSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBookFormState } from '../../interface';
// StaticBooks.ts
export const staticBooks = [
    {
      bookName: 'Book 1',
      isbn: 'ISBN001',
      category: 'Fiction',
      rowNo: 'A1',
      bookCount: 5,
      cost: '$20',
      availability: true,
    },
    {
      bookName: 'Book 2',
      isbn: 'ISBN002',
      category: 'Science',
      rowNo: 'B2',
      bookCount: 3,
      cost: '$25',
      availability: false,
    },
    {
      bookName: 'Book 3',
      isbn: 'ISBN003',
      category: 'History',
      rowNo: 'C3',
      bookCount: 8,
      cost: '$18',
      availability: true,
    },
    {
        bookName: 'Book 4',
        isbn: 'ISBN001',
        category: 'Fiction',
        rowNo: 'A1',
        bookCount: 5,
        cost: '$20',
        availability: true,
      },
      {
        bookName: 'Book 5',
        isbn: 'ISBN002',
        category: 'Science',
        rowNo: 'B2',
        bookCount: 3,
        cost: '$25',
        availability: false,
      },
      {
        bookName: 'Book 6',
        isbn: 'ISBN003',
        category: 'History',
        rowNo: 'C3',
        bookCount: 8,
        cost: '$18',
        availability: true,
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
