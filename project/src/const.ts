enum AppRoute {
  Main = '/',
  Login = '/login',
  Favourites = '/favourites',
  Property = '/offer/*',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}

export {AppRoute, AuthorizationStatus};
