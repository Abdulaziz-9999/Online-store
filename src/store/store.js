import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../reducers/login/loginSlice';
import registrationReducer from '../reducers/registration/registrationSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    registration:registrationReducer
  },
});

export default store;
