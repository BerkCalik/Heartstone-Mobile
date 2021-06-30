import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import logger from 'redux-logger';
import cards from './Slices/Cards';

const reducer = combineReducers({
  cards,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
