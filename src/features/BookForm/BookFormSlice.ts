import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBookFormState } from '../../interface';
import { v4 as uuidv4 } from 'uuid';

const initialState: IBookFormState = {
  id:"",
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
    updateId: (state) => {
      return { ...state, id: uuidv4() };
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm,updateId } = bookSlice.actions;
export default bookSlice.reducer;
