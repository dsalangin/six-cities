import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, BookmarkAction } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavoriteOfferAction } from '../../store/api-actions';
import { getFavoriteOffers } from '../../store/offers-data/selectors';
import { getAuthStatus } from '../../store/user-process/selectors';

type BookmarkButtonProps = {
  hotelId: number;
  isPropertyPage?: boolean;
}

function BookmarkButton ({hotelId, isPropertyPage = false}: BookmarkButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAuth = useAppSelector(getAuthStatus);
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const isOfferInFavorite = favoriteOffers.find((offer) => offer.id === hotelId);

  const buttonClass = isPropertyPage ? 'property__bookmark-button' : 'place-card__bookmark-button';
  const activeButtonClass = isOfferInFavorite ? 'place-card__bookmark-button--active' : '';
  const svgWidth = isPropertyPage ? 31 : 18;
  const svgHeight = isPropertyPage ? 33 : 19;

  const onClickFavoriteButton = () => {
    if(isAuth === AuthorizationStatus.Auth) {
      dispatch(changeFavoriteOfferAction({hotelId: +hotelId, isFavorite: isOfferInFavorite ? BookmarkAction.Delete : BookmarkAction.Add}));
      return;
    }
    navigate(AppRoute.Login);
  };

  return (
    <button className={`${buttonClass} button ${activeButtonClass}`} type='button' onClick={onClickFavoriteButton}>
      <svg className='place-card__bookmark-icon' width={svgWidth} height={svgHeight}>
        <use xlinkHref='#icon-bookmark'></use>
      </svg>
      <span className='visually-hidden'>To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
