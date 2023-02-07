import type {Offer} from '../../types/offer';
import {Link, useNavigate} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteOfferAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getAuthStatus } from '../../store/user-process/selectors';

type OfferCardProps = {
  offer: Offer;
  changeSetActive?: (id: number)=>void;
  classForCard: string;
  classForImageWrapper: string;
  classForCardInfo: string;
  widthForImage: string;
  heightForImage: string;
}

function OfferCard ({offer, changeSetActive, classForCard, classForImageWrapper, classForCardInfo, widthForImage, heightForImage}: OfferCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = useAppSelector(getAuthStatus);

  function onClickFavoritesButton() {
    if(isAuth === AuthorizationStatus.Auth) {
      dispatch(changeFavoriteOfferAction({hotelId: offer.id, isFavorite: !offer.isFavorite}));
      return;
    }
    navigate(AppRoute.Login);
  }

  function offerMouseEnterHandler() {
    if(changeSetActive) {
      changeSetActive(offer.id);
    }
  }

  function offerMouseLeaveHandler() {
    if(changeSetActive) {
      changeSetActive(0);
    }
  }

  return (
    <article className={`${classForCard} place-card`}
      onMouseEnter={offerMouseEnterHandler}
      onMouseLeave={offerMouseLeaveHandler}
    >
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div> }
      <div className={`${classForImageWrapper} place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width={widthForImage} height={heightForImage} alt="Place image"/>
        </Link>
      </div>
      <div className={classForCardInfo}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button" onClick={onClickFavoritesButton}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${100 / 5 * Math.round(offer.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
