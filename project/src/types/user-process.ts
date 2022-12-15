import { AuthorizationStatus } from "../const";
import { UserData } from "./user-data";

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
};

export type {UserProcess};
