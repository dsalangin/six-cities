import type {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
import BookmarkButton from '../bookmark-button/bookmark-button';

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
          <BookmarkButton hotelId = {offer.id} />
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
