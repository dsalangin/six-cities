import {createReducer} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {changeCity, setOffers, setNearOffers, requireAuthorization, setOffersDataLoadingStatus, setNearOffersDataLoadingStatus} from './action';
import {AuthorizationStatus} from '../const';

type initialStateType = {
  city: string;
  offers: Offer[];
  nearOffers: Offer[];
  authorizationStatus: AuthorizationStatus;
  offersDataLoadingStatus: boolean;
  nearOffersDataLoadingStatus: boolean;
}


const initialState: initialStateType = {
  city: 'Paris',
  offers: [],
  nearOffers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  offersDataLoadingStatus: false,
  nearOffersDataLoadingStatus: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.offersDataLoadingStatus = action.payload;
    })
    .addCase(setNearOffersDataLoadingStatus, (state, action) => {
      state.nearOffersDataLoadingStatus = action.payload;
    });
});

export {reducer};
