import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';

const changeCity = createAction<string>('offers/changeCity');
const setOffers = createAction<Offer[]>('offers/setOffers');

export {changeCity, setOffers};
