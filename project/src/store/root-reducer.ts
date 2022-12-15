import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../const";
import { OffersData } from "./offers-data/offers-data";
import { userAction } from "./user-action/user-action";
import { userProcess } from "./user-process/user-process";

const rootReducer = combineReducers({
  [NameSpace.Data]: OffersData.reducer,
  [NameSpace.Action]: userAction.reducer,
  [NameSpace.User]: userProcess.reducer,
});

export {rootReducer};
