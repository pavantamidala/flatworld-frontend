import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookFormState {
  bookName: string;
  isbn: string;
  category: string;
  rowNo: string;
  bookCount: number;
  cost: string;
  availability: boolean;
}

const initialState: BookFormState = {
  bookName: '',
  isbn: '',
  category: '',
  rowNo: '',
  bookCount: 0,
  cost: '',
  availability: false,
};

const bookSlice = createSlice({
  name: 'bookForm',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{ field: string; value: any }>) => {
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = bookSlice.actions;
export default bookSlice.reducer;
