/* eslint-disable eqeqeq */
import RestaurantApiSource from '../../data/restaurantapi-source';
import LoadingIndicator from '../../utils/loading-indicator-initiator';
import SearchBoxInitiator from '../../utils/search-box-initiator';
import {
  createHeadlineItemTemplate, createRestaurantItemTemplate, createNetworkError, create404Error,
} from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
      <div class="hero">
        <div class="hero__inner">
            <h1 class="hero__title">
            Kumpulan Restoran Terbaik Di Seluruh Indonesia
            </h1>
            <p class="hero__tagline">
            Temukan 1000+ rekomendasi restoran terbaik di seluruh penjuru
            indonesia
            </p>
            <div class="hero__search">
              <input
                  class="hero__searchbox"
                  type="text"
                  name="search"
                  id="searchRestaurant"
                  placeholder="Cari lebih dari 1000+ restoran ..."
              />
              <button
                  id="searchButton"
                  class="hero__searchbutton"
                  type="button"
                  name="searchButton"
                  aria-label="button-cari"
              >
                  Cari
              </button>
            </div>
        </div>
    </div>
    <main id="maincontent">        
        <section class="content">
            <article class="headline" id="headline"></article>
            <div class="latest">
            <h1 class="latest__label">Explore Restaurant</h1>
            <div class="posts" id="posts"></div>
            </div>
        </section>
    </main>
      `;
  },

  async afterRender() {
    // set hero image
    if (window.screen.width <= 480) {
      document.querySelector('.hero').style.backgroundImage = "url('./images/heros/hero-image_1-small.jpg')";
    } else {
      document.querySelector('.hero').style.backgroundImage = "url('./images/heros/hero-image_1-large.jpg')";
    }
    try {
      const content = document.querySelector('.content');
      LoadingIndicator.init(content);
      const restaurants = await RestaurantApiSource.listRestaurants();
      const headlineContainer = document.querySelector('#headline');
      const postContainer = document.querySelector('#posts');

      restaurants.forEach((restaurant) => {
        postContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });

      headlineContainer.innerHTML = createHeadlineItemTemplate(restaurants[0]);

      SearchBoxInitiator.init({
        searchBox: document.querySelector('#searchRestaurant'),
        searchButton: document.querySelector('#searchButton'),
      });
      LoadingIndicator.removeLoading();
    } catch (error) {
      // render detail
      const detailContainer = document.querySelector('.content');

      if (error == 'TypeError: Failed to fetch') {
        console.log('error caching');
        detailContainer.innerHTML = createNetworkError();
      } else {
        console.log('error 404');
        detailContainer.innerHTML = create404Error();
      }
      console.log(error);

      LoadingIndicator.removeLoading();
    }
  },
};

export default HomePage;
