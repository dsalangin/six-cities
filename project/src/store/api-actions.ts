import {createAsyncThunk} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { Offer } from '../types/offer';
import { AppDispatch, State } from '../types/store';
import { setOffers, setOffersDataLoadingStatus, setNearOffersDataLoadingStatus} from './action';


const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(setOffers(data));
  }
);

const fetchNearOffersAction = createAsyncThunk<void, {hotelID: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async ({hotelID}, {dispatch, extra: api}) => {
    dispatch(setNearOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.NearOffers.replace('{hotelID}', hotelID));
    dispatch(setNearOffersDataLoadingStatus(false));
    dispatch(setOffers(data));
  }
);



export {fetchOffersAction, fetchNearOffersAction};
