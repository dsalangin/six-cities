import { useAppSelector } from '../../hooks';
import { getReviews } from '../../store/offers-data/selectors';
import ReviewCard from '../review-card/review-card';


function ReviewList (): JSX.Element {

  const reviews = useAppSelector(getReviews);

  return (
    <>
      <h2 className='reviews__title'>Reviews &middot; <span className='reviews__amount'>{reviews.length}</span></h2>
      <ul className='reviews__list'>
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </ul>
    </>
  );
}

export default ReviewList;
