import {useEffect, useState} from 'react';
import OfferList from '../../components/offer-list/offer-list';
import {Offer} from '../../types/offer';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import {CITIES, SortType} from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setOffers } from '../../store/action';
import SortOptions from '../../components/sort-options/sort-options';

type MainScreenProps = {
  offers: Offer[];
}

function MainScreen ({offers}: MainScreenProps): JSX.Element {
  const [selectedOffer, setSelectedOffer] = useState<Offer>();
  const [currentSort, setCurrentSort] = useState<string>('Popular');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setOffers(offers));
  }, []);

  const currentCity = useAppSelector((state) => state.city);
  const [filteredCity] = CITIES.filter((city) => city.title === currentCity);
  const filteredOffers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === currentCity));


  const onListItemHover = (listItemId: number) => {
    const currentPoint = offers.find((offer) => offer.id === listItemId);
    setSelectedOffer(currentPoint);
  };

  const changeSetSort = (type: string) => {
    setCurrentSort(type);
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={CITIES}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {currentCity}</b>
              <SortOptions sortType={SortType} currentSort={currentSort} changeSetSort={changeSetSort}/>
              <OfferList offers={filteredOffers} onListItemHover={onListItemHover}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={filteredCity} offers={filteredOffers} selectedOffer={selectedOffer}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
