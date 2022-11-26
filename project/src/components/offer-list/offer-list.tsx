import type {Offer} from '../../types/offer';
import OfferCard from '../offer-card/offer-card';

type OfferListProps = {
  offers: Offer[];
  onListItemHover?: (id: number) => void;
  classForCard: string;
  classForImageWrapper: string;
}

function OfferList({offers, onListItemHover, classForCard, classForImageWrapper}: OfferListProps): JSX.Element {

  function changeSetActive(id: number) {
    onListItemHover?.(id);
  }

  return (
    <>
      {offers.map((offer) =>
        <OfferCard offer={offer} key={offer.id} changeSetActive={changeSetActive} classForCard={classForCard} classForImageWrapper={classForImageWrapper}/>
      )}
    </>
  );
}

export default OfferList;
