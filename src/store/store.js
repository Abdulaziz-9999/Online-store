import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../reducers/login/loginSlice';
import registrationReducer from '../reducers/registration/registrationSlice';
import homeReduser from '../reducers/home/homeSlice';
import carzinaReduser from '../reducers/carzina/carzinaSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    registration:registrationReducer,
    home:homeReduser,
    carzina:carzinaReduser
  },
});

export default store;
