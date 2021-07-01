import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../';
import {ICard} from '../../Types/Cards';

export interface IState {
  list: ICard[];
  filteredList: ICard[];
  selected?: ICard;
}

const initialState: IState = {
  list: [],
  filteredList: [],
};

const cards = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {
    updateList: (state, action) => {
      state.list = action.payload;
      state.filteredList = action.payload;
    },
    updateFilteredList: (state, action) => {
      state.filteredList = action.payload;
    },
    fillFilteredListAll: (state) => {
      state.filteredList = [...state.list]
    },
    updateSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const {updateList, updateFilteredList, updateSelected, fillFilteredListAll} = cards.actions;

export const selectCards = (state: RootState) => state.cards;

export default cards.reducer;
