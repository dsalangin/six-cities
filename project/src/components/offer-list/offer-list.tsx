import type {Offer} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: Offer[];
  onListItemHover: (id: number) => void;
}

function OfferList({offers, onListItemHover}: OfferListProps): JSX.Element {

  function changeSetActive(id: number) {
    onListItemHover?.(id);
  }

  return (
    <>
      {offers.map((offer) => <OfferCard offer={offer} key={offer.id} changeSetActive={changeSetActive}/>)}
    </>
  );
}

export default OfferList;
