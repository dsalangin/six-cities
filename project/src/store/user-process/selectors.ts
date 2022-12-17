import { AuthorizationStatus } from '../../const';
import { State } from '../../types/store';

const getUserData = (state: State) => state.USER.userData;
const getAuthStatus = (state: State): AuthorizationStatus => state.USER.authorizationStatus;

export {getUserData, getAuthStatus};
