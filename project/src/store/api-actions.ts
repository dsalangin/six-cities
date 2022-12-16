import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { dropToken, saveToken } from '../services/token';
import {changeFavoriteStatus} from './offers-data/offers-data';
import { AppDispatch, State } from '../types/store';
import { Offer } from '../types/offer';
import { Review } from '../types/review';
import { FavoriteOfferData } from '../types/favorite-offer-data';
import { ReviewData } from '../types/review-data';
import { UserData } from '../types/user-data';
import { AuthData } from '../types/auth-data';

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
const fetchCurrentOfferAction = createAsyncThunk<Offer, {hotelId: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSelectedOffer',
  async ({hotelId}, {extra: api}) => {
    const {data} = await api.get<Offer>(APIRoute.Property.replace('{hotelId}', hotelId));
    return data;
  }
);

//получаю список отелей поблизости
const fetchNearOffersAction = createAsyncThunk<Offer[], {hotelId: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffers',
  async ({hotelId}, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.NearOffers.replace('{hotelId}', hotelId));
    return data;
  }
);

//список с пометкой понравился
//Коды ответов:
//— 200 ОК
//— 401 Unauthorized (в случае, если не пройдена авторизация)
const fetchFavoriteOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoritesOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.FavoriteOffers);
    return data;
  }
);

//POST /favorite/: hotel_id/: status
// Изменение статуса избранного у предложения. В теле ответа приходят данные по отелю
// с актуальным состоянием поля is_favorite
// Параметры:
// — :hotel_id — ID отеля, который нужно убрать/добавить в избранное
// — :status — значения могут быть 1 или 0. 1 добавляет отель в избранное, 0 удаляеt
// Request:
// — URL: POST /favorite/42/1
// Response:
// — Status: 200 OK
// —Body:структура Hotel с актуальным состоянием поля isfavorite
const changeFavoriteOfferAction = createAsyncThunk<Offer, FavoriteOfferData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/changeFavoriteOffer',
  async ({hotelId, isFavorite}, {dispatch ,extra: api}) => {
    const {data} = await api.post<Offer>(APIRoute.FavoriteOffer.replace('{hotel_id}', String(hotelId)).replace('{status}', String(Number(isFavorite))));
    dispatch(changeFavoriteStatus({hotelId, isFavorite}));
    return data;
  }
);


//получаю список коментариев
const fetchReviewsAction = createAsyncThunk<Review[], {hotelId: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async ({hotelId}, {extra: api}) => {
    const {data} = await api.get<Review[]>(APIRoute.Reviews.replace('{hotelId}', hotelId));
    return data;
  }
);

// POST /comments/: hotel_id
const addReviewAction = createAsyncThunk<Review, ReviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/addReview',
  async ({rating, comment, hotelId}, {extra: api}) => {
    const {data} = await api.post<Review>(APIRoute.Reviews.replace('{hotel_id}', hotelId), {rating, comment});
    return data;
  }
);


//проверка авторизации
const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  }
);

const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export {fetchOffersAction, fetchNearOffersAction, fetchCurrentOfferAction,
  fetchReviewsAction, fetchFavoriteOffersAction, checkAuthAction, changeFavoriteOfferAction,
  addReviewAction, loginAction, logoutAction
};
