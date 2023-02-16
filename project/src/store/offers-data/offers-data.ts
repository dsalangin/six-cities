import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import {fetchOffersAction, fetchCurrentOfferAction, fetchNearOffersAction,
  fetchFavoriteOffersAction, fetchReviewsAction, changeFavoriteOfferAction,
  addReviewAction} from '../api-actions';

type Data = {
  offers: Offer[];
  currentOffer: Offer | null;
  nearOffers: Offer[];
  favoriteOffers: Offer[];
  reviews: Review[];
  isDataLoading: boolean;
  errorMessage: undefined | string;
};

const initialState: Data = {
  offers: [],
  currentOffer: null,
  nearOffers: [],
  favoriteOffers: [],
  reviews: [],
  isDataLoading: false,
  errorMessage: undefined,
};

const OffersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending , (state,) => {
        state.isDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled , (state, action) => {
        state.isDataLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected , (state, action) => {
        state.isDataLoading = false;
        state.errorMessage = action.error.message;
      })

      .addCase(fetchCurrentOfferAction.pending , (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchCurrentOfferAction.fulfilled , (state, action) => {
        state.isDataLoading = false;
        state.currentOffer = action.payload;
      })
      .addCase(fetchCurrentOfferAction.rejected , (state, action) => {
        state.isDataLoading = false;
        state.errorMessage = action.error.message;
      })

      .addCase(fetchNearOffersAction.pending , (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchNearOffersAction.fulfilled , (state, action) => {
        state.isDataLoading = false;
        state.nearOffers = action.payload;
      })
      .addCase(fetchNearOffersAction.rejected , (state, action) => {
        state.isDataLoading = false;
        state.errorMessage = action.error.message;
      })

      .addCase(fetchFavoriteOffersAction.pending , (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled , (state, action) => {
        state.isDataLoading = false;
        state.favoriteOffers = action.payload;
      })
      .addCase(fetchFavoriteOffersAction.rejected , (state, action) => {
        state.isDataLoading = false;
        state.errorMessage = action.error.message;
      })

      .addCase(fetchReviewsAction.pending , (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled , (state, action) => {
        state.isDataLoading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.rejected , (state, action) => {
        state.isDataLoading = false;
        state.errorMessage = action.error.message;
      })

      .addCase(addReviewAction.pending , (state, action) => {
        state.isDataLoading = true;
      })
      .addCase(addReviewAction.fulfilled, (state, action) => {
        state.isDataLoading = false;
        state.reviews = action.payload;
      })
      .addCase(addReviewAction.rejected , (state, action) => {
        state.isDataLoading = false;
        state.errorMessage = action.error.message;
      })

      .addCase(changeFavoriteOfferAction.fulfilled , (state, action) => {
        state.favoriteOffers = action.payload;
      })
      .addCase(changeFavoriteOfferAction.rejected , (state, action) => {
        state.errorMessage = action.error.message;
      });
  },

});

export {OffersData};
// export const {changeFavoriteStatus} = OffersData.actions;
