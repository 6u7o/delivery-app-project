import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slicers/user.slicer';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
