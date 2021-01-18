import plecak from 'assets/images/plecak.jpg';
import torebkaRoz from 'assets/images/torebka-roz.jpg';
import jednorozec from 'assets/images/jednorozec.png';
import chusta from 'assets/images/chusta_bg.png';
import kocyk from 'assets/images/kocyk.jpg';
import kocyknos from 'assets/images/kocyknos.jpg';

import { torebki, chusty, pluszaki, ubrania, kocyki } from 'data/data';

const initialState = {
  torebki: [
    {
      id: 1,
      title: 'Plecak',
      price: '40 zł',
      desc: ' Plecak na wakacyjne wypady',
      imageUrl: plecak,
      createdTime: '10 dni',
      type: 'Szydełko',
      category: 'torebki',
    },

    {
      id: 2,
      title: 'Torebka',
      price: '225 zł',
      desc: ' Różowa torebka stylowa',
      imageUrl: torebkaRoz,
      createdTime: '5 dni',
      type: 'Szydełko',
      category: 'torebki',
    },
    {
      id: 3,
      title: 'Torebka',
      price: '225 zł',
      desc: ' Różowa torebka stylowa',
      imageUrl: torebkaRoz,
      createdTime: '5 dni',
      type: 'Szydełko',
      category: 'torebki',
    },
    {
      id: 4,
      title: 'Plecak',
      price: '40 zł',
      desc: ' Plecak na wakacyjne wypady',
      imageUrl: plecak,
      createdTime: '10 dni',
      type: 'Szydełko',
      category: 'torebki',
    },
    {
      id: 5,
      title: 'Plecak',
      price: '40 zł',
      desc: ' Plecak na wakacyjne wypady',
      imageUrl: plecak,
      createdTime: '10 dni',
      type: 'Szydełko',
      category: 'torebki',
    },
    {
      id: 6,
      title: 'Torebka',
      price: '225 zł',
      desc: ' Różowa torebka stylowa',
      color: 'Róż',
      imageUrl: torebkaRoz,
      createdTime: '5 dni',
      type: 'Szydełko',
      category: 'torebki',
    },
  ],
  chusty: [],
  ubrania: [],
  pluszaki: [],
  kocyki: [],
};

export const rootReducer = (state = initialState, action) => {
  // eslint-disable-next-line no-console
  console.log(action);

  return state;
};
