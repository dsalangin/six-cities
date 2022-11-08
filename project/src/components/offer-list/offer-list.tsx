import {useState} from 'react';
import type {Offer} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: Offer[];
}

function OfferList({offers}: OfferListProps): JSX.Element {
  const [, setActive] = useState(0);

  function changeSetActive(id: number) {
    setActive(id);
  }

  return (
    <div className="cities__places-list places__list tabs__content">

      {offers.map((offer) => <OfferCard offer={offer} key={offer.id} changeSetActive={changeSetActive}/>)}

    </div>
  );
}

export default OfferList;
