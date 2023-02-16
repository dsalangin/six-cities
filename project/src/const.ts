enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Property = '/offer',
}

enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  NearOffers = '/hotels/{hotelId}/nearby',
  Reviews = '/comments/{hotelId}',
  Property = '/hotels/{hotelId}',
  FavoriteOffers = '/favorite',
  FavoriteOffer = '/favorite/{hotelId}/{status}',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const CITIES = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85612303673775,
      longitude: 2.3549292541869713,
      zoom: 10
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.94420919620896,
      longitude: 6.94534141210058,
      zoom: 10
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.84860056882877,
      longitude: 4.362368745827621,
      zoom: 10
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.55987613787982,
      longitude: 9.999201777218904,
      zoom: 10
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.23192226557335,
      longitude: 6.770396652909783,
      zoom: 10
    }
  }
];

const SortType = {
  POPULAR: 'Popular',
  PRICELOWTOHIGHT: 'Price: low to high',
  PRICEHIGHTTOLOW: 'Price: high to low',
  RAITING: 'Top rated first',
};

enum NameSpace {
  Data = 'DATA',
  Action = 'ACTION',
  User = 'USER',
}

enum BookmarkAction {
  Add = 1,
  Delete = 0,
}

export {AppRoute, APIRoute, AuthorizationStatus, CITIES, SortType, NameSpace, BookmarkAction};
