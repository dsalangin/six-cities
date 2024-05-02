import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

type UserActionState = {
  city: string;
}

const initialState: UserActionState = {
  city: 'Paris',
};

const userAction = createSlice({
  name: NameSpace.Action,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    }
  }
});

export {userAction};
export const {changeCity} = userAction.actions;
