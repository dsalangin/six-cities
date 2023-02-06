import { Offer } from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type FavoritesOffersProps = {
  cities: string[];
  offers: Offer[];
}

function FavoritesOffers ({cities, offers}: FavoritesOffersProps) {
  return (
    <main className="page__main page__main--favorites ">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cities.map((city) => (
              <li className="favorites__locations-items" key={city}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{city}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.filter((offer) => offer.city.name === city).map((offer) => (
                    <OfferCard
                      offer={offer}
                      key={offer.id}
                      classForCard='favorites__card'
                      classForImageWrapper='favorites__image-wrapper'
                      classForCardInfo='favorites__card-info'
                      widthForImage='150'
                      heightForImage='110'
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesOffers;
