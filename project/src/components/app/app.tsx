import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritePrivateRoute from '../favorite-private-route/favorite-private-route';
import FavoritesScreen from '../../pages/favorites-screen/faveorites-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import {AppRoute, AuthorizationStatus} from '../../const';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <FavoritePrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesScreen />
            </FavoritePrivateRoute>
          }
        />
        <Route path={`${AppRoute.Property}/:id`} element={<PropertyScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
