import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoutitePrivateRoute from '../favourite-private-route/favourite-private-route';
import FavouritesScreen from '../favourites-screen/faveourites-screen';
import PropertyScreen from '../property-screen/property-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {AppRoute, AuthorizationStatus} from '../../const';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen offersCount={offersCount} />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route
          path={AppRoute.Favourites}
          element={
            <FavoutitePrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavouritesScreen />
            </FavoutitePrivateRoute>
          }
        />
        <Route path={AppRoute.Property} element={<PropertyScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
