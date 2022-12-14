import type {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
// import { useAppDispatch } from '../../hooks';
// import { changeFavoriteOfferAction } from '../../store/api-actions';

type OfferCardProps = {
  offer: Offer;
  changeSetActive: (id: number)=>void;
  classForCard: string;
  classForImageWrapper: string;
}

function OfferCard ({offer, changeSetActive, classForCard, classForImageWrapper}: OfferCardProps): JSX.Element {
  // const dispatch = useAppDispatch();
  // function buttonActiveHandler() {
  //   dispatch(changeFavoriteOfferAction({hotelId: offer.id, isFavorite: !offer.isFavorite}));
  // }

  function offerMouseEnterHandler() {
    changeSetActive(offer.id);
  }

  function offerMouseLeaveHandler() {
    changeSetActive(0);
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
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
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
