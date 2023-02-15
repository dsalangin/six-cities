import { useEffect } from 'react';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getDataLoadingStatus, getFavoriteOffers } from '../../store/offers-data/selectors';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import Footer from '../../components/footer/footer';
import FavoritesOffers from '../../components/favorites-offers/favorites-offers';
import Spinner from '../../components/spinner/spinner';
import './favorites-screen.css';

function FavoritesScreen(): JSX.Element {
  const offers = useAppSelector(getFavoriteOffers);
  const isDataLoading = useAppSelector(getDataLoadingStatus);

  const filteredCities = offers.map((offer) => offer.city.name).filter((item, index, arr) => index === arr.indexOf(item));

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  },[]);


  return (
    <>
      {isDataLoading && <Spinner />}
      <div className="page">
        <Header />
        {offers.length === 0 ? <FavoritesEmpty /> : <FavoritesOffers cities={filteredCities} offers={offers} />}
        <Footer />
      </div>
    </>
  );
}

export default FavoritesScreen;
