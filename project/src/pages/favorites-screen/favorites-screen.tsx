import { useEffect } from 'react';
import FavoriteOfferCard from '../../components/favourite-offer-card/favourite-offer-card';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/offers-data/selectors';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { Offer } from '../../types/offer';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import Footer from '../../components/footer/footer';
import FavoritesOffers from '../../components/favorites-offers/favorites-offers';

type FavoritesScreenProps = {
  offers: Offer[];
}

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
  // const offers = useAppSelector(getFavoriteOffers);
  // const isFavoritesFilter = offers.filter((offer) => offer.isFavorite === true);
  // const isFavoriteElements = offers.map((offer) => <FavoriteOfferCard offer={offer} key={offer.id}/>);
  console.log('### OFFERS > ', offers);

  const filteredCities = offers.map(offer => offer.city.name).filter((item, index, arr) => index === arr.indexOf(item));
  console.log(filteredCities);
  // const filteredOffers = offers.



  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchFavoriteOffersAction());
  // },[]);


  return (
    <div className="page">
      <Header />
        {offers.length === 0 ? <FavoritesEmpty /> : <FavoritesOffers cities={filteredCities} offers={offers} />}
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
