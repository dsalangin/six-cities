import {useEffect, useMemo, useState} from 'react';
import OfferList from '../../components/offer-list/offer-list';
import {Offer} from '../../types/offer';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import {AuthorizationStatus, CITIES, SortType} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import SortOptions from '../../components/sort-options/sort-options';
import Header from '../../components/header/header';
import MainEmpty from '../../components/main-empty/main-empty';
import { getCity } from '../../store/user-action/selectors';
import { getDataLoadingStatus, getOffers } from '../../store/offers-data/selectors';
import { fetchFavoriteOffersAction, fetchOffersAction } from '../../store/api-actions';
import { useLocation } from 'react-router-dom';
import { changeCity } from '../../store/user-action/user-action';
import Spinner from '../../components/spinner/spinner';
import { getAuthStatus } from '../../store/user-process/selectors';
import './main-screen.css';

function MainScreen (): JSX.Element {

  const [selectedOffer, setSelectedOffer] = useState<Offer>();
  const [currentSort, setCurrentSort] = useState<string>('Popular');
  const [sortedOffers, setSortedOffers] = useState<Offer[]>([]);

  const isAuth = useAppSelector(getAuthStatus);
  const offersFromStore = useAppSelector(getOffers);
  const currentCity = useAppSelector(getCity);
  const isDataLoading = useAppSelector(getDataLoadingStatus);
  const [filteredCity] = CITIES.filter((city) => city.name === currentCity);
  const filteredOffers = useMemo(() => offersFromStore.filter((offer) => offer.city.name === currentCity), [offersFromStore, currentCity]);
  const isMainNotEmpty = filteredOffers.length;


  const dispatch = useAppDispatch();
  const {hash} = useLocation();
  if(hash) {
    const cityFromLocation = hash.slice(1).toLowerCase();
    const shouldChangeCity = CITIES.find((city) => city.name.toLowerCase() === cityFromLocation) && cityFromLocation !== currentCity.toLowerCase();
    if(shouldChangeCity) {
      dispatch(changeCity(cityFromLocation));
    }
  }

  useEffect(() => {
    dispatch(fetchOffersAction());
    isAuth === AuthorizationStatus.Auth && dispatch(fetchFavoriteOffersAction());
  }, []);

  const changeSetSort = (type: string) => {
    setCurrentSort(type);
  };

  const sortingOffers = (copyOffers: Offer[]) => {
    switch (currentSort) {
      case SortType.PRICELOWTOHIGHT:
        return copyOffers.sort((a, b) => a.price - b.price);
      case SortType.PRICEHIGHTTOLOW:
        return copyOffers.sort((a, b) => b.price - a.price);
      case SortType.RAITING:
        return copyOffers.sort((a, b) => b.rating - a.rating);
      case SortType.POPULAR:
        return copyOffers;
    }
  };

  useEffect(() => {
    const sorted = sortingOffers([...filteredOffers]);
    setSortedOffers(sorted ?? []);
  }, [currentSort, filteredOffers]);

  const onListItemHover = (listItemId: number) => {
    const currentPoint = filteredOffers.find((offer) => offer.id === listItemId);
    setSelectedOffer(currentPoint);
  };

  return (
    <>
      {isDataLoading && <Spinner/>}
      <div className="page page--gray page--main">

        <Header />

        <main className={`page__main page__main--index ${!isMainNotEmpty ? 'page__main--index-empty' : ''}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList cities={CITIES}/>
            </section>
          </div>
          {isMainNotEmpty ?
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{filteredOffers.length} places to stay in {currentCity}</b>
                  <SortOptions sortType={SortType} currentSort={currentSort} changeSetSort={changeSetSort}/>
                  <div className="cities__places-list places__list tabs__content">
                    <OfferList offers={sortedOffers} onListItemHover={onListItemHover} classForCard='cities__place-card' classForImageWrapper='cities__image-wrapper' classForCardInfo='place-card__info' />
                  </div>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map city={filteredCity} offers={filteredOffers} currentOffer={selectedOffer}/>
                  </section>
                </div>
              </div>
            </div> :
            <MainEmpty />}
        </main>
      </div>
    </>
  );
}

export default MainScreen;
