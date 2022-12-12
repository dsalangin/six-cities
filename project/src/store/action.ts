import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
// import { AuthorizationStatus } from '../const';

const changeCity = createAction<string>('offers/changeCity');
const setOffers = createAction<Offer[]>('offers/setOffers');
const setNearOffers = createAction<Offer[]>('offers/setNearOffers');
// const set = createAction<AuthorizationStatus>('user/checkAuth');
const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
const setNearOffersDataLoadingStatus = createAction<boolean>('offers/setNearOffersDataLoadingStatus');

export {changeCity, setOffers,  setOffersDataLoadingStatus, setNearOffersDataLoadingStatus, setNearOffers};
// requireAuthorization
