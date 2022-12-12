import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { AppDispatch, State } from '../types/store';
import { setOffers, setOffersDataLoadingStatus, setNearOffersDataLoadingStatus} from './action';


//получаю список отелей
const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  }
);

//получаю выбранный отель
const fetchSelectedOfferAction = createAsyncThunk<Offer, {hotelID: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSelectedOffer',
  async ({hotelID}, {extra: api}) => {
    const {data} = await api.get<Offer>(APIRoute.Property.replace('{hotelId}', hotelID));
    return data;
  }
);

//получаю список отелей поблизости
const fetchNearOffersAction = createAsyncThunk<Offer[], {hotelID: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffers',
  async ({hotelID}, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.NearOffers.replace('{hotelID}', hotelID));
    return data;
  }
);

//список с пометкой понравился
//Коды ответов:
//— 200 ОК
//— 401 Unauthorized (в случае, если не пройдена авторизация)
const fetchFavoritesOffers = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoritesOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  }
);

//получаю список коментариев
const fetchCommentsAction = createAsyncThunk<Review[], {hotelID: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async ({hotelID}, {extra: api}) => {
    const {data} = await api.get<Review[]>(APIRoute.Reviews.replace('{hotelId}', hotelID));
    return data;
  }
);

const checkAuthAction = createAsyncThunk<AuthorizationStatus, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get(APIRoute.Login);
    return data;
  }
);



export {fetchOffersAction, fetchNearOffersAction, fetchSelectedOfferAction, fetchCommentsAction, fetchFavoritesOffers, checkAuthAction};
