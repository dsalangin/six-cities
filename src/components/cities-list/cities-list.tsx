import { Link } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/user-action/user-action';
import type {City} from '../../types/city';

type CitiesListProps = {
  cities: City[];
};

function CitiesList ({cities}: CitiesListProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.ACTION.city);
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) =>
        (
          <li className="locations__item" key={city.name}>
            <Link className={`locations__item-link tabs__item ${city.name === currentCity ? 'tabs__item--active' : ''}`} to={`#${city.name}`} onClick={() => dispatch(changeCity(city.name))}>
              <span>{city.name}</span>
            </Link>
          </li>)
      )}
    </ul>
  );
}

export default CitiesList;
