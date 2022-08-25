import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeEmail: (state, { payload }) => {
      state.email = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeEmail } = counterSlice.actions;

export default counterSlice.reducer;
