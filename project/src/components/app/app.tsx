import MainScreen from '../main-screen/main-screen';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import PropertyScreen from '../property-screen/property-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return (
    <>
      <MainScreen offersCount={offersCount}/>
      <LoginScreen/>
      <FavoritesScreen/>
      <PropertyScreen/>
      <NotFoundScreen/>
    </>
  );
}

export default App;
