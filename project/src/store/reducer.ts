import {createReducer} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {changeCity, setOffers, setNearOffers, setOffersDataLoadingStatus, setNearOffersDataLoadingStatus} from './action';
import {AuthorizationStatus} from '../const';
import { fetchOffersAction, fetchReviewsAction, fetchSelectedOfferAction, checkAuthAction } from './api-actions';
import { Review } from '../types/review';

type initialStateType = {
  city: string;
  offers: Offer[];
  selectedOffer: Offer | null;
  nearOffers: Offer[];
  reviews: Review[];
  authorizationStatus: AuthorizationStatus;
  offersDataLoadingStatus: boolean;
  nearOffersDataLoadingStatus: boolean;

  OffersByServ: Offer[];
}


const initialState: initialStateType = {
  city: 'Paris',
  offers: [],
  selectedOffer: null,
  nearOffers: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  offersDataLoadingStatus: false,
  nearOffersDataLoadingStatus: false,

  OffersByServ: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffersAction.pending , (_state, action) => {
      console.log(action)
    })
    .addCase(fetchOffersAction.fulfilled , (state, action) => {
      console.log(action);
      state.offers = action.payload;
    })
    .addCase(fetchOffersAction.rejected , (_state, action) => {
      console.log(action);
    })

    .addCase(fetchSelectedOfferAction.pending , (_state, action) => {
      console.log(action)
    })
    .addCase(fetchSelectedOfferAction.fulfilled , (state, action) => {
      console.log(action);
      state.selectedOffer = action.payload;
    })
    .addCase(fetchSelectedOfferAction.rejected , (_state, action) => {
      console.log(action);
    })

    .addCase(fetchReviewsAction.pending , (_state, action) => {
      console.log(action)
    })
    .addCase(fetchReviewsAction.fulfilled , (state, action) => {
      console.log(action);
      state.reviews = action.payload;
    })
    .addCase(fetchReviewsAction.rejected , (_state, action) => {
      console.log(action);
    })

    .addCase(checkAuthAction.pending , (_state, action) => {
      console.log(action)
    })
    .addCase(checkAuthAction.fulfilled , (state, action) => {
      console.log(action);
      state.authorizationStatus = action.payload;
    })
    .addCase(checkAuthAction.rejected , (_state, action) => {
      console.log(action);
    })

    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    // .addCase(requireAuthorization, (state, action) => {
    //   state.authorizationStatus = action.payload;
    // })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.offersDataLoadingStatus = action.payload;
    })
    .addCase(setNearOffersDataLoadingStatus, (state, action) => {
      state.nearOffersDataLoadingStatus = action.payload;
    });
});

export {reducer};
