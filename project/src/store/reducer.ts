import {createReducer} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {changeCity, setOffers} from './action';

const initialState: {city: string; offers: Offer[]} = {
  city: 'Paris',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
