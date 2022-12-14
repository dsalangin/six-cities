import { NameSpace } from "../../const"
import { Offer } from "../../types/offer"
import { Review } from "../../types/review";
import { State } from "../../types/store"


const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
const getCurrentOffer = (state: State): Offer | null => state[NameSpace.Data].currentOffer;
const getNearOffers = (state: State): Offer[] => state[NameSpace.Data].nearOffers;
const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;
const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
const getCurrentOfferDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isCurrentOfferDataLoading;
const getNearOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isNearOffersDataLoading;
const getFavoriteOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFavoriteOffersDataLoading;
const getReviewsLoadingStatus = (state: State): boolean => state[NameSpace.Data].isReviewsLoading;
const getErrorMessage = (state: State): string | undefined => state[NameSpace.Data].errorMessage;

export {getOffers, getCurrentOffer, getNearOffers, getFavoriteOffers, getReviews, getOffersDataLoadingStatus,
  getCurrentOfferDataLoadingStatus, getNearOffersDataLoadingStatus, getFavoriteOffersDataLoadingStatus,
  getReviewsLoadingStatus, getErrorMessage};
