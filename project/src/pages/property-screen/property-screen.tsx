import ReviewForm from '../../components/review-form/review-form';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {useParams, useNavigate} from 'react-router-dom';
import Map from '../../components/map/map';
import OfferList from '../../components/offer-list/offer-list';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Header from '../../components/header/header';
import { useEffect } from 'react';
import { fetchCurrentOfferAction, fetchNearOffersAction, fetchReviewsAction, changeFavoriteOfferAction } from '../../store/api-actions';
import { getCurrentOffer, getDataLoadingStatus, getNearOffers } from '../../store/offers-data/selectors';
import { getAuthStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../const';
import ReviewList from '../../components/review-list/review-list';
import Spinner from '../../components/spinner/spinner';

function PropertyScreen(): JSX.Element {
  const {hotelId} = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAppSelector(getAuthStatus);
  const currentOffer = useAppSelector(getCurrentOffer);
  const nearOffers = useAppSelector(getNearOffers);
  const isDataLoading = useAppSelector(getDataLoadingStatus);

  useEffect(() => {
    if(hotelId) {
      dispatch(fetchCurrentOfferAction({hotelId: hotelId}));
      dispatch(fetchReviewsAction({hotelId: hotelId}));
      dispatch(fetchNearOffersAction({hotelId: hotelId}));
    }
  },[dispatch, hotelId]);

  useEffect(() => {
    window.scroll({left: 0, top: 0,});
  }, [hotelId]);

  const onClickFavoritesButton = () => {
    if(hotelId) {
      dispatch(changeFavoriteOfferAction({hotelId: +hotelId, isFavorite: !currentOffer?.isFavorite}));
    }
  };

  if(!currentOffer) {
    return <NotFoundScreen />;
  }

  return (
    <>
      {isDataLoading && <Spinner />}
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {currentOffer.images.slice(0,6).map((img) => (
                  <div className="property__image-wrapper" key={`${Math.random()}${img}`}>
                    <img className="property__image" src={img} alt={currentOffer.type}/>
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {currentOffer.isPremium &&
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {currentOffer.title}
                  </h1>
                  <button className={`property__bookmark-button button ${currentOffer.isFavorite ? 'property__bookmark-button--active' : ''}`} type="button" onClick={() => isAuth === AuthorizationStatus.Auth ? onClickFavoritesButton() : navigate(AppRoute.Login)}>
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${100 / 5 * Math.round(currentOffer.rating)}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{currentOffer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {currentOffer.type && currentOffer.type[0].toUpperCase() + currentOffer.type.slice(1)}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {currentOffer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {currentOffer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{currentOffer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {currentOffer.goods.map((good) => (
                      <li className="property__inside-item" key={good}>
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${currentOffer.host.isPro ? 'property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {currentOffer.host.name}
                    </span>
                    {currentOffer.host.isPro &&
                      <span className="property__user-status">
                        Pro
                      </span>}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {currentOffer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewList />
                  {isAuth === AuthorizationStatus.Auth && <ReviewForm hotelId={hotelId}/>}
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map city={currentOffer.city} offers={[...nearOffers, currentOffer]} currentOffer={currentOffer}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OfferList offers={nearOffers} classForCard='near-places__card' classForImageWrapper='near-places__image-wrapper' classForCardInfo='place-card__info'/>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
    );
}

export default PropertyScreen;
