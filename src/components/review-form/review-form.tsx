import {Fragment} from 'react';
import { useAppDispatch } from '../../hooks';
import { addReviewAction } from '../../store/api-actions';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  review: string;
  rating: string;
};

function ReviewForm({hotelId}: {hotelId?: string}) {
  const {register, handleSubmit, formState: {isValid}, reset} = useForm<FormValues>({mode: 'all'});
  const dispatch = useAppDispatch();

  const submitHandler: SubmitHandler<FormValues> = async (data) => {
    if(hotelId) {
      const response = await dispatch(addReviewAction({comment: data.review, hotelId, rating: Number(data.rating)}));
      if(response.meta.requestStatus === 'fulfilled') {
        reset();
      }
    }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(submitHandler)} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Array(5).fill('').map((_, i) => {
          const keyValue = 5 - i;

          return(
            <Fragment key={keyValue}>
              <input {...register('rating', {required: true})} className="form__rating-input visually-hidden" name="rating" value={keyValue} id={`${keyValue}-stars`} type="radio"/>
              <label htmlFor={`${keyValue}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })}

      </div>
      <textarea {...register('review', {required: true, minLength: 50})} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
