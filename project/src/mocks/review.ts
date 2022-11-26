import {Review} from '../types/review';

const reviews: Review[] = [{
  id: 1,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 1,
    isPro: false,
    name: 'Oliver',
  },
  rating: 4,
  date: 'April 2019',
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
},
{
  id: 2,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 2,
    isPro: false,
    name: 'Laila',
  },
  rating: 5,
  date: 'October 2022',
  comment: 'Would definitely stay there next time I visit amsterdam. The location is ideal.'
},
{
  id: 3,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 3,
    isPro: false,
    name: 'Alex',
  },
  rating: 5,
  date: 'September 2022',
  comment: 'Very nice, modern facilities. Friendly staff. Good location. Great value.'
}];

export {reviews};
