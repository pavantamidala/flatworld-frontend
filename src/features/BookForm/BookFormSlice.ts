import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBookFormState } from '../../interface';


const initialState: IBookFormState = {
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
