import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthStatus, getUserData } from '../../store/user-process/selectors';
import {logoutAction} from '../../store/api-actions';

function UserNav () {
  const userData = useAppSelector(getUserData);
  const isAuth = useAppSelector(getAuthStatus);

  const dispatch = useAppDispatch();
  const signOutHandler = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction);
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuth === AuthorizationStatus.Auth ?
          <>
            <li className="header__nav-item user">
              <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                  <img src={userData.avatarUrl || 'img/avatar.svg'} alt="" width="20" height="20" />
                </div>
                <span className="header__user-name user__name">{userData.email}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <a onClick={signOutHandler} className="header__nav-link" href="#">
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          </> :
          <li className="header__nav-item">
            <Link to={AppRoute.Login} className="header__nav-link">
              <span className="header__signin">Sign in</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
}

export default UserNav;
