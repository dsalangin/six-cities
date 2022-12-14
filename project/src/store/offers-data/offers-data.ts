import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../const";
import { Offer } from "../../types/offer";
import { Review } from "../../types/review";
import {fetchOffersAction, fetchCurrentOfferAction, fetchNearOffersAction,
  fetchFavoriteOffersAction, fetchReviewsAction, changeFavoriteOfferAction} from '../api-actions';

type Data = {
  offers: Offer[];
  currentOffer: Offer | null;
  nearOffers: Offer[];
  favoriteOffers: Offer[];
  reviews: Review[];
  isOffersDataLoading: boolean;
  isCurrentOfferDataLoading: boolean;
  isNearOffersDataLoading: boolean;
  isFavoriteOffersDataLoading: boolean;
  isReviewsLoading: boolean;
  errorMessage: undefined | string;
};

const initialState: Data = {
  offers: [],
  currentOffer: null,
  nearOffers: [],
  favoriteOffers: [],
  reviews: [],
  isOffersDataLoading: false,
  isCurrentOfferDataLoading: false,
  isNearOffersDataLoading: false,
  isFavoriteOffersDataLoading: false,
  isReviewsLoading: false,
  errorMessage: undefined,
};

const OffersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeFavoriteStatus: () => {

    }
  },
  extraReducers(builder) {
    builder
    .addCase(fetchOffersAction.pending , (state,) => {
      state.isOffersDataLoading = true;
    })
    .addCase(fetchOffersAction.fulfilled , (state, action) => {
      state.isOffersDataLoading = false;
      state.offers = action.payload;
    })
    .addCase(fetchOffersAction.rejected , (state, action) => {
      state.isOffersDataLoading = false;
      state.errorMessage = action.error.message;
    })

    .addCase(fetchCurrentOfferAction.pending , (state) => {
      state.isCurrentOfferDataLoading = true;
    })
    .addCase(fetchCurrentOfferAction.fulfilled , (state, action) => {
      state.isCurrentOfferDataLoading = false;
      state.currentOffer = action.payload;
    })

    .addCase(fetchNearOffersAction.pending , (state) => {
      state.isNearOffersDataLoading = true;
    })
    .addCase(fetchNearOffersAction.fulfilled , (state, action) => {
      state.isNearOffersDataLoading = false;
      state.nearOffers = action.payload;
    })

    .addCase(fetchFavoriteOffersAction.pending , (state) => {
      state.isFavoriteOffersDataLoading = true;
    })
    .addCase(fetchFavoriteOffersAction.fulfilled , (state, action) => {
      state.isFavoriteOffersDataLoading = false;
      state.favoriteOffers = action.payload;
    })

    .addCase(fetchReviewsAction.pending , (state) => {
      state.isReviewsLoading = true;
    })
    .addCase(fetchReviewsAction.fulfilled , (state, action) => {
      state.isReviewsLoading = false;
      state.reviews = action.payload;
    })

    // Написать логику
    .addCase(changeFavoriteOfferAction.fulfilled , (state, action) => {

    })
  },

});

export {OffersData};
