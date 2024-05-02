import { NameSpace } from '../../const';
import { Offer } from '../../types/offer';
import { Review } from '../../types/review';
import { State } from '../../types/store';


const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
const getCurrentOffer = (state: State): Offer | null => state[NameSpace.Data].currentOffer;
const getNearOffers = (state: State): Offer[] => state[NameSpace.Data].nearOffers;
const getFavoriteOffers = (state: State): Offer[] => state[NameSpace.Data].favoriteOffers;
const getReviews = (state: State): Review[] => state[NameSpace.Data].reviews;
const getDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isDataLoading;
const getErrorMessage = (state: State): string | undefined => state[NameSpace.Data].errorMessage;

export {getOffers, getCurrentOffer, getNearOffers, getFavoriteOffers, getReviews, getDataLoadingStatus, getErrorMessage};
