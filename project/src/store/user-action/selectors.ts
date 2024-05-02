import { NameSpace } from '../../const';
import { State } from '../../types/store';

const getCity = (state: State) => state[NameSpace.Action].city;

export {getCity};
