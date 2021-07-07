import DetailPage from '../views/pages/detail-page';
import FavoritePage from '../views/pages/favorite-page';
import HomePage from '../views/pages/home-page';
import SearchPage from '../views/pages/search-page';

const routes = {
  '/': HomePage, // Default Page
  '/home': HomePage,
  '/search/:id': SearchPage,
  '/detail/:id': DetailPage,
  '/favorite': FavoritePage,
};

export default routes;
